<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TMPOS_ENQUIRY extends Model
{
    protected $connection   = 'tmpos_mysql';
    protected $guarded      = [];
    protected $table        = 'tmpos_enquiry';
    protected $primaryKey   = 'id';
    const CREATED_AT        = 'date_time';
    protected $fillable = [
        'mobile',
        'owner_name',
        'hotel_name',
        'address',
        'city',
        'email',
        'message',
        'enquiry_count',
        'date_time',
        'type'
    ];
}
