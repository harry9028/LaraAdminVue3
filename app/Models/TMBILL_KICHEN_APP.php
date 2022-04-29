<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TMBILL_KICHEN_APP extends Model
{
    protected $table        = 'tmbill_kappRegistration';
    protected $primaryKey   = 'id';
    public $timestamps  = false;
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
}
