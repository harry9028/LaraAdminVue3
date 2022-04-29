<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SMSAuth extends Model
{
    //
    protected $table = 'sms_authentication';
    protected $fillable = [
        'username', 'api_key', 'sender_id', 'author_name', 
        'total_sms', 'total_used_sms', 'total_left_sms','api_flag',
        'user_id','created_by', 'updated_by','remark', 'is_active', 'peid', 'tempid'];
}
