<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Tournament;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\JsonResponse;

class TournamentController extends Controller
{
    public function index(): JsonResponse
    {
        return new JsonResponse(
            Tournament::query()
                ->select(['id', 'country_id', 'season_id', 'tournament_type'])
                ->with([
                    'country' => function (BelongsTo $query) {
                        $query
                            ->select(['id', 'name']);
                    }
                ])
                ->orderBy('country_id')
                ->orderBy('tournament_type')
                ->paginate(-1)
        );
    }
}
