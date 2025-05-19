<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AbstractController;
use App\Http\Resources\Resource;
use Illuminate\View\View;

/**
 * Class AdminController
 */
class AdminController extends AbstractController
{
    /**
     * @return resource
     */
    public function index(): View
    {
        return view('index');
    }
}
