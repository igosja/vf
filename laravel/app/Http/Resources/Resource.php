<?php

declare(strict_types=1);

namespace App\Http\Resources;

use App\Models\AbstractModel;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class Resource
 */
class Resource extends JsonResource
{
    private const DATE_TIME_FORMAT = 'U.u';

    public function toArray(Request $request): array
    {
        $result = parent::toArray($request);

        if ($this->resource instanceof AbstractModel) {
            if ($this->resource->hasAttribute('created_at')) {
                $result['created_at'] = $this->resource->created_at->format(self::DATE_TIME_FORMAT);
            }

            if ($this->resource->hasAttribute('updated_at', $result)) {
                $result['updated_at'] = $this->resource->updated_at->format(self::DATE_TIME_FORMAT);
            }
        }

        return $result;
    }
}
