<?php
declare(strict_types=1);

namespace App\Models;

use App\Enums\MatchRound;
use App\Enums\TournamentType;
use Carbon\Carbon;

/**
 * @property int $id
 * @property Carbon $date
 * @property MatchRound $round
 * @property int $season_id
 * @property TournamentType $tournament_type
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Schedule extends AbstractModel
{
    protected function casts(): array
    {
        return [
            'date' => 'datetime',
            'round' => MatchRound::class,
            'tournament_type' => TournamentType::class,
        ];
    }
}
