<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VideoLink extends Model
{
    protected $table        = 'watch_videos';
    protected $primaryKey   = 'id';
    public $timestamps = false;
    // const CREATED_AT        = 'date';
    protected $fillable = [
       'title','link'
    ];
    
}
