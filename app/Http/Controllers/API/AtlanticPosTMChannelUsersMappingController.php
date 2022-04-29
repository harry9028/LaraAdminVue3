<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\AtlanticPosUsersMapping;
use App\Http\Requests\AtalanitcPosMappingRequest;
use Illuminate\Database\Eloquent\Builder;

class AtlanticPosTMChannelUsersMappingController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search = request()->input('q');
        if ($search) {
                return AtlanticPosUsersMapping::whereHas('Owner', function (Builder $query) use($search){
                            // $query->where('owner_name', 'LIKE', "%$search%");
                        })
                        ->with('Owner:tmpos_id,owner_name')
                        ->with('Outlet:store_id,name')
                        ->where(function($query) use ($search){
                            $query->where('tmpos_store_id', 'LIKE', "%$search%")
                            ->orwhere('tmchannel_store_id','LIKE',"%$search%")
                            ->orwhere('tmpos_id','LIKE',"%$search%");
                })->orderBy('id', 'DESC')->paginate(10);
        }else{
            return AtlanticPosUsersMapping::with('Owner:tmpos_id,owner_name')
                ->with('Outlet:store_id,name')
                ->with('ChannelStore:tracking_id,ref_id,name')
                ->orderBy('id', 'DESC')
                ->paginate(10);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AtalanitcPosMappingRequest $request)
    {

        $data = request()->all();
        return AtlanticPosUsersMapping::create($data);
        
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
