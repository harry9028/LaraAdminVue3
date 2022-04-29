<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\TMPOSPaymnetSettings;
use App\Http\Requests\UserPaymentSettingsRequest;
class AtlanticUserPaymentSettings extends Controller
{
   public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index(Request $request)
    {
        $tmpos_id = $request->input('tmpos_id');
        $data['result'] = TMPOSPaymnetSettings::where('tmpos_id', $tmpos_id)
            ->get();
        return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserPaymentSettingsRequest $request)
    {
        $data = request()->all();
        return TMPOSPaymnetSettings::create($data);
        
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
        $payment = TMPOSPaymnetSettings::findOrFail($id);
        $payment->update($request->all());
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
