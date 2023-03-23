<?php

namespace App\Models;

use App\Models\guard\Organization;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Admin extends Model
{
    use HasFactory;

    protected $fillable=[

        'name',
        'email',
        'password',
    ];

    public function organization()
    {
        return $this->hasMany(Organization::class);
    }
}
