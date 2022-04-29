<?php

namespace App\Http\Controllers\API;
use Mail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\TMCHANNEL_LOGIN;
use App\Mail\TMChannelRegistrationMail;
use App\Models\SMSAuth;
use App\Models\ChannelStores;
use App\Models\TMChannelOrders;
use App\Helpers\General;

class TMChannelController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index(Request $request)
    {

        $search = $request->input('q');
        $all = $request->input('all');
        if ($search) {
                return TMCHANNEL_LOGIN::select('id','tracking_id', 'name', 'email','mobile',
                'username', 'address','owner_name', 'registration_date', 'password','api_key','registration_time',
                'is_active','referance_url','is_subadmin','notification_flag','is_tmbill_user','footer_note','isMultiClient','created_at'    
            )
                ->where(function($query) use ($search){
                    $query->where('id', 'LIKE', "%$search%")
                            ->orwhere('username','LIKE',"%$search%")
                            ->orwhere('name','LIKE',"%$search%")
                            ->orwhere('tracking_id','LIKE',"%$search%")
                            ->orwhere('mobile','LIKE',"%$search%")
                            ->orWhere('owner_name','LIKE',"%$search%");
                })->paginate(10);
        }else if($all){
            return TMCHANNEL_LOGIN::select('tracking_id', 'owner_name')->orderBy('owner_name', 'ASC')->get();
        }else{
            return TMCHANNEL_LOGIN::select('id','tracking_id', 'name', 'email','mobile',
                'username', 'address','owner_name', 'registration_date', 'password','api_key','registration_time',
                'is_active','referance_url','is_subadmin','notification_flag','is_tmbill_user','footer_note','isMultiClient','created_at'    
            )->orderBy('created_at', 'DESC')->paginate(10);
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
            'email' => 'required|string|email|max:191|unique:tmchannel_mysql.ch_login,email',
            'mobile'=> 'required|regex:^[6789]\\d{9}$^|min:10|max:10',
            'password'=> 'required|string|min:8|max:191',
            'notification_flag'=> 'required',
            'username'  => 'required|regex:/^[a-zA-Z0-9\s]+$/|max:12',
            'owner_name'  => 'required|regex:/^[a-zA-Z0-9\s]+$/|max:35',
            'address'  => 'required|max:360',
            'api_key'  => 'required|max:255',
        ]);
        $data = request()->all();
        $data['registration_date'] = date('Y-m-d');
        $data['registration_time'] = date('Y-m-d H:i:s');
        if(!$request['tracking_id']){
            $data['tracking_id'] = strtotime("now");
        }
        TMCHANNEL_LOGIN::create($data);
        Mail::to($data['email'])->send(new TMChannelRegistrationMail($data));

        $auth = \Auth::user();
        $credentials = SMSAuth::where('user_id', $auth->id)
            ->where('is_active',1)
            ->where('api_flag',0)
            ->first();

        $credentials['mobile']      = $request->input('mobile');
        $credentials['smsText']     = "Your TMChannel activation details as follows\n\nName :  ".$request->input('name')."\nEmail : ".$request->input('email')."\nMobile : ".$request->input('mobile')."\nUsername : ".$request->input('username')."\nPassword : ".$request->input('password')."\nTeam,\ntmbill.in,\nTechMainstay Software Pvt. Ltd.";
        $response = General::NagpurSMS($credentials);

        return array('status'=> true);
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
        $user = TMCHANNEL_LOGIN::findOrFail($id);

        $this->validate($request,[
            'name'=> 'required|regex:/^[a-zA-Z0-9\s]+$/|max:35',
            'email' => 'required|string|email|max:191|unique:tmchannel_mysql.ch_login,email,'.$user->id,
            'mobile'=> 'required|regex:^[6789]\\d{9}$^|min:10|max:10',
            'password'=> 'required|string|min:8|max:191',
            'notification_flag'=> 'required',
            'username'  => 'required|regex:/^[a-zA-Z0-9\s]+$/|max:12',
            'owner_name'  => 'required|regex:/^[a-zA-Z0-9\s]+$/|max:35',
            'address'  => 'required|max:360',
            'api_key'  => 'nullable|max:255',
        ]);

        $user->update($request->all());
        // Mail::to($user['email'])->send(new TMChannelRegistrationMail($user));
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
        return array('status'=> true, 'total'=> TMCHANNEL_LOGIN::count());
    }
    public function getStores($tracking_id)
    {
        return ChannelStores::where('tracking_id', $tracking_id)
            ->select('name', 'ref_id')->get();
    }
    public function getChannelOrders()
    {
        return TMChannelOrders::where('store_ref_id', 6019130840289)
        // ->select('id', 'json_data')
        ->orderBy('id', 'desc')
        ->paginate(100);

    }
}
