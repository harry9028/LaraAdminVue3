<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $connection   = 'tmpos_mysql';
    protected $table        = 'tmpos_countrys';
    protected $primaryKey   = 'id';
    public $timestamps = false;
    protected $fillable     = [
        'name',
        'code',
        'dial_code',
        'currency_name',
        'currency_symbol',
        'currency_code'
    ];
}
