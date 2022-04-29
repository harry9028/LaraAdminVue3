<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DeviceInfo;
class DeviceInfoController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search = request()->input('q');
        if ($search) {
                return DeviceInfo::where(function($query) use ($search){
                    $query->where('Product_key', 'LIKE', "%$search%")
                    ->orwhere('DeviceIMEI','LIKE',"%$search%")
                    ->orwhere('Manufacturer','LIKE',"%$search%")
                    ->orwhere('model','LIKE',"%$search%")
                    ->orwhere('location','LIKE',"%$search%")
                    ->orwhere('osName','LIKE',"%$search%")
                    ->orwhere('Usermobile','LIKE',"%$search%");
                })->orderby('id', 'desc')->paginate(10);
        }else{

            return DeviceInfo::orderBy('id', 'desc')->paginate(10);
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
        return DeviceInfo::where('Usermobile', $id)->get();
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
        return array('status'=> true, 'total'=> DeviceInfo::count());
    }
}
