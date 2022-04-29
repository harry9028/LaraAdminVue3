<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeedbackPointsModel extends Model
{
	  protected $connection   = 'mysql_feedback';
    protected $table        = 'FeedbackPoints';
    protected $primaryKey   = 'id';
    public $timestamps = false;
    protected $fillable     = [
      'FeedbackQuestionId',
      'PointName',
      'UpdateTimestamp',
      'InsertTimestamp',
      'EmojiId',
      'col2',
      'col3',
      'col4'
    ];
}
