<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Logbook;

class Organization extends Model
{
    use HasFactory;



    protected $fillable = [
        'name',
        'user_id',
        'description'
    ];

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function logbook(){
        return $this->hasOne(Logbook::class);
    }

    public function attendance(){
        return $this->hasMany(Attendance::class);
    }

    public function note(){
        return $this->hasMany(Note::class);
    }
}
