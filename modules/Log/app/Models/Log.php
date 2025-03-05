<?php
declare(strict_types=1);

namespace Modules\Log\app\Models;

use App\Models\Model;

/**
 * Class Log
 * @package App\Models
 *
 * @property int id
 * @property string channel
 * @property array context
 * @property numeric created_at
 * @property string datetime
 * @property array extra
 * @property string formatted
 * @property int level
 * @property string level_name
 * @property string message
 * @property numeric updated_at
 */
class Log extends Model
{
    /**
     * @var string[] $casts
     */
    protected $casts = [
        'context' => 'array',
        'extra' => 'array',
    ];
}
