<?php

declare(strict_types=1);

namespace App\Loggers;

use App\Handlers\DatabaseHandler;
use Monolog\Logger;

/**
 * Class DatabaseLogger
 */
class DatabaseLogger
{
    public function __invoke(): Logger
    {
        return new Logger('Database', [
            new DatabaseHandler,
        ]);
    }
}
