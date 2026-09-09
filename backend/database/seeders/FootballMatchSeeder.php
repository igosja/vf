<?php
declare(strict_types=1);

namespace Database\Seeders;

use App\Enums\MatchStatus;
use App\Enums\TournamentType;
use App\Models\Championship;
use App\Models\FootballMatch;
use App\Models\Schedule;
use App\Models\Tournament;
use Illuminate\Database\Seeder;

class FootballMatchSeeder extends Seeder
{
    public function run(): void
    {
        FootballMatch::query()->truncate();

        /**
         * @var Tournament $tournaments
         */
        $tournaments = Tournament::query()->where('tournament_type', TournamentType::CHAMPIONSHIP)->get();
        foreach ($tournaments as $tournament) {
            $championships = Championship::query()->where('country_id', $tournament->country_id)->get();
            $schedules = Schedule::query()->where('tournament_type', TournamentType::CHAMPIONSHIP)->get();

            $teams = range(1, $championships->count());
            $pairs = $this->generateRoundRobin($teams);

            foreach ($pairs as $round => $matches) {
                foreach ($matches as $match) {
                    $model = new FootballMatch();
                    $model->schedule_id = $schedules[$round - 1]->id;
                    $model->away_team_id = $championships[$match[0] - 1]->team_id;
                    $model->home_team_id = $championships[$match[1] - 1]->team_id;
                    $model->status = MatchStatus::NEW;
                    $model->save();
                }
            }
        }

        /**
         * @var Tournament $tournaments
         */
        $tournaments = Tournament::query()->where('tournament_type', TournamentType::CUP)->get();
        foreach ($tournaments as $tournament) {
            $championships = Championship::query()->where('country_id', $tournament->country_id)->get()->shuffle();
            $schedule = Schedule::query()->where('tournament_type', TournamentType::CUP)->oldest('date')->first();

            for ($i = 0; $i < $championships->count() - 1; $i = $i + 2) {
                $model = new FootballMatch();
                $model->schedule_id = $schedule->id;
                $model->away_team_id = $championships[$i]->team_id;
                $model->home_team_id = $championships[$i + 1]->team_id;
                $model->status = MatchStatus::NEW;
                $model->save();
            }
        }
    }

    private function generateRoundRobin(array $teams): array
    {
        $count = count($teams);

        if ($count % 2 !== 0) {
            $teams[] = 'BYE';
            $count++;
        }

        $schedule = [];
        $totalRounds = $count - 1;
        $half = $count / 2;

        for ($round = 1; $round <= $totalRounds; $round++) {
            $matches = [];

            for ($i = 0; $i < $half; $i++) {
                $home = $teams[$i];
                $away = $teams[$count - 1 - $i];

                if ($home !== 'BYE' && $away !== 'BYE') {
                    $matches[] = [$home, $away];
                }
            }

            $schedule[$round] = $matches;

            $lastTeam = array_pop($teams);
            array_splice($teams, 1, 0, [$lastTeam]);
        }

        return $schedule;
    }
}
