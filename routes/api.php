<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::put('profile', [App\Http\Controllers\API\UserController::class, 'updateProfile']);

// dashboard
Route::get('dashboard-pos-registration', [App\Http\Controllers\API\TMBILLUsersController::class, 'dashboard']);
Route::get('dashboard-pos-activation', [App\Http\Controllers\API\ActivationStatusController::class, 'dashboard']);
Route::get('dashboard-feedback', [App\Http\Controllers\API\TMBillFeedbackController::class, 'dashboard']);
Route::get('dashboard-tm-channel', [App\Http\Controllers\API\TMChannelController::class, 'dashboard']);
Route::get('dashboard-tmpos', [App\Http\Controllers\API\TMPOSController::class, 'dashboard']);
Route::get('outlets', [App\Http\Controllers\API\TMPOSController::class, 'getOutlets']);
Route::get('dashboard-tmpos-enquiry', [App\Http\Controllers\API\TMPOSEnquiryController::class, 'dashboard']);
Route::get('dashboard-kitchen-app-enquiry', [App\Http\Controllers\API\KitchenAppDeviceInfoController::class, 'dashboard']);
Route::get('dashboard-kitchen-app-activation', [App\Http\Controllers\API\KitchenAppActivationController::class, 'dashboard']);
Route::get('dashboard-tmbill-kitchen-app', [App\Http\Controllers\API\TMBillkitchenAppController::class, 'dashboard']);
Route::get('dashboard-tmbill-app-users', [App\Http\Controllers\API\TMBillAppUsersController::class, 'dashboard']);
Route::get('dashboard-app-activation', [App\Http\Controllers\API\AppActivationController::class, 'dashboard']);
Route::get('dashboard-captain-app-history', [App\Http\Controllers\API\DeviceInfoController::class, 'dashboard']);
Route::get('dashboard-enquiry', [App\Http\Controllers\API\CampaignController::class, 'dashboard']);

Route::apiResources(['user' => 'App\Http\Controllers\API\UserController']);
Route::get('profile', 'App\Http\Controllers\API\UserController@profile');
Route::get('findUser', 'App\Http\Controllers\API\UserController@search');

//07-12-2019
Route::apiResources(['bill-desk' => 'App\Http\Controllers\API\BillDeskController']);
//08-12-2019
Route::get('tmchannel-users' , 'App\Http\Controllers\API\TMChannelController@index');
Route::post('tmchannel-users' , 'App\Http\Controllers\API\TMChannelController@store');
Route::post('tmchannel-users/{id}' , 'App\Http\Controllers\API\TMChannelController@update');
Route::get('channel-stores/{id}', 'App\Http\Controllers\API\TMChannelController@getStores');

Route::get('tmpos-users' , 'App\Http\Controllers\API\TMPOSController@index');
Route::post('tmpos-users' , 'App\Http\Controllers\API\TMPOSController@store');
Route::post('tmpos-users/{id}' , 'App\Http\Controllers\API\TMPOSController@update');
// 19-6-2021
Route::get('sms-template/{id}','App\Http\Controllers\API\TMPOSController@getTemplates');
Route::post('sms-template','App\Http\Controllers\API\TMPOSController@addTemplate');
Route::post('sms-template/{id}','App\Http\Controllers\API\TMPOSController@updateTemplate');


Route::get('resend-mail/{id}', 'App\Http\Controllers\API\TMPOSController@resendMail');
Route::get('tmpos-outlets/{id}', 'App\Http\Controllers\API\TMPOSController@getOutlets');
Route::get('outlet-list', 'App\Http\Controllers\API\TMPOSController@getOutletsList');
Route::post('outlet/{id}', 'App\Http\Controllers\API\TMPOSController@updateOutlet');
Route::apiResources(['tmpos-enquiry' => 'App\Http\Controllers\API\TMPOSEnquiryController']);
Route::get('feedback' , 'App\Http\Controllers\API\TMBillFeedbackController@index');

Route::get('videos', 'App\Http\Controllers\API\VideoLinkController@index');
Route::post('videos/{id}', 'App\Http\Controllers\API\VideoLinkController@update');
Route::post('videos', 'App\Http\Controllers\API\VideoLinkController@store');




Route::get('software', 'App\Http\Controllers\API\SoftwareDownloadController@index');
Route::post('software/{id}', 'App\Http\Controllers\API\SoftwareDownloadController@update');
Route::post('software', 'App\Http\Controllers\API\SoftwareDownloadController@store');





Route::get('sms-usage', 'App\Http\Controllers\API\SMSUsageController@index');
Route::post('sms-usage/{id}', 'App\Http\Controllers\API\SMSUsageController@update');
Route::post('sms-usage', 'App\Http\Controllers\API\SMSUsageController@store');

Route::apiResources(['payment' => 'App\Http\Controllers\API\PaymentController']);
Route::apiResources(['plan' => 'App\Http\Controllers\API\PlanController']);


