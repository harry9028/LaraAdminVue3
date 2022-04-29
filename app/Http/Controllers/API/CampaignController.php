<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\CampaignEnquiry;
use App\Models\QuickEnquiry;
class CampaignController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search = request()->input('q');
        if ($search) {
            return CampaignEnquiry::where(function($query) use ($search){
                $query->orwhere('name','LIKE',"%$search%")
                    ->orwhere('mobile','LIKE',"%$search%")
                    ->orwhere('restaurant_name','LIKE',"%$search%")
                    ->orwhere('email','LIKE',"%$search%");
            })->orderBy('id', 'DESC')->paginate(10);
        }else{
            return CampaignEnquiry::orderBy('id', 'DESC')->paginate(10);
        }
    }
    public function dashboard()
    {
        $arrayName = array(
            'campaign_enquiry_total' => CampaignEnquiry::count(),
            'quick_enquiry_total' => QuickEnquiry::count(),
        );
        return $arrayName;
    }
}
