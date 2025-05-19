<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model as BaseModel;

/**
 * Class AbstractModel
 */
abstract class AbstractModel extends BaseModel
{
    /**
     * @var string
     */
    protected $dateFormat = 'Y-m-d H:i:s.u';
}
