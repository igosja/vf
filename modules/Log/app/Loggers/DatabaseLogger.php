<?php
declare(strict_types=1);

namespace Modules\Log\app\Loggers;

use Modules\Log\app\Handlers\DatabaseHandler;
use Monolog\Logger;

/**
 * Class DatabaseLogger
 * @package Modules\Log\app\Loggers
 */
class DatabaseLogger
{
    /**
     * @return Logger
     */
    public function __invoke(): Logger
    {
        return new Logger('Database', [
            new DatabaseHandler(),
        ]);
    }
}
