<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TMBILL_Feedback extends Model
{
    protected $table        = 'tmbill_feedback';
    protected $primaryKey   = 'id';
    const CREATED_AT        = 'date';
    protected $fillable = [
        'category',
        'name',
        'mobile',
        'email',
        'msg',
        'type_software',
        'date',
        'col3'
    ];
}
