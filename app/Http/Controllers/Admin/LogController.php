<?php
declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AbstractController;
use App\Http\Requests\Admin\Log\IndexRequest;
use App\Models\Log;
use App\Services\Log\LogTableViewService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Session;
use Illuminate\View\View;
use Monolog\Level;

/**
 * Class LogController
 * @package App\Http\Controllers\Admin
 */
class LogController extends AbstractController
{
    public function __construct(
        private readonly LogTableViewService $logTableViewService
    ) {
    }

    /**
     * @param IndexRequest $request
     * @return View|RedirectResponse
     */
    public function index(IndexRequest $request): View|RedirectResponse
    {
        if ($request->has('locale')) {
            Session::put('locale', $request->get('locale'));
            return redirect()->route('logs.index');
        }

        return view('log.index', [
            'levels' => Level::cases(),
            'logs' => $this->logTableViewService->getLogs($request),
        ]);
    }

    /**
     * @param Log $log
     * @return View
     */
    public function show(Log $log): View
    {
        return view('log.view', [
            'log' => $log,
        ]);
    }

    /**
     * @param Log $log
     * @return RedirectResponse
     */
    public function destroy(Log $log): RedirectResponse
    {
        $log->delete();
        return redirect()->route('logs.index');
    }
}
