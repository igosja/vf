<?php
declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private const string TABLE = 'schedules';

    public function up(): void
    {
        if (false === Schema::hasTable(self::TABLE)) {
            Schema::create(self::TABLE, function (Blueprint $table) {
                $table->id();
                $table->dateTimeTz('date');
                $table->unsignedTinyInteger('round');
                $table->foreignId('season_id')->constrained()->cascadeOnDelete();
                $table->unsignedTinyInteger('tournament_type');
                $table->timestampsTz(6);
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists(self::TABLE);
    }
};
