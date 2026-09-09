<?php
declare(strict_types=1);

namespace App\Models;

use App\Enums\Position;
use Carbon\Carbon;

/**
 * @property int $player_id
 * @property PlayerPosition $position
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class PlayerPosition extends AbstractModel
{
    public $incrementing = false;

    protected function casts(): array
    {
        return [
            'position' => PlayerPosition::class,
        ];
    }
}
