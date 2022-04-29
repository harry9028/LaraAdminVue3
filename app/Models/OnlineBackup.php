<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OnlineBackup extends Model
{
    protected $table        = 'tmbill_online_backup';
    protected $primaryKey   = 'backup_id';
    protected $fillable     = [
       'tmbill_tracking_id',
       'owner_mobile',
       'backup_date',
       'backup_time',
       'backup_link',
       'email'
    ];
}
