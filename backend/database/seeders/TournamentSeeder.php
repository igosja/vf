<?php
declare(strict_types=1);

namespace Database\Seeders;

use App\Enums\TournamentType;
use App\Models\Season;
use App\Models\Team;
use App\Models\Tournament;
use Illuminate\Database\Seeder;

class TournamentSeeder extends Seeder
{
    public function run(): void
    {
        Tournament::query()->truncate();

        /** @var Team[] $teams */
        $teams = Team::query()->get();
        $season = Season::query()->first();
        $countryId = 0;
        foreach ($teams as $team) {
            if ($countryId == $team->stadium->city->country_id) {
                continue;
            }

            $model = new Tournament();
            $model->country_id = $team->stadium->city->country_id;
            $model->season_id = $season->id;
            $model->tournament_type = TournamentType::CHAMPIONSHIP;
            $model->save();

            $model = new Tournament();
            $model->country_id = $team->stadium->city->country_id;
            $model->season_id = $season->id;
            $model->tournament_type = TournamentType::CUP;
            $model->save();

            $countryId = $team->stadium->city->country_id;
        }
    }
}
