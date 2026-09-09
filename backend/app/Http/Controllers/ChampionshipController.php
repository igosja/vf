<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Championship;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\JsonResponse;

class ChampionshipController extends Controller
{
    public function show(int $id): JsonResponse
    {
        return new JsonResponse(
            Championship::query()
                ->select([
                    'id',
                    'country_id',
                    'draws',
                    'goals_against',
                    'goals_difference',
                    'goals_for',
                    'losses',
                    'played',
                    'points',
                    'position',
                    'team_id',
                    'wins',
                ])
                ->with([
                    'team' => function (BelongsTo $query) {
                        $query
                            ->select(['id', 'name']);
                    },
                ])
                ->where('country_id', $id)
                ->paginate(-1)
        );
    }
}
