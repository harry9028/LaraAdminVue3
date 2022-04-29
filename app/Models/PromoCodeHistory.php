<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PromoCodeHistory extends Model
{
    protected $table        = 'tmbill_promoCodeHistory';
    protected $primaryKey   = 'id';
    const CREATED_AT = 'time';
    protected $fillable     = [
        'orderId',
        'customerName',
        'customerMobile',
        'address',
        'offerPromoName',
        'promoCode',
        'promoCodeType',
        'date',
        'time',
        'discountType',
        'discountedAmount',
        'totalAmount',
        'validity',
        'status'
    ];
}
