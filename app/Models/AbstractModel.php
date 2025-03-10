<?php
declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model as BaseModel;

/**
 * Class Model
 * @package App\Models
 */
abstract class AbstractModel extends BaseModel
{
    /**
     * @var string $dateFormat
     */
    protected $dateFormat = 'U.u';
}
