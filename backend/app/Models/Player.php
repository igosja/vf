<?php
declare(strict_types=1);

namespace App\Models;

use Carbon\Carbon;

/**
 * Class Player
 * @package App\Models
 *
 * @property int $id
 * @property int $country_id
 * @property int $name_id
 * @property int $surname_id
 * @property int $team_id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Player extends AbstractModel
{
}
