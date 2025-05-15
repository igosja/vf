<?php
declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    private const string TABLE = 'personal_access_tokens';

    /**
     * @return void
     */
    public function up(): void
    {
        if (false === Schema::hasTable(self::TABLE)) {
            Schema::create(self::TABLE, function (Blueprint $table) {
                $table->id();
                $table->text('abilities')->nullable();
                $table->timestampTz('created_at', 6);
                $table->timestampTz('expires_at', 6)->nullable();
                $table->timestampTz('last_used_at', 6)->nullable();
                $table->string('name');
                $table->string('token', 64)->unique();
                $table->morphs('tokenable');
                $table->timestampTz('updated_at', 6);
            });
        }
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists(self::TABLE);
    }
};
