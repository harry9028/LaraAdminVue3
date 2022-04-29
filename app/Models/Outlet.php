<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Outlet extends Model
{
     protected $connection   = 'tmpos_mysql';
     protected $table = 'tmpos_stores';
     protected $primaryKey = 'id';
     protected $fillable = [
         'tmpos_id',
         'store_id',
         'name',
         'active',
         'contact_phone',
         'email',
         'deactivate_message',
         'created_at',
         'activation_expires_at'
     ];
     public function AtlanticUser(){
         return $this->hasOne('App\TMPOS_USER', 'tmpos_id','tmpos_id')
            ->select('tmpos_id', 'name', 'email','mobile','address','owner_name');
      }
    public function LastOrder()
    {
          return $this->hasOne('App\BackOfficeOrder', 'store_id','store_id')
            ->select('app_source', 'orderDateTime', 'store_id')
            ->where('app_source', 'atlantic_pos')
          ->latest();
    }
}
