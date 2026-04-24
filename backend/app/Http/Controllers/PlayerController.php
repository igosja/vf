<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\JsonResponse;

class PlayerController extends Controller
{
    public function index(): JsonResponse
    {
        return new JsonResponse(
            Player::query()
                ->select(['id', 'country_id', 'name_id', 'surname_id'])
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
                ])
                ->where('team_id', request()->input('team_id', 1))
                ->paginate(-1)
        );
    }
}
