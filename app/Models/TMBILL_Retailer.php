<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TMBILL_Retailer extends Model
{
    protected $table        = 'tmbill_retailer_registration';
    protected $primaryKey   = 'id';
    protected $fillable     = [
        'name',
        'email',
        'mobile',
        'address',
        'col1',
        'col2'
    ];
}
