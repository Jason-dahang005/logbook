<?php

namespace App\Models\guard;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\guard\Organization;

class Logbook extends Model
{
    use HasFactory;

     protected $casts = [
        'date' => 'date:hh:mm'
    ];
    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }
}
