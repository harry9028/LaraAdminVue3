<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TMBILL_Plan extends Model
{
    protected $table        = 'tmbill_plans';
    protected $primaryKey   = 'id';
    protected $fillable = [
      'plan_id',
      'plan_name',
      'validity',
      'amount',
      'col1',
      'col2',
      'col3'
    ];
}
