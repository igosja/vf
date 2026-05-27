<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Enums\Position;
use App\Models\Player;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\Resources\Json\JsonResource;

class PlayerController extends Controller
{
    public function index()
    {
        return new JsonResource(
            Player::query()
                ->select(['id', 'age', 'country_id', 'name_id', 'surname_id', 'fatigue', 'power'])
                ->with([
                    'country' => function (BelongsTo $query) {
                        $query
                            ->select(['id', 'name']);
                    },
                    'name' => function (BelongsTo $query) {
                        $query
                            ->select(['id', 'name']);
                    },
                    'surname' => function (BelongsTo $query) {
                        $query
                            ->select(['id', 'surname']);
                    },
                    'playerPositions' => function (HasMany $query) {
                        $query
                            ->select(['player_id', 'position'])
                            ->withCasts(['position' => Position::class]);
                    },
                ])
                ->where('team_id', request()->input('team_id', 1))
                ->paginate(-1)
        );
    }
}
