<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TMBILL_APP extends Model
{
    protected $table        = 'tmbill_appRegistration';
    protected $primaryKey   = 'id';
    public $timestamps = false;
    protected $fillable     = [
      'Name',
      'Mobile',
      'Email',
      'Business_name',
      'Address',
      'CurrrentActiveDevice',
      'ActiveDeviceLimit',
      'OTP'
    ];
    public function info()
    {
        return $this->hasOne('App\Models\TMBILL_Registrations','mobile' ,'Mobile');
    }
}
