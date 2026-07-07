<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private const string TABLE = 'player_positions';

    public function up(): void
    {
        if (false === Schema::hasTable(self::TABLE)) {
            Schema::create(self::TABLE, function (Blueprint $table) {
                $table->foreignId('player_id')->constrained()->cascadeOnDelete();
                $table->unsignedTinyInteger('position');
                $table->timestampsTz(6);
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists(self::TABLE);
    }
};
