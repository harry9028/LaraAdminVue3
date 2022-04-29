<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TMBILL_Registrations extends Model
{
    protected $table        = 'tmbill_registration';
    protected $primaryKey   = 'id';
    public $timestamps = false;
    protected $fillable     = [
       'name',
       'email',
       'mobile',
       'address',
       'blockingId',
       'RecoveryId',
       'blockingFlag',
       'ResonForBlocking',
       'UnblockTime',
       'StartDate',
       'EndDate',
       'DemoTime',
       'DemoFreeDays',
       'registration_flag',
       'token',
       'isEdgeAppBlocked',
       'password'
    ];
    public function history()
    {
        return $this->hasMany('App\Models\TrackUser', 'mobile', 'mobile');
    }
    public function SmsInfo()
    {
        return $this->hasOne('App\Models\SMS_USAGE', 'tracking_id','blockingId');
    }
    public function PosActivationData()
    {
        return $this->hasOne('App\Models\ActivationStatus', 'mobile','mobile');
    }
}
