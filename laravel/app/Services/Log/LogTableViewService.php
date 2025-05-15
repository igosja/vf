<?php
declare(strict_types=1);

namespace App\Services\Log;

use App\Models\Log;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

/**
 * Class LogTableViewService
 * @package App\Services\Log
 */
class LogTableViewService
{
    /**
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function getLogs(Request $request): LengthAwarePaginator
    {
        $query = Log::query();

        if ($request->filled('id')) {
            $query->where('id', $request->input('id'));
        }

        if ($request->filled('level')) {
            $query->where('level', $request->input('level'));
        }

        $query->orderBy(
            $request->input('sort_by', 'id'),
            $request->input('direction', 'asc')
        );

        return $query->paginate()->withQueryString();
    }
}
