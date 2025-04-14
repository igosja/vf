<?php
declare(strict_types=1);

namespace App\Loggers;

use App\Handlers\DatabaseHandler;
use Monolog\Logger;

/**
 * Class DatabaseLogger
 * @package App\Loggers
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
