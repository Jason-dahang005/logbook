<?php

namespace App\Models\guard;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\guard\Organization;
use App\Models\User;

class Logbook extends Model
{
    use HasFactory;

    protected $fillable=[

        'fname',
        'lname',
        'description',
        
        
    ];

     protected $casts = [
        'date' => 'date:hh:mm'
    ];
    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
