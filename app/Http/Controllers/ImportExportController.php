<?php

namespace App\Http\Controllers;
use Maatwebsite\Excel\Facades\Excel;

use Illuminate\Http\Request;
use App\Exports\TMBillRegistrationsExport;
use App\Exports\TMPOSEnquiry;
use App\Exports\CampaignEnquiryExport;
use App\Exports\QuickEnquiryExport;
use App\Exports\TMPOSUsersExport;

use App\Models\TMBILL_Registrations;
use App\Models\TMPOS_ENQUIRY;
use App\Models\CampaignEnquiry;
use App\Models\QuickEnquiry;

class ImportExportController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function export(Request $request)
    {
        $this->validate($request,[
            'exportType' => 'required',
            'dateRange' => 'required',
        ]);

        $startDate  = $request->input('dateRange')['start'] ;
        $endDate    = $request->input('dateRange')['end'] ;
        $isActive = 1;
        
        if ($request->input('exportType')=='xlsx') {
            return Excel::download(new TMBillRegistrationsExport($isActive, $startDate, $endDate), 'users.xlsx');
        }elseif ($request->input('exportType')=='xls') {           
            return Excel::download(new TMBillRegistrationsExport($isActive, $startDate, $endDate), 'users.xls');
        }elseif ($request->input('exportType')=='csv') {
            return Excel::download(new TMBillRegistrationsExport($isActive, $startDate, $endDate), 'users.csv');
        }elseif ($request->input('exportType')=='pdf') {
            $data = TMBILL_Registrations::all()->take(10);
            $pdf = \PDF::loadView('pdf.test',compact('data'));
            return $pdf->download('users.pdf');
        }elseif ($request->input('exportType')=='ods') {
            return Excel::download(new TMBillRegistrationsExport($isActive, $startDate, $endDate), 'users.ods');
        }elseif ($request->input('exportType')=='tsv') {
            return Excel::download(new TMBillRegistrationsExport($isActive, $startDate, $endDate), 'users.tsv');
        }elseif ($request->input('exportType')=='html') {
            return Excel::download(new TMBillRegistrationsExport($isActive, $startDate, $endDate), 'users.html');
        }  
    }
    public function exportEnquiry(Request $request)
    {
        $this->validate($request,[
            'exportType' => 'required',
            'dateRange' => 'required',
        ]);

        $startDate  = $request->input('dateRange')['start'] ;
        $endDate    = $request->input('dateRange')['end'] ;
       
        if ($request->input('exportType')=='xlsx') {
            return Excel::download(new TMPOSEnquiry($startDate, $endDate), 'users.xlsx');
        }elseif ($request->input('exportType')=='xls') {           
            return Excel::download(new TMPOSEnquiry($startDate, $endDate), 'users.xls');
        }elseif ($request->input('exportType')=='csv') {
            return Excel::download(new TMPOSEnquiry($startDate, $endDate), 'users.csv');
        }elseif ($request->input('exportType')=='pdf') {
            $data = TMPOS_ENQUIRY::all();
            $pdf = \PDF::loadView('pdf.test',compact('data'));
            return $pdf->download('users.pdf');
        }elseif ($request->input('exportType')=='ods') {
            return Excel::download(new TMPOSEnquiry($startDate, $endDate), 'users.ods');
        }elseif ($request->input('exportType')=='tsv') {
            return Excel::download(new TMPOSEnquiry($startDate, $endDate), 'users.tsv');
        }elseif ($request->input('exportType')=='html') {
            return Excel::download(new TMPOSEnquiry($startDate, $endDate), 'users.html');
        }  
    }
    public function exportCampaignEnquiry(Request $request)
    {
        $this->validate($request,[
            'exportType' => 'required',
            'dateRange' => 'required',
        ]);

        $startDate  = $request->input('dateRange')['start'] ;
        $endDate    = $request->input('dateRange')['end'] ;
       
        
        if ($request->input('exportType')=='xlsx') {
            return Excel::download(new CampaignEnquiryExport($startDate, $endDate), 'users.xlsx');
        }elseif ($request->input('exportType')=='xls') {           
            return Excel::download(new CampaignEnquiryExport($startDate, $endDate), 'users.xls');
        }elseif ($request->input('exportType')=='csv') {
            return Excel::download(new CampaignEnquiryExport($startDate, $endDate), 'users.csv');
        }elseif ($request->input('exportType')=='pdf') {
            $data = CampaignEnquiry::all();
            $pdf = \PDF::loadView('pdf.test',compact('data'));
            return $pdf->download('users.pdf');
        }elseif ($request->input('exportType')=='ods') {
            return Excel::download(new CampaignEnquiryExport($startDate, $endDate), 'users.ods');
        }elseif ($request->input('exportType')=='tsv') {
            return Excel::download(new CampaignEnquiryExport($startDate, $endDate), 'users.tsv');
        }elseif ($request->input('exportType')=='html') {
            return Excel::download(new CampaignEnquiryExport($startDate, $endDate), 'users.html');
        }  
    }
    public function exportQuickEnquiry(Request $request)
    {
        $this->validate($request,[
            'exportType' => 'required',
            'dateRange' => 'required',
        ]);

        $startDate  = $request->input('dateRange')['start'] ;
        $endDate    = $request->input('dateRange')['end'] ;
       
        
        if ($request->input('exportType')=='xlsx') {
            return Excel::download(new QuickEnquiryExport($startDate, $endDate), 'users.xlsx');
        }elseif ($request->input('exportType')=='xls') {           
            return Excel::download(new QuickEnquiryExport($startDate, $endDate), 'users.xls');
        }elseif ($request->input('exportType')=='csv') {
            return Excel::download(new QuickEnquiryExport($startDate, $endDate), 'users.csv');
        }elseif ($request->input('exportType')=='pdf') {
            $data = QuickEnquiry::all();
            $pdf = \PDF::loadView('pdf.test',compact('data'));
            return $pdf->download('users.pdf');
        }elseif ($request->input('exportType')=='ods') {
            return Excel::download(new QuickEnquiryExport($startDate, $endDate), 'users.ods');
        }elseif ($request->input('exportType')=='tsv') {
            return Excel::download(new QuickEnquiryExport($startDate, $endDate), 'users.tsv');
        }elseif ($request->input('exportType')=='html') {
            return Excel::download(new QuickEnquiryExport($startDate, $endDate), 'users.html');
        }  
    }
    public function tmposUsersExport(Request $request)
    {
        return Excel::download(new TMPOSUsersExport(), 'TMPOS Users.xlsx');
    }
}
