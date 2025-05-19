<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AbstractController;
use App\Http\Requests\Admin\Log\IndexRequest;
use App\Models\Log;
use App\Services\Log\LogTableViewService;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;
use Monolog\Level;

/**
 * Class LogController
 */
class LogController extends AbstractController
{
    public function __construct(
        private readonly LogTableViewService $logTableViewService
    ) {}

    public function index(IndexRequest $request): View|RedirectResponse
    {
        return view('log.index', [
            'levels' => Level::cases(),
            'logs' => $this->logTableViewService->getLogs($request),
        ]);
    }

    public function show(Log $log): View
    {
        return view('log.view', [
            'log' => $log,
        ]);
    }

    public function destroy(Log $log): RedirectResponse
    {
        $log->delete();

        return redirect()->route('logs.index');
    }
}
