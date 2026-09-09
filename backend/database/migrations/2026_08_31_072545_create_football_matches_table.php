<?php
declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private const string TABLE = 'football_matches';

    public function up(): void
    {
        if (false === Schema::hasTable(self::TABLE)) {
            Schema::create(self::TABLE, function (Blueprint $table) {
                $table->id();
                $table->unsignedTinyInteger('away_score')->default(0);
                $table->foreignId('away_team_id')->constrained('teams')->cascadeOnDelete();
                $table->unsignedTinyInteger('home_score')->default(0);
                $table->foreignId('home_team_id')->constrained('teams')->cascadeOnDelete();
                $table->foreignId('schedule_id')->constrained()->cascadeOnDelete();
                $table->unsignedTinyInteger('status');
                $table->timestampsTz(6);
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists(self::TABLE);
    }
};