Route::get('tmbill-users', [App\Http\Controllers\API\TMBILLUsersController::class, 'index']);
Route::post('tmbill-users/{id}', [App\Http\Controllers\API\TMBILLUsersController::class, 'update']);
Route::post('tmbill-users', [App\Http\Controllers\API\TMBILLUsersController::class, 'store']);





Route::apiResources(['tmbill-retailer' => 'App\Http\Controllers\API\TMBILLRetailerController']);
Route::get('tmbill-app-users', [App\Http\Controllers\API\TMBillAppUsersController::class, 'index']);
Route::post('tmbill-app-users/{id}', [App\Http\Controllers\API\TMBillAppUsersController::class, 'update']);
Route::post('tmbill-app-users', [App\Http\Controllers\API\TMBillAppUsersController::class, 'store']);




Route::get('tmbill-kitchen-app', 'App\Http\Controllers\API\TMBillkitchenAppController@index');
Route::post('tmbill-kitchen-app/{id}', 'App\Http\Controllers\API\TMBillkitchenAppController@update');
Route::post('tmbill-kitchen-app', 'App\Http\Controllers\API\TMBillkitchenAppController@store');


Route::get('promocode', 'App\Http\Controllers\API\PromoCodeController@index');
Route::post('promocode/{id}', 'App\Http\Controllers\API\PromoCodeController@update');
Route::post('promocode', 'App\Http\Controllers\API\PromoCodeController@store');


Route::get('app-activation', 'App\Http\Controllers\API\AppActivationController@index');
Route::post('app-activation', 'App\Http\Controllers\API\AppActivationController@store');
Route::post('app-activation/{id}', 'App\Http\Controllers\API\AppActivationController@update');


Route::get('kitchen-app-activation', 'App\Http\Controllers\API\KitchenAppActivationController@index');
Route::post('kitchen-app-activation/{id}', 'App\Http\Controllers\API\KitchenAppActivationController@update');



Route::apiResources(['track-user' => 'App\Http\Controllers\API\TrackUserController']);


Route::get('tmbill-product' , 'App\Http\Controllers\API\ActivationStatusController@index');
Route::post('tmbill-product' , 'App\Http\Controllers\API\ActivationStatusController@store');
Route::post('tmbill-product/{id}' , 'App\Http\Controllers\API\ActivationStatusController@update');





Route::apiResources(['pos-user-history' => 'App\Http\Controllers\API\TMBillProductController']);

Route::get('promocode-history' , 'App\Http\Controllers\API\PromoCodeController@getHistory');
Route::apiResources(['device-info' => 'App\Http\Controllers\API\DeviceInfoController']);
Route::apiResources(['kitchen-app-device-info' => 'App\Http\Controllers\API\KitchenAppDeviceInfoController']);
//09-12-2019
Route::get('find', 'App\Http\Controllers\API\SearchController@search');
Route::apiResources(['sms-getway' => 'App\Http\Controllers\API\SMSGetWayController']);
Route::get('country-list', 'App\Http\Controllers\API\CountryController@index');

Route::get('campaign-enquiry' , 'App\Http\Controllers\API\CampaignController@index');
Route::get('quick-enquiry' , 'App\Http\Controllers\API\QuickController@index');
Route::post('quick-enquiry/{id}' , 'App\Http\Controllers\API\QuickController@update');

// 19-12-2019
Route::post('sms-send', [App\Http\Controllers\API\SMSGetWayController::class, 'send']);
//21-12-2019
Route::get('online-backup', 'App\Http\Controllers\API\OnlineBackupController@index');
Route::post('online-backup-copy-file', 'App\Http\Controllers\API\OnlineBackupController@copyServerFile');

// 06-08-2020

Route::get('tmpos-payment-settings' , 'App\Http\Controllers\API\AtlanticUserPaymentSettings@index');
Route::post('tmpos-payment-settings' , 'App\Http\Controllers\API\AtlanticUserPaymentSettings@store');
Route::post('tmpos-payment-settings/{id}' , 'App\Http\Controllers\API\AtlanticUserPaymentSettings@update');


Route::get('live-support', 'App\Http\Controllers\API\LiveSupportController@index');
Route::post('live-support/{id}', 'App\Http\Controllers\API\LiveSupportController@update');





//09-10-2020
Route::apiResources(['tmpos-users-mapping' => 'App\Http\Controllers\API\AtlanticPosTMChannelUsersMappingController']);

Route::get('point-of-contact' , 'App\Http\Controllers\API\PointofContactController@index');
Route::post('point-of-contact/{id}' , 'App\Http\Controllers\API\PointofContactController@update');


Route::get('point-of-contact-users', 'App\Http\Controllers\API\PointofContactController@pocList');
// Channel order testing 08-01-2020
Route::get('tmchannel-orders' , 'App\Http\Controllers\API\TMChannelController@getChannelOrders');
// Notifications
// 16-02-2021
Route::get('tmpos-notifications' , 'App\Http\Controllers\API\NotificationController@index');
Route::post('tmpos-notifications' , 'App\Http\Controllers\API\NotificationController@store');
Route::post('tmpos-notifications/{id}' , 'App\Http\Controllers\API\NotificationController@update');