<?php
declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Championship;
use App\Models\Season;
use App\Models\Team;
use Illuminate\Database\Seeder;

class ChampionshipSeeder extends Seeder
{
    public function run(): void
    {
        Championship::query()->truncate();

        /** @var Team[] $teams */
        $teams = Team::query()->get();
        $season = Season::query()->first();
        foreach ($teams as $team) {
            $model = new Championship();
            $model->country_id = $team->stadium->city->country_id;
            $model->season_id = $season->id;
            $model->team_id = $team->id;
            $model->save();
        }
    }
}
