<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private const string TABLE = 'country_surnames';

    public function up(): void
    {
        if (false === Schema::hasTable(self::TABLE)) {
            Schema::create(self::TABLE, function (Blueprint $table) {
                $table->foreignId('country_id')->constrained()->cascadeOnDelete();
                $table->unsignedSmallInteger('frequency');
                $table->foreignId('surname_id')->constrained()->cascadeOnDelete();
                $table->timestampsTz(6);

                $table->unique(['country_id', 'surname_id']);
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists(self::TABLE);
    }
};
