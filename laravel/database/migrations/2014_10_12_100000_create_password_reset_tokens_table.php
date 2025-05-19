<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private const string TABLE = 'password_reset_tokens';

    public function up(): void
    {
        if (Schema::hasTable(self::TABLE) === false) {
            Schema::create(self::TABLE, function (Blueprint $table) {
                $table->timestampTz('created_at', 6)->nullable();
                $table->string('email')->primary();
                $table->string('token');
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists(self::TABLE);
    }
};
