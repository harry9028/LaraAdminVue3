<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TMCHANNEL_LOGIN extends Model
{
    protected $connection = 'tmchannel_mysql';
    protected $guarded = [];
    protected $table = 'ch_login';
    protected $primaryKey = 'id';
    protected $fillable = [
        'tracking_id',
        'name',
        'email',
        'mobile',
        'username',
        'address',
        'owner_name',
        'registration_date',
        'password',
        'api_key',
        'firebase_token',
        'registration_time',
        'is_active',
        'referance_url',
        'is_subadmin',
        'notification_flag',
        'is_tmbill_user',
        'firebase_token_mobile',
        'firebase_token_desktop'
     ];
}
