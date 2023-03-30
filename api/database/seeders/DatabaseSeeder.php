<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Logbook;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        foreach(range(1,5) as $index){
            Logbook::create([
                'firstname' => fake()->firstName,
                'org_id' => 5 ,
                'lastname' => fake()->lastName,
                'description' => fake()->paragraph()
            ]);
        }

        // $this->call([
        //     RoleSeeder::class
        // ]);
    }
}
