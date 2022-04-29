<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BillDesk extends Model
{
    protected $guarded = [];
    protected $table = 'desk_bill';
    const CREATED_AT = 'bill_date';
    protected $fillable = [
       'tracking_id',
       'bill_no',
       'total_person',
       'bill_date',
       'bill_date1',
       'bill_time',
       'total_amount',
       'table_no',
       'discount_amt',
       'igst',
       'cgst',
       'sgst',
       'tax_rate',
       'order_type',
       'tax_amount',
       'discount_id',
       'customer_id',
       'delivery_boy_id',
       'payment_id',
       'employee_id',
       'bill_status',
       'taken_by',
       'paid_by',
       'comment',
       'dummy_no',
       'online_order_id',
       'sync_time'
    ];
}
