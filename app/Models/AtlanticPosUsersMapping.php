<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AtlanticPosUsersMapping extends Model
{
    protected $connection   = 'tmpos_mysql';
    protected $table        = 'onlineStoreMapping';
    protected $primaryKey   = 'id';
    public $timestamps      = false;
    protected $fillable     = [
      'tmpos_store_id','tmchannel_store_id','tmpos_id'
    ];

    public function Owner()
    {
         return $this->hasone('App\Models\TMPOS_USER', 'tmpos_id','tmpos_id');
    }
    public function Outlet()
    {
         return $this->hasone('App\Models\Outlet','store_id', 'tmpos_store_id');
    }
    public function ChannelStore()
    {
        return $this->hasone('App\Models\ChannelStores','ref_id', 'tmchannel_store_id')->with('ChannelOwner:owner_name,tracking_id,username');
    }
}
