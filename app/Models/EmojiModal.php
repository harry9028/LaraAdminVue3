<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmojiModal extends Model
{
    protected $connection   = 'mysql_feedback';
    protected $table        = 'Emojji';
    protected $primaryKey   = 'id';
    public $timestamps = false;
    protected $fillable     = [
      'EmojiId',
      'Name',
      'EmojiUrl',
      'Description',
  	];
}
