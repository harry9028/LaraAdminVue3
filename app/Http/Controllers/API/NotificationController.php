<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Notifications;
use URL;
use App\Http\Requests\NotificationRequest;
class NotificationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }
    public function index()
    {
        $data['result'] = Notifications::latest()->paginate(10);
        return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NotificationRequest $request)
    {
        if($request->image_popup_path){
            $name = time().'.' . explode('/', explode(':', substr($request->image_popup_path, 0, strpos($request->image_popup_path, ';')))[1])[1];
            \Image::make($request->image_popup_path)->save(public_path('img/notifications/').$name);
            $request->merge(['image_popup_path' => URL::to('/public/img/notifications/'. $name)]);
        }
        // Notification image upload 
        
        if($request->notification_image_path){
            $name = time().'.' . explode('/', explode(':', substr($request->notification_image_path, 0, strpos($request->notification_image_path, ';')))[1])[1];
            \Image::make($request->notification_image_path)->save(public_path('img/notifications/').$name);
            $request->merge(['notification_image_path' => URL::to('/public/img/notifications/'. $name)]);
            
        }

        return Notifications::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $notification = Notifications::find($id);
        return $notification;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(NotificationRequest $request, $id)
    {
        $notification = Notifications::find($id);

        // Notification pop image upload 
        $currentPhoto = $notification->image_popup_path;
       
        if($request->image_popup_path != $currentPhoto){
            $name = time().'.' . explode('/', explode(':', substr($request->image_popup_path, 0, strpos($request->image_popup_path, ';')))[1])[1];
            \Image::make($request->image_popup_path)->save(public_path('img/notifications/').$name);
            $request->merge(['image_popup_path' => URL::to('/public/img/notifications/'. $name)]);

            $userPhoto = public_path('img/notifications/'). $this->getImageName($currentPhoto);
            if(file_exists($userPhoto)){
                @unlink($userPhoto);
            }
        }
        // Notification image upload 
        $currentPhoto = $notification->notification_image_path;
        if($request->notification_image_path != $currentPhoto){
            $name = time().'.' . explode('/', explode(':', substr($request->notification_image_path, 0, strpos($request->notification_image_path, ';')))[1])[1];
            \Image::make($request->notification_image_path)->save(public_path('img/notifications/').$name);
            $request->merge(['notification_image_path' => URL::to('/public/img/notifications/'. $name)]);
            $userPhoto = public_path('img/notifications/').$this->getImageName($currentPhoto);
            if(file_exists($userPhoto)){
                @unlink($userPhoto);
            }
        }
        $notification->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $notification = Notifications::find($id);
        $notification->delete();

    }
    public function getImageName($path)
    {
        $URL = urldecode($path);
        $image_name = (stristr($URL,'?',true))?stristr($URL,'?',true):$URL;
        $pos = strrpos($image_name,'/');
        $image_name = substr($image_name,$pos+1);
        $extension = stristr($image_name,'.');
        if($extension == '.jpg' || $extension == '.png' || $extension == '.gif' || $extension == '.jpeg'){
            return $image_name;
        }
    }
}
