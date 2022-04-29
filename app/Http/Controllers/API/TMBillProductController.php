<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\ActivationStatus;
class TMBillProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search = request()->input('q');
        if ($search) {
            return ActivationStatus::where(function($query) use ($search){
                $query->orwhere('mobile','LIKE',"%$search%")
                ->orwhere('name','LIKE',"%$search%")
                ->orwhere('email','LIKE',"%$search%")
                ->orwhere('product','LIKE',"%$search%");
            })->orderBy('id', 'DESC')->paginate(10);
        }else{
            return ActivationStatus::orderBy('id', 'DESC')->paginate(10);
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
            'name'      => 'required|string|max:191',
            'email'     => 'required|string|email|max:191|unique:ActivationStatus_key_history',
            'mobile'    => 'required|regex:^[6789]\\d{9}$^|min:10|max:10|unique:ActivationStatus_key_history',
            // 'product_key'    => 'required|regex:^[789]\\d{9}$^|min:10|max:20|unique:ActivationStatus_key_history',
        ]);
        return ActivationStatus::create($request->all());
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
        $user = ActivationStatus::findOrFail($id);
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
}
