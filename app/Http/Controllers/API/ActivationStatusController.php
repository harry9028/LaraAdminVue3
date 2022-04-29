<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mail;
use App\Models\ActivationStatus;
use App\Models\TMBILL_PRODUCT;
use App\Models\TMBILL_Feedback;
use App\Mail\TMBillRegistrationMail;
use App\Helpers\General;
use App\Models\SMSAuth;
class ActivationStatusController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search         = request()->input('q');
        $expire7days    = request()->input('expire7days');

        // print_r($expire7days);
        // die;
        if ($search) {
            return ActivationStatus::where(function($query) use ($search, $expire7days){
                if($expire7days=='true'){
                    $query->whereBetween('end_date', [date('Y-m-d H:i:s'), date('Y-m-d H:i:s', strtotime('+7 days'))]);
                }else{
                    $query->orwhere('name','LIKE',"%$search%")
                        ->orwhere('mobile','LIKE',"%$search%")
                        ->orwhere('product','LIKE',"%$search%")
                        ->orwhere('email','LIKE',"%$search%");
                }
            })->orderBy('end_date', 'DESC')->paginate(10);
        }else{
            $obj = ActivationStatus::orderBy('id', 'DESC');
            if($expire7days=='true'){
                $obj->whereBetween('end_date', [date('Y-m-d H:i:s'), date('Y-m-d H:i:s', strtotime('+7 days'))]);
            }
            return $obj->paginate(10);
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
            'name'          => 'required|regex:/^[a-zA-Z0-9\s]+$/|max:35',
            'email'         => 'required|string|email|max:191|unique:tmbill_activation_status,email',
            'mobile'        => 'required|regex:^[789]\\d{9}$^|min:10|max:10|unique:tmbill_activation_status,mobile',
            'type_software' => 'required',
            'duration'      => 'required|numeric',
            'mac_address'   => 'nullable|regex:/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/|max:35|unique:tmbill_activation_status,mac_address',
        ]);

        $data = $request->all();
        $data['start_date'] = date('Y-m-d');
        $data['end_date']   = date('Y-m-d', strtotime("+".$data['duration']." year"));

        $key = '';
        $limit = 16;
        for($i = 0; $i < $limit; $i++) { 
            $key .= mt_rand(0, 9); 
        }
        $data['product'] =  $key;
        ActivationStatus::create($data);

        // print_r($data);
        
        $data1=array(
            "name"          =>$data['name'],
            "email"         =>$data['email'],
            "mobile"        =>$data['mobile'],
            "product_key"   =>$key,
            "time"          =>date("h:i:s"),
            "date"          =>date("Y-m-d"),
            "payment_mode"  =>"offline",
            "product_type"  =>$data['type_software']
        );

        TMBILL_PRODUCT::create($data1);
        // send mail
        Mail::to($data['email'])->send(new TMBillRegistrationMail($data));  
        
        // current user logged in
        $auth = \Auth::user();
        $credentials = SMSAuth::where('user_id', $auth->id)
            ->where('is_active',1)
            ->where('api_flag',0)
            ->first();
        $credentials['mobile']      = $request->input('mobile');
        $credentials['smsText']     = "Your TMBill activation details as follows\n\nName :  ".$request->input('name')."\nEmail : ".$request->input('email')."\nMobile : ".$request->input('mobile')."\nValidity : ".$request->input('duration')."\nProduct Type : ".$request->input('type_software')."\nProduct Key : ".$key."\nTeam,\ntmbill.in,\nTechMainstay Software Pvt. Ltd.";
        $response = General::NagpurSMS($credentials);
        return ['message' => 'APP info has been generated', 'status'=> true, 'sms_response'=> $response];
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
        $updateUser = ActivationStatus::find($id);
        $this->validate($request,[
            'name'          => 'required|regex:/^[a-zA-Z0-9\s]+$/|max:35',
            // 'email'         => 'required|string|email|max:191|unique:tmbill_activation_status,email,'.$updateUser->id,
            // 'mobile'        => 'required|regex:^[6789]\\d{9}$^|min:10|max:10|unique:tmbill_activation_status,mobile,'. $updateUser->id,
            'mac_address'   => 'nullable|regex:/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/|max:35|unique:tmbill_activation_status,mac_address,'.$updateUser->id,
        ]);

        $updateUser->update($request->all());

        // $credentials                = SMS_USAGE::where('tracking_id', 8239322)->first();       
        // $credentials['mobile']      = $request->input('mobile');
        // $credentials['smsText']     = "Your TMBill activation details as follows\n\nName :  ".$request->input('name')."\nEmail : ".$request->input('email')."\nMobile : ".$request->input('mobile')."\nValidity : ".$request->input('duration')."\nProduct Type : ".$request->input('type_software')."\nProduct Key : ".$request->input('product')."\nTeam,\ntmbill.in,\nTechMainstay Software Pvt. Ltd.";
        
            
        // send sms and create history of sms
        // $response = General::NagpurSMS($credentials);
        
        //Mail::to($updateUser['email'])->send(new TMBillRegistrationMail($updateUser));

        // current user logged in
        // $auth = \Auth::user();
        // $credentials = SMSAuth::where('user_id', $auth->id)
        //     ->where('is_active',1)
        //     ->where('api_flag',0)
        //     ->first();
        // $credentials['mobile']      = $request->input('mobile');
        // $credentials['smsText']     = "Your TMBill activation details as follows";

        // // return $credentials;
        // $response = General::NagpurSMS($credentials);

        return ['message' => 'APP info has been updated', 'status'=> true];
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
            'status'                        => true,
            'total'                         => ActivationStatus::where('activation_status',1)->count(),
            'pos_desktop_history_total'     => TMBILL_PRODUCT::count(),
            'feedback_total'                => TMBILL_Feedback::count(),
        );
    }
}
