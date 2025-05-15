<?php
declare(strict_types=1);

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\LogController;
use Illuminate\Support\Facades\Route;

Route::get('', [AdminController::class, 'index']);
Route::resource('logs', LogController::class)->only(['index', 'show', 'destroy']);
