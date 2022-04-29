<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notifications extends Model
{
    protected $connection   = 'tmpos_mysql';
    protected $table        = 'tmpos_notificatons';
    protected $primaryKey   = 'id';
    protected $fillable = [
        'notification_title',
        'notification_description',
        'notification_type',
        'where_to_show_notification',
        'image_popup_path',
        'popup_click_link',
        'notification_image_path',
        'user_type',
        'is_read_count',
        'is_active',
        'col1',
        'col2',
        'col3',
        'col4'
    ];
}
