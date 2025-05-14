<?php
declare(strict_types=1);

namespace App\Http\Requests\Admin\Log;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Monolog\Level;

/**
 * Class IndexRequest
 * @package App\Http\Requests\Admin\Log
 */
class IndexRequest extends FormRequest
{
    /**
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array
     */
    public function rules(): array
    {
        return [
            'id' => ['nullable', 'integer', 'exists:logs,id'],
            'level' => ['nullable', 'integer', Rule::enum(Level::class)],
        ];
    }
}
