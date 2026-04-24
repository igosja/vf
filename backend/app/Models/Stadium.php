<?php
declare(strict_types=1);

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class Stadium
 * @package App\Models
 *
 * @property int $id
 * @property int $capacity
 * @property int $city_id
 * @property string $name
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property City $city
 */
class Stadium extends AbstractModel
{
    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }
}
