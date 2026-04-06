<?php
declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Country
 * @package App\Models
 *
 * @property string $code
 * @property string $name
 */
class Country extends Model
{
    protected $dateFormat = 'Y-m-d H:i:s.u';
}
