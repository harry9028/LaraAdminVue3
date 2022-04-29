<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TMPOSPaymnetSettings extends Model
{
    protected $connection   = 'tmpos_mysql';
    protected $table        = 'tmpos_owner_paygateway_details';
    protected $primaryKey   = 'id';
    const CREATED_AT        = 'registration_time';
    public $timestamps = false;
    protected $fillable = [
        'tmpos_id','pay_gateway_name','pay_gateway_flag','key_id','key_secret'
    ];
}
