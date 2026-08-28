<?php
declare(strict_types=1);

namespace App\Models;

use App\Enums\TournamentType;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $country_id
 * @property int $season_id
 * @property int $tournament_type
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property Team $country
 */
class Tournament extends AbstractModel
{

    protected function casts(): array
    {
        return [
            'tournament_type' => TournamentType::class,
        ];
    }

    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }
}
