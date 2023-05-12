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
<<<<<<< HEAD
        

=======
>>>>>>> 5db83821fd94af944708c969aeddbaf63a8e90c2
    ];

    public function organization(){
        return $this->belongsTo(Organization::class,'org_id');
    }
}
