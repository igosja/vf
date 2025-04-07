<?php
declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    private const string TABLE = 'logs';

    /**
     * @return void
     */
    public function up(): void
    {
        if (false === Schema::hasTable(self::TABLE)) {
            Schema::create(self::TABLE, function (Blueprint $table) {
                $table->increments('id');
                $table->string('channel')->nullable();
                $table->json('context')->nullable();
                $table->decimal('created_at', 17, 6);
                $table->string('datetime')->nullable();
                $table->json('extra')->nullable();
                $table->text('formatted')->nullable();
                $table->integer('level')->default(0);
                $table->string('level_name', 20);
                $table->text('message')->nullable();
                $table->decimal('updated_at', 17, 6);
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
