<?php
declare(strict_types=1);

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $country_id
 * @property int $season_id
 * @property int $team_id
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
