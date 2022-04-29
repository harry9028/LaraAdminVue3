<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CampaignEnquiry extends Model
{
    protected $table        = 'tmbill_campaign';
    protected $primaryKey   = 'id';
    protected $fillable = [
        'name',
        'restaurant_name',
        'email',
        'mobile',
        'city',
        'created_at'
    ];

}
