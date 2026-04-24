<?php
declare(strict_types=1);

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\TeamController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::post('login', AuthController::class . '@login')->middleware('throttle:10,1');
Route::post('register', AuthController::class . '@register');
Route::get('teams/{id}', TeamController::class . '@show');
Route::get('teams', TeamController::class . '@index');
Route::get('players', PlayerController::class . '@index');

Route::get('user', function () {
    return Auth::user();
})->middleware('auth:sanctum');

