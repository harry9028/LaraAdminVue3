<?php

namespace App\Http\Controllers\API;
use DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Helpers\General;
use App\Models\SMSGetWay;
use App\Models\User;
use App\Models\SMSAuth;
class SMSGetWayController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search = request()->input('q');
        if ($search) {
                return SMSGetWay::where(function($query) use ($search){
                    $query->where('user', 'LIKE', "%$search%")
                            ->orwhere('api_key','LIKE',"%$search%")
                            ->orwhere('sender_id','LIKE',"%$search%")
                            ->orwhere('col1','LIKE',"%$search%");
                })->orderBy('id', 'DESC')->paginate(10);
        }else{

            return SMSGetWay::where('isActive',1)->get();
        }
    }

  
    public function store(Request $request)
    {
        //
    }


    public function show($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        // SMSAuth::where('user_id', $id)
        // return $request->all();
    }


    public function destroy($id)
    {
        //
    }
    public function send(Request $request)
    {

       
        // Validation here
        $this->validate($request,[
            'mobile'    => 'required|regex:^[6789]\\d{9}$^|min:10|max:10',
            'smsText'   => 'required',
            'api_flag'  => 'required',
        ]);

        // current user logged in
        $user = \Auth::user();
        // current user get sms credentials 
        $user_data = User::where('id',$user->id)->select('name as author_name', 'id as user_id', 'id')
        ->first();
        $api = $request->input('api_flag');
        $arrayName = array();
        $credentials = $user_data->SMSInfo($api)->first();

        if(!empty($credentials)) {

            if($credentials['total_left_sms'] > 0){
                $response_code = 203;
                $credentials['author_name'] = $user_data['author_name'];
                $credentials['user_id']     = $user_data['user_id'];
                $credentials['mobile']      = $request->input('mobile');
                $credentials['smsText']     = $request->input('smsText');
                
                $response ="";
                // send sms and create history of sms
                if($api==1){
                    $response = General::SMSHorizone($credentials);
                }else if($api==3){
                    $response = General::PinnacleSMS($credentials);
                }else{
                    $response = General::NagpurSMS($credentials);
                }
                // print_r($credentials);
                // die;
                //$response = 1234;
                // auto deduct sms left
                if(is_numeric($response) || $response=='success'){
                    $NumberOfUsedSMS = ceil(strlen($credentials['smsText']) / 160);
                    $res = SMSAuth::where('is_active', 1)
                    ->where('id', $credentials->id)
                    ->where('user_id', $user->id)
                    ->update([
                        'total_used_sms' => DB::raw('total_used_sms + '. $NumberOfUsedSMS),
                        'total_left_sms' => DB::raw('total_left_sms - '. $NumberOfUsedSMS),
                    ]);   
                    $arrayName = array('message' => 'Successfully sent', 'status'=> $res);
                    $response_code = 200;
                }else{
                    $arrayName = array('message' => $response, 'status'=> false);
                    $response_code = 504;
                }
                return response($arrayName, $response_code)
                      ->header('Content-Type', 'application/json');
                
            }else if($credentials['total_left_sms']<=0){
                $arrayName = array('message' => 'SMS Wallet is zero', 'status'=> false);
                return response($arrayName, 422)
                      ->header('Content-Type', 'application/json');
            }else{
                $arrayName = array('message' => 'SMS credentials not configured', 'status'=> false);
                return response($arrayName, 401)
                      ->header('Content-Type', 'application/json');
            }
        }else{
             $arrayName = array('message' => 'SMS credentials not configured', 'status'=> false);
                return response($arrayName, 401)
                      ->header('Content-Type', 'application/json');
        }


    }
}
