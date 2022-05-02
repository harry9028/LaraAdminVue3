<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return view('welcome');
    return redirect()->route('login');
});
Route::get('/clear-cache', function() { 
    Artisan::call('optimize:clear');
    Artisan::call('route:clear');
    Artisan::call('view:clear');
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('config:cache');
    
    return "Cache is cleared";
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
// Route::get('/home', 'HomeController@index')->name('home')->middleware('verified');
Route::get('/send', 'App\Http\Controllers\HomeController@sendMail')->name('send');
Route::get('/invoice', function(){
    return view('invoice');
});

Route::post('tmpos-users', 'App\Http\Controllers\ImportExportController@tmposUsersExport');
Route::get('tmpos-users', 'App\Http\Controllers\ImportExportController@tmposUsersExport');

Route::post('export', 'App\Http\Controllers\ImportExportController@export');
Route::get('export', 'App\Http\Controllers\ImportExportController@export');

Route::post('enquiry-export', 'App\Http\Controllers\ImportExportController@exportEnquiry');
Route::get('enquiry-export', 'App\Http\Controllers\ImportExportController@exportEnquiry');

Route::post('export-campaign-enquiry', 'App\Http\Controllers\ImportExportController@exportCampaignEnquiry');
Route::get('export-campaign-enquiry', 'App\Http\Controllers\ImportExportController@exportCampaignEnquiry');

Route::post('export-quick-enquiry', 'App\Http\Controllers\ImportExportController@exportQuickEnquiry');
Route::get('export-quick-enquiry', 'App\Http\Controllers\ImportExportController@exportQuickEnquiry');
Route::get('download-file', 'App\Http\Controllers\API\OnlineBackupController@download');

Route::get('{path}', [App\Http\Controllers\HomeController::class, 'index'])->where(
    ['path', '([A-z\d\-\/_.]+)?', 'path']
);
