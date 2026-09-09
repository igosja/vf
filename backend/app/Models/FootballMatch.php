<?php
declare(strict_types=1);

namespace App\Models;

use App\Enums\MatchRound;
use App\Enums\MatchStatus;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $away_score
 * @property int $away_team_id
 * @property int $home_score
 * @property int $home_team_id
 * @property int $schedule_id
 * @property MatchStatus $status
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property Team $awayTeam
 * @property Team $homeTeam
 */
class FootballMatch extends AbstractModel
{
    protected function casts(): array
    {
        return [
            'round' => MatchRound::class,
            'status' => MatchStatus::class,
        ];
    }

    public function awayTeam(): BelongsTo
    {
        return $this->belongsTo(Team::class);
    }

    public function homeTeam(): BelongsTo
    {
        return $this->belongsTo(Team::class);
    }
}
