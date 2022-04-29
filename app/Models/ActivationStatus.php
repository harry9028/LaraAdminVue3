<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActivationStatus extends Model
{
    protected $table        = 'tmbill_activation_status';
    protected $primaryKey   = 'id';
    public $timestamps = false;
    protected $fillable     = [
        'product',
        'name',
        'mobile',
        'email',
        'start_date',
        'end_date',
        'duration',
        'activation_status',
        'mac_address',
        'type_software'
    ];
}
