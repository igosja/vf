<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\JsonResponse;

class ScheduleController extends Controller
{
    public function index(): JsonResponse
    {
        return new JsonResponse(
            Schedule::query()
                ->select([
                    'id',
                    'date',
                    'round',
                    'season_id',
                    'tournament_type',
                ])
                ->paginate(-1)
        );
    }
}
