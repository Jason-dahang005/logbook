<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'org_id',
    ];

    public function organization(){
        return $this->belongsTo(Organization::class,'org_id');
    }
}
