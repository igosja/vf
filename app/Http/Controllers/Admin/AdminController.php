<?php
declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AbstractController;
use App\Http\Resources\Resource;
use Illuminate\View\View;

/**
 * Class AdminController
 * @package App\Http\Controllers\Admin
 */
class AdminController extends AbstractController
{
    /**
     * @return Resource
     */
    public function index(): View
    {
        return view('index');
    }
}
