<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Logbook extends Model
{
    use HasFactory;


    protected $fillable = [
        'firstname',
        'lastname',
        'description',
        // 'image',
        'org_id',
    ];

    public function organization(){
        return $this->belongsTo(Organization::class,'org_id');
    }
}
