<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KitchenAppDeviceInfo extends Model
{
    protected $table        = 'tmbill_kappCurrentLogInDevices';
    protected $primaryKey   = 'id';
    protected $fillable     = [
        'Product_key',
        'DeviceIMEI',
        'Usermobile',
        'isActive',
        'LogInTime',
        'LogOutTime',
        'Manufacturer',
        'AndroidVersion',
        'model',
        'location',
        'osName'

    ];
}
