<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeedbackQuestionsModel extends Model
{
    protected $connection   = 'mysql_feedback';
    protected $table        = 'FeedbackQuestions';
    protected $primaryKey   = 'id';
    public $timestamps = false;
    protected $fillable     = [
      'QuestionId',
      'OwnerMobile',
      'FeedbackId',
      'QuestionName',
      'IsMandatory',
      'OptionFormatId',
      'IsActivate',
      'MultiSelectFlag',
      'UpdateTimestamp',
      'InsertTimestamp',
      'col2',
      'col3',
      'col4',
      'col5',
      'col1'
    ];
    public function feedbackpoints()
    {
         return $this->hasMany('App\FeedbackPointsModel', 'FeedbackQuestionId','QuestionId');
    }
}
