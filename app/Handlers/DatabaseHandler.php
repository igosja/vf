<?php
declare(strict_types=1);

namespace App\Handlers;

use App\Models\Log;
use Monolog\Handler\AbstractProcessingHandler;
use Monolog\LogRecord;

/**
 * Class DatabaseHandler
 * @package App\Handlers
 */
class DatabaseHandler extends AbstractProcessingHandler
{
    /**
     * @param LogRecord $record
     * @return void
     */
    protected function write(LogRecord $record): void
    {
        $log = new Log();
        $log->channel = $record->channel;
        $log->context = $record->context;
        $log->datetime = $record->datetime->format('Y-m-d H:i:s.u');
        $log->extra = $record->extra;
        $log->formatted = $record->formatted;
        $log->level = $record->level->value;
        $log->level_name = $record->level->name;
        $log->message = $record->message;
        $log->save();
    }
}
