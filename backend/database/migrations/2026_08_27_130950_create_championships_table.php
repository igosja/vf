<?php
declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private const string TABLE = 'championships';

    public function up(): void
    {
        if (false === Schema::hasTable(self::TABLE)) {
            Schema::create(self::TABLE, function (Blueprint $table) {
                $table->id();
                $table->foreignId('country_id')->constrained()->cascadeOnDelete();
                $table->unsignedTinyInteger('draws')->default(0);
                $table->unsignedSmallInteger('goals_against')->default(0);
                $table->smallInteger('goals_difference')->default(0);
                $table->unsignedSmallInteger('goals_for')->default(0);
                $table->unsignedTinyInteger('losses')->default(0);
                $table->unsignedTinyInteger('played')->default(0);
                $table->unsignedTinyInteger('points')->default(0);
                $table->unsignedTinyInteger('position')->default(0);
                $table->foreignId('season_id')->constrained()->cascadeOnDelete();
                $table->foreignId('team_id')->constrained()->cascadeOnDelete();
                $table->unsignedTinyInteger('wins')->default(0);
                $table->timestampsTz(6);

                $table->unique(['season_id', 'country_id', 'team_id']);
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists(self::TABLE);
    }
};
