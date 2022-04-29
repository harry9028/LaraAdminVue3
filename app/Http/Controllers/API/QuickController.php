<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\QuickEnquiry;
class QuickController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search = request()->input('q');
        if ($search) {
            return QuickEnquiry::where(function($query) use ($search){
                $query->orwhere('name','LIKE',"%$search%")
                    ->orwhere('mobile','LIKE',"%$search%")
                    ->orwhere('email','LIKE',"%$search%");
            })->orderBy('id', 'DESC')->paginate(10);
        }else{
            return QuickEnquiry::orderBy('id', 'DESC')->paginate(10);
        }
    }
    public function update(Request $request, $id)
    {
        $enq = QuickEnquiry::findOrFail($id);
        $enq->update($request->all());
        return ['message' => 'Updated the Quick Enquiry info', 'status'=> true];
    }
}
