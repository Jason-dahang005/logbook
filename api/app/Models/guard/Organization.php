<?php

namespace App\Models\guard;

use App\Models\Admin;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\guard\Logbook;

class Organization extends Model
{
    use HasFactory;

    protected $fillable = [
        'org_name', 'description',
    ]; 
    
    public function logbook()
    {
        return $this->hasOne(Logbook::class);
    }

    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }
}
