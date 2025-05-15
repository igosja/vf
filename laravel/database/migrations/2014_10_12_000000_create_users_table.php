<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    private const string TABLE = 'users';

    public function up(): void
    {
        if (Schema::hasTable(self::TABLE) === false) {
            Schema::create(self::TABLE, function (Blueprint $table) {
                $table->id();
                $table->timestampTz('created_at', 6);
                $table->string('email')->unique();
                $table->timestampTz('email_verified_at', 6)->nullable();
                $table->string('name');
                $table->string('password');
                $table->rememberToken();
                $table->timestampTz('updated_at', 6);
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists(self::TABLE);
    }
};
