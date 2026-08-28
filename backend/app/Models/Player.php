<?php
declare(strict_types=1);

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property int $age
 * @property int $country_id
 * @property int $fatigue
 * @property int $name_id
 * @property int $power
 * @property int $surname_id
 * @property int $team_id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property Country $country
 * @property Name $name
 * @property Surname $surname
 * @property PlayerPosition[] $playerPositions
 */
class Player extends AbstractModel
{
    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }

    public function name(): BelongsTo
    {
        return $this->belongsTo(Name::class);
    }

    public function surname(): BelongsTo
    {
        return $this->belongsTo(Surname::class);
    }

    public function playerPositions(): HasMany
    {
        return $this->hasMany(PlayerPosition::class);
    }
}
