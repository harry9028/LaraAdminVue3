<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\TMBILL_Registrations;
use App\Exports\UsersExport;
use Maatwebsite\Excel\Facades\Excel;
class TMBILLUsersController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search = request()->input('q');
       
         

        if ($search) {
                return TMBILL_Registrations::where(function($query) use ($search){
                   
                    $query->where('id', 'LIKE', "%$search%")
                            ->orwhere('email','LIKE',"%$search%")
                            ->orwhere('name','LIKE',"%$search%")
                            ->orwhere('blockingId','LIKE',"%$search%")
                            ->orwhere('RecoveryId','LIKE',"%$search%")
                            ->orwhere('mobile','LIKE',"%$search%");
                    
                })->with("history")
                ->with('SmsInfo')
                ->with('PosActivationData')
                ->orderBy('id', 'DESC')->paginate(10);
        }else{
           
            return TMBILL_Registrations::with("history")
                ->with('SmsInfo')
                ->with('PosActivationData')
                ->orderBy('id', 'DESC')->paginate(10);
           
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
        
        $user = TMBILL_Registrations::findOrFail($id);
        $this->validate($request,[
            'name'=> 'required|regex:/^[a-zA-Z0-9\s]+$/|max:35',
            'mobile'=> 'required|regex:^[6789]\\d{9}$^|min:10|max:10',
            'password' => 'sometimes|required|min:4',
            'address'  => 'required|max:360',
            'ResonForBlocking'  => 'nullable|max:360',
        ]);

        
        // echo '<pre>';
        // print_r($request->all());
        // echo '</pre>';
        // die();
        $data = $request->all();
        $data['isEdgeAppBlocked'] = $request['isEdgeAppBlocked'] ? 0 : 1; 
        $user->update($data);
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
        
        return array('status'=> true,'total'=> TMBILL_Registrations::count());
    }
}
