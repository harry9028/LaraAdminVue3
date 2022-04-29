<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\PointOfContact;
use App\Http\Requests\PointOfContactRequest;
use Illuminate\Database\Eloquent\Builder;
class PointofContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $search         = request()->input('q');
        $data = PointOfContact::with('AtlanticUser')->latest()
        ->where(function($query) use ($search){
                if($search){
                    $query->orwhere('tmpos_id','LIKE',"%$search%")
                        ->orwhere('poc_name','LIKE',"%$search%")
                        ->orwhere('poc_contact_no','LIKE',"%$search%")
                        ->orwhere('reseller_company_name','LIKE',"%$search%")
                        ->orwhere('reseller_company_mail_id','LIKE',"%$search%")
                        ->orwhere('reseller_company_address','LIKE',"%$search%")
                        ->orwhere('sales_person_name','LIKE',"%$search%")
                        ->orwhere('sales_person_address','LIKE',"%$search%")
                        ->orwhere('sales_person_mail_id','LIKE',"%$search%")
                        ->orwhere('lead_generated_by','LIKE',"%$search%")
                        ->orwhere('lead_generatedby_contactno','LIKE',"%$search%")
                        ->orwhere('lead_generatedby_mail','LIKE',"%$search%")
                        ->orwhere('lead_generatedby_address','LIKE',"%$search%");
                }
            })
        ->orwhereHas('AtlanticUser', function (Builder $query) use($search){
            if($search){
                $query->where('name','LIKE',"%$search%");
                $query->orwhere('username','LIKE',"%$search%");
            }
            
        })
        ->paginate(10);
        return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PointOfContactRequest $request)
    {
        $data = $request->all();
        return PointOfContact::create($data);
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
    public function update(PointOfContactRequest $request, $id)
    {
        $poc = PointOfContact::find($id);
        $data = $request->all();
        $poc->update($data);
        return ['message' => 'Info has been changed', 'status'=> true];
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
    public function pocList()
    {
        // DB::raw("CONCAT(users.first_name,' ',users.last_name) as full_name")
        $poc = PointOfContact::selectRaw('poc_name, poc_contact_no,CONCAT(poc_name, poc_contact_no) as full_name')
            ->groupBy('poc_contact_no')
            ->groupBy('poc_name')
            ->get();
        return $poc;
    }
}
