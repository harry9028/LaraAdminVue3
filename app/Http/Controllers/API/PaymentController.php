<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\TMBILL_Payments;
class PaymentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search = request()->input('q');
        if ($search) {
                return TMBILL_Payments::where(function($query) use ($search){
                    $query->where('order_id', 'LIKE', "%$search%")
                            ->orwhere('mobile_no','LIKE',"%$search%")
                            ->orwhere('plan_id','LIKE',"%$search%")
                            ->orwhere('transaction_id','LIKE',"%$search%")
                            ->orwhere('payment_date','LIKE',"%$search%");
                })->orderBy('id', 'DESC')->paginate(10);
        }else{
            return TMBILL_Payments::with('plan')->latest()->paginate();
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
