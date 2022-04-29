<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\AppActivation;
class AppActivationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search = request()->input('q');
        if ($search) {
                return AppActivation::where(function($query) use ($search){
                    $query->where('Product_key', 'LIKE', "%$search%")
                            ->orwhere('id','LIKE',"%$search%")
                            ->orwhere('mobile','LIKE',"%$search%");
                })->orderBy('id', 'DESC')->paginate(10);
        }else{
            return AppActivation::orderBy('id', 'DESC')->paginate(10);
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
        $app = AppActivation::findOrFail($id);
        $app->update($request->all());
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
    }
    public function dashboard()
    {
        return array(
            'status'=> true, 
            'total_activation'=> AppActivation::where('activation_status',1)->where('Activate_trial_flag',1)->count(),
            'total_trial'=> AppActivation::where('activation_status',1)->where('Activate_trial_flag',0)->count(),
        );
    }
    
}
