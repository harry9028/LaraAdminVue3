<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TMPOS_USER extends Model
{
    protected $connection   = 'tmpos_mysql';
    protected $guarded      = [];
    protected $table        = 'tmpos_owner';
    protected $primaryKey   = 'id';
    const CREATED_AT        = 'registration_time';
    public $timestamps = false;
    protected $fillable = [
        'tmpos_id',
        'name',
        'email',
        'mobile',
        'username',
        'address',
        'owner_name',
        'password',
        'firebase_token',
        'send_notification',
        'registration_time',
        'registration_date',
        'is_active',
        'store_creation_limit',
        'msg',
        'country',
        'country_id',
        'currency',
        'sms_api_flag',
        'sms_total',
        'sms_sender_id',
        'sms_api_key',
        'sms_api_user',
        'sms_api_password',
        'sms_left',
        'sms_sent',
        'profile_photo',
        'type',
        'email_verified_at',
        'dunzo_client_id',
        'dunzo_client_secret',
        'access_level',
        'peid',
        'template_id',
        'show_poweredby',
        'login_deactive_message',
        'is_enable_two_factor_auth',
        'nextel_api_key',
        'live_tracking_enabled',
        'upsale_integration'
    ];
    protected $hidden = [
        'password'
    ];
    public function getAccessLevelAttribute($value)
    {
        if(!is_null($value)){
            return json_decode($value);
        }
    }
    public function getUpsaleIntegrationAttribute($value)
    {
        return $value ? true : false;
    }
    public function setAccessLevelAttribute($value)
    {
        if(is_array($value)){
            $this->attributes['access_level'] = json_encode($value);
        }
    }
    public function POC(){
        return $this->hasOne('App\Models\PointOfContact', 'tmpos_id','tmpos_id');
    }
    public function getLiveTrackingEnabledAttribute($value)
    {
        if($value){
            return true;
        }else{
            return false;
        }
    }
}
