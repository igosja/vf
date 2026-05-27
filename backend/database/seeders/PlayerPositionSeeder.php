<?php
declare(strict_types=1);

namespace Database\Seeders;

use App\Enums\Position;
use App\Models\Player;
use App\Models\PlayerPosition;
use Illuminate\Database\Seeder;

class PlayerPositionSeeder extends Seeder
{
    public function run(): void
    {
        PlayerPosition::query()->truncate();

        Player::query()->each(function (Player $player) {
            $playerPosition = new PlayerPosition();
            $playerPosition->player_id = $player->id;
            $playerPosition->position = $this->getPosition($player->id);
            $playerPosition->save();
        });
    }

    private function getPosition(int $id): Position
    {
        $position = $id % 22;
        return match ($position) {
            0, 1 => Position::GK,
            2, 3 => Position::LD,
            4, 5, 6, 7 => Position::CD,
            8, 9 => Position::RD,
            10, 11 => Position::LM,
            12, 13, 14, 15 => Position::CM,
            16, 17 => Position::RM,
            default => Position::CF,
        };
    }
}
