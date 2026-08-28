<?php
declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Season;
use Illuminate\Database\Seeder;

class SeasonSeeder extends Seeder
{
    public function run(): void
    {
        Season::query()->truncate();

        $model = new Season();
        $model->id = 1;
        $model->save();
    }
}
