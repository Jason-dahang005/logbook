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
        'org_id',
        // 'signature'

    ];

    public function organization(){
        return $this->belongsTo(Organization::class,'org_id');
    }
}
