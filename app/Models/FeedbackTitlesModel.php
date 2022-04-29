<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeedbackTitlesModel extends Model
{
    protected $connection   = 'mysql_feedback';
    protected $table        = 'FeedbackTitles';
    protected $primaryKey   = 'id';
    public $timestamps = false;
    protected $fillable     = [
      'FeedbackId',
      'FeedbackTitleName',
      'CreatedDate',
      'OwnerMobile',
      'UpdateTimestamp',
      'InsertTimestamp',
      'FeedbackShortUrl',
      'col2',
      'col3',
      'col4',
      'col5',
      'col6'
    ];
    public function question()
    {
        return $this->hasMany('App\FeedbackQuestionsModel', 'FeedbackId', 'FeedbackId');
    }
    public function feedbackpoints()
    {
         return $this->hasMany('App\FeedbackPointsModel', 'id');
    }
}
