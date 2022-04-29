<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\TMBILL_KICHEN_APP;
class TMBillkitchenAppController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search = request()->input('q');
        if ($search) {
            return TMBILL_KICHEN_APP::where(function($query) use ($search){
                $query->orwhere('Mobile','LIKE',"%$search%")->orwhere('OTP','LIKE',"%$search%");
            })->orderBy('id', 'DESC')->paginate(10);
        }else{
            return TMBILL_KICHEN_APP::orderby('id', 'desc')->paginate(10);
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
        $user = TMBILL_KICHEN_APP::findOrFail($id);
        $this->validate($request,[
            'Name'=> 'required|regex:/^[a-zA-Z0-9\s]+$/|max:35',
            'Email' => 'required|string|email|max:191|unique:tmbill_kappRegistration,email,'.$user->id,
            'Mobile'=> 'required|regex:^[6789]\\d{9}$^|min:10|max:12',
            'CurrrentActiveDevice'=> 'required|min:1|max:10',
            'Business_name'=> 'required|regex:/^[a-zA-Z0-9\s]+$/|max:35',
           
        ]);
        $user->update($request->all());
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
            'total'=> TMBILL_KICHEN_APP::count(),
        );
    }
}
