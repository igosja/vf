<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AbstractController;
use App\Models\Log;
use Illuminate\Http\Request;
use Illuminate\View\View;

class LogController extends AbstractController
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): View
    {
        $query = Log::query();

        if ($request->filled('id')) {
            $query->where('id', $request->input('id'));
        }

        if ($request->filled('level')) {
            $query->where('level_name', 'like', '%' . $request->input('level') . '%');
        }

        if ($request->filled('sort_by')) {
            $query->orderBy(
                $request->input('sort_by', 'id'),
                $request->input('direction', 'asc')
            );
        }

        return view('log.index', [
            'logs' => $query->paginate()->withQueryString(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Log $log)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Log $log)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Log $log)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Log $log)
    {
        //
    }
}
