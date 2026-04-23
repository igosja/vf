<?php
declare(strict_types=1);

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class City
 * @package App\Models
 *
 * @property int $id
 * @property int $country_id
 * @property string $name
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class City extends AbstractModel
{
    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }
}
