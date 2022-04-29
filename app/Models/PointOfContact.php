<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PointOfContact extends Model
{
     protected $connection   = 'tmpos_mysql';
     protected $table = 'tmbill_pointof_contact';
     protected $primaryKey   = 'id';
     protected $fillable = [
        'tmpos_id',
        'poc_name',
        'poc_contact_no',
        'poc_address',
        'poc_company_mail_id',
        'poc_alternate_contact_no',
        'reseller_company_name',
        'reseller_company_mail_id',
        'reseller_company_address',
        'sales_person_name',
        'sales_person_address',
        'sales_person_mail_id',
        'lead_generated_by',
        'lead_generatedby_contactno',
        'lead_generatedby_mail',
        'lead_generatedby_address'
     ];
      public function getFullNameAttribute()
      {
         return "{$this->poc_name} - {$this->poc_contact_no}";
      }
      public function AtlanticUser(){
         return $this->hasOne('App\TMPOS_USER', 'tmpos_id','tmpos_id')->select('tmpos_id', 'name', 'username');
      }
}
