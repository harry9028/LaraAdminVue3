<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Casts\Attribute;
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
     protected $fillable = [
        'name', 'email', 'contact_no','password','bio', 'photo', 'type','access_level'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected function accessLevel(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value)
        );
    }
    public function SMSInfo($api)
    {
        return $this->hasOne('App\Models\SMSAuth')
            ->where('api_flag',$api)
            ->where('is_active', 1)
            ->select('id','api_key', 'username', 'sender_id','total_left_sms', 'user_id', 'peid', 'tempid');
    }
}
