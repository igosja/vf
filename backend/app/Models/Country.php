<?php
declare(strict_types=1);

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * Class Country
 * @package App\Models
 *
 * @property int $id
 * @property string $code
 * @property string $name
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Country extends AbstractModel
{
    public function names(): BelongsToMany
    {
        return $this->belongsToMany(Name::class);
    }

    public function surnames(): BelongsToMany
    {
        return $this->belongsToMany(Surname::class);
    }
}
