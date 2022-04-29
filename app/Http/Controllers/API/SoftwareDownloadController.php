<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Software;
class SoftwareDownloadController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
         $search = request()->input('q');
        if ($search) {
             return Software::where(function($query) use ($search){
                    $query->where('link', 'LIKE', "%$search%")
                            ->orwhere('version','LIKE',"%$search%");
                })->orderby('id', 'desc')->paginate(10);
        }else{
            return Software::orderBy('id', 'DESC')->paginate(10);
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
        $search = request()->input('q');
        Software::create($request->all());
        return array('status' => true, 'message'=> 'success');
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
        $link = Software::find($id);
        $link->update($request->all());
        return array('status' => true);
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
