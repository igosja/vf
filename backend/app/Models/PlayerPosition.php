<?php
declare(strict_types=1);

namespace App\Models;

use App\Enums\Position;
use Carbon\Carbon;

/**
 * Class PlayerPosition
 * @package App\Models
 *
 * @property int $player_id
 * @property Position $position
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class PlayerPosition extends AbstractModel
{
    public $incrementing = false;

    protected function casts(): array
    {
        return [
            'position' => Position::class,
        ];
    }
}
