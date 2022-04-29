<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TMBILL_Payments extends Model
{
    protected $table        = 'tmbill_payments';
    protected $primaryKey   = 'id';
    const CREATED_AT        = 'payment_date';
    protected $fillable = [
       'order_id','mobile_no','plan_id','amount','payment_mode','payment_status','transaction_id','payment_date'
    ];
    public function plan()
    {
        return $this->hasOne('App\Models\TMBILL_Plan', 'plan_id', 'plan_id');
    }
}
