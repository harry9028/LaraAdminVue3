<?php

namespace App\Http\Controllers\API;
use Illuminate\Support\Facades\Hash;
use Mail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\TMPOS_USER;
use App\Models\Country;
use App\Models\User;
use App\Models\PointOfContact;
use App\Models\SMSAuth;
use App\Mail\TMPOSRegistrationMail;
use App\Helpers\General;
use App\Models\Outlet;
use DB;
use Illuminate\Support\Str;
class TMPOSController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        
        
        $end        = request()->input('end');
        $start      = request()->input('start');
        // return $registered_at;
        $search = request()->input('q');
        $all = request()->input('all');
        if ($search || $start || $end) {
                return TMPOS_USER::where(function($query) use ($search, $start, $end){
                    
                    if($start && $end){
                        $start = date('Y-m-d', strtotime($start));
                        $end = date('Y-m-d', strtotime($end));
                        $query->whereRaw("CAST(registration_time  AS DATE) BETWEEN '$start' AND '$end'");
                    }else if($search){
                        $query->where('id', 'LIKE', "%$search%")
                                ->orwhere('username','LIKE',"%$search%")
                                ->orwhere('name','LIKE',"%$search%")
                                ->orwhere('tmpos_id','LIKE',"%$search%")
                                ->orwhere('mobile','LIKE',"%$search%")
                                ->orwhere('address','LIKE',"%$search%")
                                ->orWhere('owner_name','LIKE',"%$search%");
                    }
                    
                })
                ->with('POC')
                ->orderBy('id', 'DESC')->paginate(10);
        }elseif($all){
            return TMPOS_USER::select('tmpos_id', 'owner_name as name')->orderBy('owner_name', 'asc')->get();
        }else{
            return TMPOS_USER::select('id','tmpos_id','name','email','mobile','username','address','owner_name','password','firebase_token','send_notification','registration_time','registration_date','is_active','store_creation_limit','msg','country','country_id','currency','sms_api_flag','sms_total','sms_sender_id','sms_api_key','sms_api_user','sms_api_password','sms_left','sms_sent','profile_photo','type','email_verified_at','dunzo_client_id','dunzo_client_secret','peid','template_id','show_poweredby','login_deactive_message','is_enable_two_factor_auth','nextel_api_key','live_tracking_enabled','upsale_integration', 'access_level')->orderBy('id', 'DESC')->with('POC')->paginate(10);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'name'=> 'required|regex:/^[a-zA-Z0-9\s]+$/|max:35',
            'mobile'=> 'required|regex:^[0123456789]\\d{6}$^|min:6|max:15',
            // 'email' => 'required|string|email|max:191|unique:tmpos_mysql.tmpos_owner,email',
            'password'=> 'required|string|min:3|max:191',
            'send_notification'=> 'nullable',
            'username'  => 'required|regex:/^[a-zA-Z0-9\s]+$/|max:12|unique:tmpos_mysql.tmpos_owner,username',
            'owner_name'  => 'required|regex:/^[a-zA-Z0-9\s]+$/|max:50',
            'address'  => 'required|max:360',
            'sms_api_key'  => 'nullable|max:255',
            'sms_api_flag'  => 'nullable|max:10',
            'email_verified_at'=> 'required|date',
            'country_id'    => 'required'
        ]);
        
        $data = $request->all();
        $country = Country::find($request->input('country_id'));
        $data['country']    = $country->name;
        $data['currency']   = $country->currency_symbol;
        $data['sms_total']  = $request->input('sms_left'); 
        $data['registration_time']  = date('Y-m-d H:i:s');
        $data['registration_date']  = date('Y-m-d');
        $data['email_verified_at']  = date('Y-m-d H:i:s', strtotime($request->input('email_verified_at')));
        
        unset($data['msg']);
        

        $auth = \Auth::user();
        $credentials = [];
        // $credentials = SMSAuth::where('user_id', $auth->id)
        //     ->where('is_active',1)
        //     ->where('api_flag',0)
        //     ->first();
        $credentials['peid']        = "";
        $credentials['tempid']      = "";
        $credentials['mobile']      = $request->input('mobile');
        $credentials['smsText']     = "Your TMPOS activation details as follows\n\nName :  ".$request->input('name')."\nEmail : ".$request->input('email')."\nMobile : ".$request->input('mobile')."\nUsername : ".$request->input('username')."\nPassword : ".$request->input('password')."\nTeam,\ntmbill.in,\nTechMainstay Software Pvt. Ltd.";
        $response = General::NagpurSMS($credentials);

        $data['password'] = Hash::make($request->input('password'));
        $user = TMPOS_USER::create($data);

       
        // $user_info      = User::where('contact_no', $request->input('poc'))->first();
        $user_info = PointOfContact::select('poc_name as name','poc_contact_no as contact_no')
            ->where('poc_contact_no',$request->input('poc'))
            ->first();
        
        if($request->input('poc') && $user_info){
                PointOfContact::create([
                    'tmpos_id' => $request->input('tmpos_id'),
                    'poc_name' => $user_info->name,
                    'poc_contact_no' => $user_info->contact_no,
                ]);
        }

        if($user->id){
            Mail::to($data['email'])->send(new TMPOSRegistrationMail($data));
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
       
        $user = TMPOS_USER::findOrFail($id);

       
        $this->validate($request,[
            'name'=> 'required|regex:/^[a-zA-Z0-9\s]+$/|max:35',
            'mobile'=> 'required|regex:^[0123456789]\\d{6}$^|min:6|max:15',
            // 'email' => 'required|string|email|max:191|unique:tmpos_mysql.tmpos_owner,email,'.$user->id,
            'password'=> 'nullable|string|min:3|max:191',
            'send_notification'=> 'nullable',
            'username'  => 'required|regex:/^[a-zA-Z0-9\s]+$/|max:12',
            'owner_name'  => 'required|regex:/^[a-zA-Z0-9\s]+$/|max:50',
            'address'  => 'required|max:360',
            'sms_api_key'  => 'nullable|max:255',
            'sms_api_flag'  => 'nullable|max:10',
            'email_verified_at'=> 'required|date',
            'country_id'    => 'required'
        ]);

        
        $request->merge(['email_verified_at' => date('Y-m-d H:i:s', strtotime($request['email_verified_at']))]);
        if(!empty($request->password)){
                $request->merge(['password' => Hash::make($request['password'])]);
        }
        
        
        $country = Country::find($request->input('country_id'));
        $request->merge(['country' => $country->name]);
        $request->merge(['currency' => $country->currency_symbol]);

        
        $user->update($request->all());
        
        $poc            = PointOfContact::where('tmpos_id', $request->input('tmpos_id'))->first();
        // $user_info      = User::where('contact_no', $request->input('poc'))->first();
        $user_info = PointOfContact::select('poc_name as name','poc_contact_no as contact_no')
            ->where('poc_contact_no',$request->input('poc'))
            ->first();
        
        // echo '<pre>';
        // print_r($user_info);
        // echo '</pre>';
        // die();
        if($request->input('poc') && $user_info){
            if($poc){
                PointOfContact::where('tmpos_id', $request->input('tmpos_id'))
                ->update([
                    'tmpos_id' => $request->input('tmpos_id'),
                    'poc_name' => $user_info->name,
                    'poc_contact_no' => $user_info->contact_no,
                ]);
            }else{
                PointOfContact::create([
                    'tmpos_id' => $request->input('tmpos_id'),
                    'poc_name' => $user_info->name,
                    'poc_contact_no' => $user_info->contact_no,
                ]);
            }
        }

        
        return ['message' => 'Updated the user info'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function dashboard()
    {
        return array(
            'status'=> true, 
            'total'=> TMPOS_USER::count(),
            'tmpos_total_outlets'=> Outlet::where('active', 1)->count()
        );
    }
    public function getOutlets($tmpos_id)
    {
        return Outlet::where('tmpos_id', $tmpos_id)->select('store_id', 'name')->get();
    }
    public function getOutletsList()
    {
        $search             = request()->input('q');
        $start      = request()->input('start');
        $end        = request()->input('end');

        $activation_expires_start      = request()->input('activation_expires_start');
        $activation_expires_end        = request()->input('activation_expires_end');


        $sql = Outlet::with('AtlanticUser')
            ->with('LastOrder:store_id,orderDateTime,app_source')
            ->select('store_id', 'id','name', 'tmpos_id','contact_phone','email', 'active', 'deactivate_message', 'created_at', 'activation_expires_at');
        if($search){
                $sql->where(function($mysql) use ($search){
                    $mysql->where('name', 'LIKE', "%$search%")
                    ->orwhere('store_id','LIKE',"%$search%")
                    ->orwhere('contact_phone','LIKE',"%$search%")
                    ->orwhere('email','LIKE',"%$search%")
                    ->orwhere('tmpos_id','LIKE',"%$search%");

                });
        }
        if($start && $end){
            $start = date('Y-m-d', strtotime($start));
            $end = date('Y-m-d', strtotime($end));
            $sql->whereRaw("CAST(created_at  AS DATE) BETWEEN '$start' AND '$end'");
        }
        if($activation_expires_start && $activation_expires_end){
            $start = date('Y-m-d', strtotime($activation_expires_start));
            $end = date('Y-m-d', strtotime($activation_expires_end));
            $sql->whereRaw("CAST(activation_expires_at  AS DATE) BETWEEN '$start' AND '$end'");
        }
        $data = $sql->orderBy('id', 'desc')
            ->paginate(10);
        
        return $data;
    }
    public function updateOutlet(Request $request, $id)
    {
        $expired_days = $request->input('expired_days');
        $activation_expires_at = date('Y-m-d H:i:s', strtotime("+$expired_days day"));
        return Outlet::where('id', $id)->update([
            'active'=> $request->active,
            'deactivate_message'=> $request->deactivate_message,
            'activation_expires_at' => $activation_expires_at
        ]);
        
    }
    public function resendMail($id)
    {
        $user = TMPOS_USER::where('id',$id)->select('email', 'tmpos_id', 'name', 'username','mobile')->first()->toArray();
        $user['password'] = Str::random(8);  
        TMPOS_USER::where('id', $id)->update([
            'password' => Hash::make($user['password'])
        ]);
        Mail::to($user['email'])
            ->send(new TMPOSRegistrationMail($user));
        echo "Email Sent. Check your inbox.";
    }
    public function findUser(Request $request){
        if($request->q){
                $search = $request->q;
                return TMPOS_USER::select('tmpos_id', 'owner_name as name')->where(function($query) use ($search){
                            $query->where('name','LIKE',"%$search%")
                            ->orWhere('owner_name','LIKE',"%$search%");
                })
                ->orderBy('owner_name', 'asc')
                ->take(10)->get();
        }else{
            return TMPOS_USER::select('tmpos_id', 'owner_name as name')->orderBy('owner_name', 'asc')->take(10)->get();
        }
    }
    public function getTemplates($id)
    {
        return DB::connection('tmpos_mysql')->table('sms_templates')->where('tmpos_id', $id)->get();
    }
    public function addTemplate(Request $request){

        $validated = $request->validate([
            'template_id'       => 'required',
            'template_name'     => 'required',
            'template_message'  => 'required',
        ]);

        DB::connection('tmpos_mysql')->table('sms_templates')->insert([
           'tmpos_id'               => $request->tmpos_id,
           'template_id'            => $request->template_id,
           'template_name'          => $request->template_name,
           'template_message'       => $request->template_message,
           'type'                   => $request->type,
           'whats_app_json'         => trim(preg_replace('/\s+/', ' ', $request->whats_app_json)),
           'created_at'             => now(),
           'updated_at'             => now()
        ]);
    }
    public function updateTemplate(Request $request, $id){
        $validated = $request->validate([
            'template_id'       => 'required',
            'template_name'     => 'required',
            'template_message'  => 'required',
        ]);

        // echo '<pre>';
        // print_r($request->whats_app_json);
        // echo '</pre>';
        // die();
        DB::connection('tmpos_mysql')->table('sms_templates')->where('id', $id)->update([
           'template_id'            => $request->template_id,
           'template_name'          => $request->template_name,
           'template_message'       => $request->template_message,
           'type'                   => $request->type,
           'whats_app_json'         => trim(preg_replace('/\s+/', ' ', $request->whats_app_json)),
           'updated_at'             => now()
        ]);
    }
}
