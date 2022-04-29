<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\SMS_USAGE;
class SMSUsageController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search = request()->input('q');
        if ($search) {
                return SMS_USAGE::where(function($query) use ($search){
                    $query->where('tracking_id', 'LIKE', "%$search%")
                            ->orwhere('name','LIKE',"%$search%")
                            ->orwhere('sender_id','LIKE',"%$search%")
                            ->orwhere('api_key','LIKE',"%$search%")
                            ->orwhere('username','LIKE',"%$search%");
                })->orderBy('id', 'DESC')->paginate(10);
        }else{

            return SMS_USAGE::orderBy('id', 'DESC')->paginate(10);
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
    //$key = NULL;
    //     $limit = 7;
    //     for($i = 0; $i < $limit; $i++) { 
    //         $key .= mt_rand(0, 9); 
    //     }
    //     $request->merge(['tracking_id' => $key]);

    // return $request->all();
        return SMS_USAGE::create($request->all());
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
        $sms = SMS_USAGE::findorfail($id);
        $sms->update($request->all());
        return array('status' => true, 'message'=> 'success');

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
}
