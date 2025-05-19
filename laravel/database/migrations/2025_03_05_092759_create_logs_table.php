<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private const string TABLE = 'logs';

    public function up(): void
    {
        if (Schema::hasTable(self::TABLE) === false) {
            Schema::create(self::TABLE, function (Blueprint $table) {
                $table->increments('id');
                $table->string('channel')->nullable();
                $table->json('context')->nullable();
                $table->timestampTz('created_at', 6);
                $table->string('datetime')->nullable();
                $table->json('extra')->nullable();
                $table->text('formatted')->nullable();
                $table->integer('level')->default(0);
                $table->string('level_name', 20);
                $table->text('message')->nullable();
                $table->timestampTz('updated_at', 6);
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists(self::TABLE);
    }
};
