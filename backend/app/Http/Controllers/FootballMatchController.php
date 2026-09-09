<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\FootballMatch;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\JsonResponse;

class FootballMatchController extends Controller
{
    public function index(): JsonResponse
    {
        $query = FootballMatch::query()
            ->select([
                'id',
                'away_score',
                'away_team_id',
                'home_score',
                'home_team_id',
                'status',
            ])
            ->with([
                'awayTeam' => function (BelongsTo $query) {
                    $query
                        ->select(['id', 'name']);
                },
                'homeTeam' => function (BelongsTo $query) {
                    $query
                        ->select(['id', 'name']);
                },
            ]);

        if (request()->has('schedule_id')) {
            $query->where('schedule_id', request()->input('schedule_id'));
        }

        return new JsonResponse(
            $query->paginate(-1)
        );
    }

    public function show(int $id): JsonResponse
    {
        return new JsonResponse(
            FootballMatch::query()
                ->select([
                    'id',
                    'away_score',
                    'away_team_id',
                    'home_score',
                    'home_team_id',
                    'status',
                ])
                ->with([
                    'awayTeam' => function (BelongsTo $query) {
                        $query
                            ->select(['id', 'name']);
                    },
                    'homeTeam' => function (BelongsTo $query) {
                        $query
                            ->select(['id', 'name']);
                    },
                ])
                ->where('id', $id)
                ->first()
        );
    }
}
