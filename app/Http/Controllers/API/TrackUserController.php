<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\TrackUser;
class TrackUserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search = request()->input('q');
        if ($search) {
            return TrackUser::where(function($query) use ($search){
                $query->orwhere('name','LIKE',"%$search%")
                ->orwhere('mobile','LIKE',"%$search%")
                ->orwhere('email','LIKE',"%$search%")
                ->orwhere('macaddress','LIKE',"%$search%");
            })->orderBy('id', 'DESC')->paginate(10);
        }else{
            return TrackUser::orderBy('id', 'DESC')->paginate(10);
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
        return TrackUser::where('mobile',$id)->orderBy('id', 'desc')->get();
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
}
