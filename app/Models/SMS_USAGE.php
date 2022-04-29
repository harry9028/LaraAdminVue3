<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SMS_USAGE extends Model
{
    protected $table        = 'tmbill_sms_usages';
    protected $primaryKey   = 'id';
    public $timestamps = false;
    const CREATED_AT = 'timestamp';
    protected $fillable     = [
        'tracking_id',
        'name',
        'api_key',
        'sender_id',
        'username',
        'sms_count_initial',
        'sms_count_remaining',
        'sms_count_used',
        'timestamp'
    ];
}
