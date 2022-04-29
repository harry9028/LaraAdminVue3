<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LiveSupportEnquiry extends Model
{
    protected $connection   = 'tmpos_mysql';
    protected $table        = 'live_support_enquiry';
    protected $primaryKey   = 'id';
    public $timestamps = false;
    protected $fillable = [
        'store_id',
        'mobile',
        'email',
        'need_support_on',
        'time_date',
        'user_id',
        'submitted_through',
        'status_of_query',
        'solved_by_team_name',
        'remark_by_team_member',
        'assigned_to'
    ];
}
