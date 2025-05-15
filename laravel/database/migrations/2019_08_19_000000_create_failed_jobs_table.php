<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    private const string TABLE = 'failed_jobs';

    public function up(): void
    {
        if (Schema::hasTable(self::TABLE) === false) {
            Schema::create(self::TABLE, function (Blueprint $table) {
                $table->id();
                $table->text('connection');
                $table->longText('exception');
                $table->timestampTz('failed_at', 6)->useCurrent();
                $table->longText('payload');
                $table->text('queue');
                $table->string('uuid')->unique();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists(self::TABLE);
    }
};
