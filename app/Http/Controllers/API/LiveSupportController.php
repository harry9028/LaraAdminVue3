<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\LiveSupportEnquiry;
use DB;
class LiveSupportController extends Controller
{
   
    public function index()
    {
        return DB::connection('tmpos_mysql')->table('live_support_enquiry')
             ->join('tmpos_stores', 'live_support_enquiry.store_id', '=', 'tmpos_stores.store_id')
            ->orderBy('id', 'desc')
            ->select('live_support_enquiry.*', 'tmpos_stores.name as outlet_name')
            ->paginate(10);
        // return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
        $user = LiveSupportEnquiry::findOrFail($id);
        $data = $request->all();
        $user->update($data);
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
