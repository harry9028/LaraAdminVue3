<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TMChannelOrders extends Model
{
    protected $connection   = 'tmchannel_mysql';
    protected $table        = 'ch_order';
    protected $primaryKey   = 'id';

    public function getJsonDataAttribute($value)
    {
        return json_decode($value);
    }
    public function getDeliveryStatusUpdateslogAttribute($value)
    {
       
        return json_decode($value);
        
    }
}
