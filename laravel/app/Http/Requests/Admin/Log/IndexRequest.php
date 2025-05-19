<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin\Log;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Monolog\Level;

/**
 * Class IndexRequest
 */
class IndexRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'id' => ['nullable', 'integer', 'exists:logs,id'],
            'level' => ['nullable', 'integer', Rule::enum(Level::class)],
        ];
    }
}
