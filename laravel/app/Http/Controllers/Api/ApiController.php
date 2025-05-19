<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\AbstractController;
use App\Http\Resources\Resource;
use Illuminate\Foundation\Application;

/**
 * Class ApiController
 */
class ApiController extends AbstractController
{
    public function index(): Resource
    {
        return new Resource([
            'laravel' => Application::VERSION,
            'php' => PHP_VERSION,
        ]);
    }
}
