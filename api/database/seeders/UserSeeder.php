<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (range(1, 15) as $user) {
            User::create([
                'firstname' => fake()->firstName,
                'lastname'  => fake()->lastName,
                'email'     => fake()->email,
                'password'  => bcrypt('12345'),
            ]);
        }
    }
}
