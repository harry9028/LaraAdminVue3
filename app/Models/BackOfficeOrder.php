<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BackOfficeOrder extends Model
{
    protected $connection   = 'tmpos_mysql';
    protected $table = 'tmpos_order';
    protected $primaryKey = 'id';
    
    
    const CREATED_AT = 'orderDateTime';
    const UPDATED_AT = null;
    protected $fillable = [
         'order_id',
         'store_id',
         'created_time',
         'orderDateTime',
         'sync_time',
         'app_source'
    ];
}
