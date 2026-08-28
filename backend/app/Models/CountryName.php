<?php
declare(strict_types=1);

namespace App\Models;

use Carbon\Carbon;

/**
 * @property int $id
 * @property int $country_id
 * @property int $frequency
 * @property int $name_id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class CountryName extends AbstractModel
{
    public $incrementing = false;
}
