<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\JsonResponse;

class TeamController extends Controller
{
    public function index(): JsonResponse
    {
        return new JsonResponse(
            Team::query()
                ->select(['id', 'name', 'stadium_id'])
                ->with(['stadium' => function (BelongsTo $query) {
                    $query
                        ->select(['id', 'capacity', 'city_id', 'name'])
                        ->with(['city' => function (BelongsTo $query) {
                            $query
                                ->select(['id', 'country_id', 'name'])
                                ->with(['country' => function (BelongsTo $query) {
                                    $query
                                        ->select(['id', 'name']);
                                }]);
                        }]);
                }])
                ->paginate()
        );
    }

    public function show(int $id): JsonResponse
    {
        return new JsonResponse(
            Team::query()
                ->select(['id', 'name', 'stadium_id'])
                ->with(['stadium' => function (BelongsTo $query) {
                    $query
                        ->select(['id', 'capacity', 'city_id', 'name'])
                        ->with(['city' => function (BelongsTo $query) {
                            $query
                                ->select(['id', 'country_id', 'name'])
                                ->with(['country' => function (BelongsTo $query) {
                                    $query
                                        ->select(['id', 'name']);
                                }]);
                        }]);
                }])
                ->where('id', $id)
                ->first()
        );
    }
}
