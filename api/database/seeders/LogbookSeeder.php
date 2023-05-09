<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Logbook;

class LogbookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach(range(1,15) as $index){
            Logbook::create([
                'firstname'     => fake()->firstName,
                'org_id'        => 5 ,
                'lastname'      => fake()->lastName,
                'description'   => fake()->paragraph(),
                'image'         => fake()->imageUrl()
            ]);
        }
    }
}
