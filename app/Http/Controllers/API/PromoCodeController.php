<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\PromoCode;
use App\Models\PromoCodeHistory;
class PromoCodeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search = request()->input('q');
        if ($search) {
                return PromoCode::where(function($query) use ($search){
                    $query->where('id', 'LIKE', "%$search%")
                            ->orwhere('offerPromoName','LIKE',"%$search%")
                            ->orwhere('promoCode','LIKE',"%$search%")
                            ->orwhere('promoCodeType','LIKE',"%$search%")
                            ->orwhere('promoCodeUsedBy','LIKE',"%$search%");
                })->orderby('id', 'desc')->paginate(10);
        }else{

            return PromoCode::orderby('id', 'desc')->paginate(10);
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
        $data = $request->all();
        $data['expirationDate'] = date('Y-m-d', strtotime("+".$data['validity']." day"));

        return PromoCode::create($data);
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
        $user = PromoCode::findOrFail($id);
        $data = $request->all();
        $data['expirationDate'] = date('Y-m-d', strtotime("+".$data['validity']." day"));
        $user->update($data);
        return ['message' => 'Updated the promocode info', 'status'=> true];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return PromoCode::where('Id', $id)->delete();
    }
    public function getHistory()
    {
        $search = request()->input('q');
        if ($search) {
                return PromoCodeHistory::where(function($query) use ($search){
                    $query->where('orderId', 'LIKE', "%$search%")
                            ->orwhere('customerName','LIKE',"%$search%")
                            ->orwhere('customerMobile','LIKE',"%$search%")
                            ->orwhere('promoCode','LIKE',"%$search%")
                            ->orwhere('offerPromoName','LIKE',"%$search%");
                })->orderby('id', 'desc')->paginate(10);
        }else{
            return PromoCodeHistory::latest()->paginate(10);
        }
    }
}
