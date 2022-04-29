<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TMBILL_PRODUCT extends Model
{
    protected $table        = 'tmbill_product_key_history';
    protected $primaryKey   = 'id';
    public $timestamps = false;
    protected $fillable     = [
       'name',
       'email',
       'mobile',
       'product_key',
       'time',
       'date',
       'payment_mode',
       'product_type',
       'order_id',
       'col2',
       'col3'
    ];
}
