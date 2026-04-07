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
                        ->select(['id', 'name', 'city_id'])
                        ->with(['city' => function (BelongsTo $query) {
                            $query
                                ->select(['id', 'name', 'country_id'])
                                ->with(['country' => function (BelongsTo $query) {
                                    $query
                                        ->select(['id', 'name']);
                                }]);
                        }]);
                }])
                ->paginate()
        );
    }
}
