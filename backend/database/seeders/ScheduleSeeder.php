<?php
declare(strict_types=1);

namespace Database\Seeders;

use App\Enums\MatchRound;
use App\Enums\TournamentType;
use App\Models\Schedule;
use App\Models\Season;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Illuminate\Database\Seeder;

class ScheduleSeeder extends Seeder
{
    public function run(): void
    {
        Schedule::query()->truncate();

        $season = Season::query()->first();
        $start = Carbon::now()->next(CarbonInterface::SUNDAY)->setHour(12)->setMinute(0)->setSecond(0);

        for ($i = 1; $i <= 49; $i++) {
            $model = new Schedule();
            $model->date = $start->addDay();
            $model->round = $this->getRound($i);
            $model->season_id = $season->id;
            $model->tournament_type = $this->getTournamentType($i);
            $model->save();
        }
    }

    private function getRound(int $index): MatchRound
    {
        return match ($index) {
            1, 8 => MatchRound::MATCH_DAY_1,
            2, 9 => MatchRound::MATCH_DAY_2,
            3, 10 => MatchRound::MATCH_DAY_3,
            4, 11 => MatchRound::MATCH_DAY_4,
            5, 12 => MatchRound::MATCH_DAY_5,
            6, 15 => MatchRound::MATCH_DAY_6,
            7, 49, 42, 35, 28, 21, 14 => MatchRound::FRIENDLY,
            13 => MatchRound::ROUND_OF_64,
            16 => MatchRound::MATCH_DAY_7,
            17 => MatchRound::MATCH_DAY_8,
            18 => MatchRound::MATCH_DAY_9,
            19 => MatchRound::MATCH_DAY_10,
            20 => MatchRound::ROUND_OF_32,
            22 => MatchRound::MATCH_DAY_11,
            23 => MatchRound::MATCH_DAY_12,
            24 => MatchRound::MATCH_DAY_13,
            25 => MatchRound::MATCH_DAY_14,
            26 => MatchRound::MATCH_DAY_15,
            27 => MatchRound::ROUND_OF_16,
            29 => MatchRound::MATCH_DAY_16,
            30 => MatchRound::MATCH_DAY_17,
            31 => MatchRound::MATCH_DAY_18,
            32 => MatchRound::MATCH_DAY_19,
            33 => MatchRound::MATCH_DAY_20,
            34 => MatchRound::QUARTER_FINAL,
            36 => MatchRound::MATCH_DAY_21,
            37 => MatchRound::MATCH_DAY_22,
            38 => MatchRound::MATCH_DAY_23,
            39 => MatchRound::MATCH_DAY_24,
            40 => MatchRound::MATCH_DAY_25,
            41 => MatchRound::SEMI_FINAL,
            43 => MatchRound::MATCH_DAY_26,
            44 => MatchRound::MATCH_DAY_27,
            45 => MatchRound::MATCH_DAY_28,
            46 => MatchRound::MATCH_DAY_29,
            47 => MatchRound::MATCH_DAY_30,
            48 => MatchRound::FINAL_GAME,
        };
    }

    private function getTournamentType(int $index): TournamentType
    {
        return match ($index) {
            1, 6, 5, 4, 3, 2 => TournamentType::PRE_SEASON,
            7, 49, 42, 35, 28, 21, 14 => TournamentType::FRIENDLY,
            8, 47, 46, 45, 44, 43, 40, 39, 38, 37, 36, 33, 32, 31, 30, 29, 26, 25,
            24, 23, 22, 19, 18, 17, 16, 15, 12, 11, 10, 9 => TournamentType::CHAMPIONSHIP,
            13, 48, 41, 34, 27, 20 => TournamentType::CUP,
        };
    }
}
