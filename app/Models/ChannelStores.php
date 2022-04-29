<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChannelStores extends Model
{
    protected $connection = 'tmchannel_mysql';
     protected $table = 'ch_stores';
     protected $primaryKey = 'id';
     protected $fillable = [
         'ref_id',
         'name',
     ];
    public function ChannelOwner()
    {
        return $this->hasone('App\TMCHANNEL_LOGIN','tracking_id', 'tracking_id');
    }    
}
