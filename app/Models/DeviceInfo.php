<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeviceInfo extends Model
{
    protected $table        = 'tmbill_appCurrentLogInDevices';
    protected $primaryKey   = 'id';
    public $timestamps = false;
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
