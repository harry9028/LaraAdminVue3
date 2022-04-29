<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\OnlineBackup;
use Storage;
class OnlineBackupController extends Controller
{
    public function index()
    {
        return OnlineBackup::orderBy('backup_time', 'desc')->paginate(10);
    }
    public function copyServerFile(Request $request)
    {
        $file = $request->input('url');
        // $exists = Storage::disk('public/tmbill_client_backup')->exists('file.jpg');
        $explode = explode('/', $file);
        // if exist then download then not create directory and copy file
        $path = '/public/tmbill_client_backup/'.$explode[1];
        if(Storage::exists($path.'/'.$explode[2])) {
            return array('status'=> true, 'message'=> 'exist sql file', 'explode'=> $explode);
        } else {
            // create new dir
            Storage::makeDirectory($path, 0777);
            // read contents from url
            $url = "http://techmainstay.in/tmbill/TmBillOnlineBackup/". $request->input('url');
            $contents = file_get_contents($url);
            $name = substr($url, strrpos($url, '/') + 1);
            Storage::put($path.'/'.$name, $contents);
            return array('status' => true,'message'=> 'File has been created. Ready to download','explode'=> $explode);
            // return $arrayName = array('status' => 'success','name'=> $name);
        }

    }
    public function download()
    {
        $fileName   = request()->input('folder').'/'.request()->input('name').'.sql';
        $path = '/public/tmbill_client_backup/'.$fileName;
        return Storage::download($path);
    }
}
