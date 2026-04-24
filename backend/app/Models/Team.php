<?php
declare(strict_types=1);

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class Team
 * @package App\Models
 *
 * @property int $id
 * @property string $name
 * @property int $stadium_id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property Stadium $stadium
 */
class Team extends AbstractModel
{
    public function stadium(): BelongsTo
    {
        return $this->belongsTo(Stadium::class);
    }
}
