<?php
declare(strict_types=1);

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $country_id
 * @property int $draws
 * @property int $goals_against
 * @property int $goals_difference
 * @property int $goals_for
 * @property int $losses
 * @property int $played
 * @property int $points
 * @property int $position
 * @property int $season_id
 * @property int $team_id
 * @property int $wins
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property Team $country
 */
class Championship extends AbstractModel
{
    public function team(): BelongsTo
    {
        return $this->belongsTo(Team::class);
    }
}
