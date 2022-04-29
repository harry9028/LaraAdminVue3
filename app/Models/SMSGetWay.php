<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SMSGetWay extends Model
{
    //website_sms_gateway
    protected $table        = 'website_sms_gateway';
    protected $primaryKey   = 'id';
    public $timestamps = false;
    protected $fillable     = [
        'user',
        'api_key',
        'sender_id',
        'col1',
        'col2',
        'col3',
        'isActive'
    ];
}
