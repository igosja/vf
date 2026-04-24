<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            CountrySeeder::class,
            CitySeeder::class,
            StadiumSeeder::class,
            TeamSeeder::class,
            NameSeeder::class,
            SurnameSeeder::class,
            PlayerSeeder::class,
        ]);
    }
}
