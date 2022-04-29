<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PromoCode extends Model
{
    protected $table        = 'tmbill_promoCodes';
    protected $primaryKey   = 'Id';
    public $timestamps = false;
    protected $fillable     = [
      'offerPromoName',
      'promoCode',
      'promoCodeType',
      'validity',
      'extendDays',
      'startDate',
      'expirationDate',
      'validForNumberOfUsers',
      'promoCodeUsedBy',
      'validPerUser',
      'time',
      'discountType',
      'discount'
    ];
}
