<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\TMPOS_ENQUIRY;
class TMPOSEnquiryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search = request()->input('q');
        if ($search) {
            return TMPOS_ENQUIRY::where(function($query) use ($search){
                $query->orwhere('owner_name','LIKE',"%$search%")
                ->orwhere('mobile','LIKE',"%$search%")
                ->orwhere('email','LIKE',"%$search%")
                ->orwhere('hotel_name','LIKE',"%$search%");
            })->orderBy('date_time', 'DESC')->paginate(10);
        }else{
            return TMPOS_ENQUIRY::orderBy('date_time', 'DESC')->paginate(10);
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
        //
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
        return array('status'=> true, 'total'=> TMPOS_ENQUIRY::count());
    }
}
