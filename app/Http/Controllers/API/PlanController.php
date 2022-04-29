<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\TMBILL_Plan;
class PlanController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search = request()->input('q');
        if ($search) {
                return TMBILL_Plan::where(function($query) use ($search){
                    $query->where('plan_id', 'LIKE', "%$search%")
                            ->orwhere('plan_name','LIKE',"%$search%")
                            ->orwhere('id','LIKE',"%$search%")
                            ->orwhere('validity','LIKE',"%$search%");
                })->orderby('id', 'desc')->paginate(10);
        }else{
            return TMBILL_Plan::orderby('id', 'desc')->paginate(10);
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
}
