<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeedbackOwnerModel extends Model
{
    protected $connection   = 'mysql_feedback';
    protected $table        = 'FlOwner';
    protected $primaryKey   = 'id';
    public $timestamps = false;
    protected $fillable     = [
      'OMobileNo',
      'OEmail',
      'OName',
      'OIndustryId',
      'OIndustryName',
      'ODob',
      'ORegDate',
      'OActDate',
      'ORegFlag',
      'OActFlag',
      'OAddress',
      'OFbackCreationLimit',
      'OFreeDays',
      'OFbackCreatedCounts',
      'DefaultFbackFlag',
      'FreeSubscriptionFlag',
      'Opswd',
      'OSecurePswd',
      'SenderId',
      'SenderKey',
      'MsgCount',
      'AppVersion',
      'UpdateTimestamp',
      'InsertTimestamp',
      'UserName',
      'otp',
      'token',
      'col4',
      'col5',
      'col6'
    ];
}
