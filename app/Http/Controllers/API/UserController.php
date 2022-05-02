<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $search = \Request::get('q');
        $all = request()->input('all');
        if($all){
            return User::latest()->select('id', 'name','email', 'contact_no')->get();
        }else if($search){
            $users = User::where(function($query) use ($search){
                        $query->where('name','LIKE',"%$search%")
                                ->orWhere('contact_no','LIKE',"%$search%")
                                ->orWhere('email','LIKE',"%$search%");
                    })->paginate(10);
            return $users;
        }else{
            return User::latest()->paginate(10);
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



        $this->validate($request,[
            'name'=> 'required|string|max:191',
            'email'=> 'required|string|email|max:191|unique:users',
            'password'=> 'required|string|min:8|max:191',
        ]);

        if(!empty($request->password)){
            $request->merge(['password' => Hash::make($request['password'])]);
        }
        $request->merge(['access_level' => json_encode($request['access_level'])]);
        return User::create($request->all());

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
        $user = User::find($id);
        $this->validate($request,[
            'name' => 'required|string|max:191',
            'email' => 'required|string|email|max:191|unique:users,email,'.$user->id,
            'password' => 'sometimes|min:8'
        ]);
        if(!empty($request->password)){
            $request->merge(['password' => Hash::make($request['password'])]);
        }
        $request->merge(['access_level' => json_encode($request['access_level'])]);
        $user->update($request->all());
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
        $this->authorize('isAdmin');
        $user = User::findOrFail($id);
        // delete the user
        $user->delete();

    }
    public function search(){

        if ($search = \Request::get('q')) {
            $users = User::where(function($query) use ($search){
                $query->where('name','LIKE',"%$search%")
                        ->orWhere('contact_no','LIKE',"%$search%")
                        ->orWhere('email','LIKE',"%$search%");
            })->paginate(2);
        }else{
            $users = User::latest()->paginate(5);
        }

        return $users;

    }
    public function profile()
    {
        return auth('api')->user();
    }
    public function updateProfile(Request $request)
    {
        $user = auth('sanctum')->user();
        $this->validate($request,[
            'name' => 'required|string|max:191',
            'email' => 'required|string|email|max:191|unique:users,email,'.$user->id,
            'password' => 'sometimes|required|min:6'
        ]);
        $currentPhoto = $user->photo;
        if($request->photo != $currentPhoto){
            $name = time().'.' . explode('/', explode(':', substr($request->photo, 0, strpos($request->photo, ';')))[1])[1];
            \Image::make($request->photo)->save(public_path('img/profile/').$name);
            $request->merge(['photo' => $name]);
            $userPhoto = public_path('img/profile/').$currentPhoto;
            if(file_exists($userPhoto)){
                @unlink($userPhoto);
            }
        }
        if(!empty($request->password)){
            $request->merge(['password' => Hash::make($request['password'])]);
        }
        $user->update($request->all());
        return ['message' => "Success"];
    }
}
