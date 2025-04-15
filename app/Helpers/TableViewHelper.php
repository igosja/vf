<?php
declare(strict_types=1);

namespace App\Helpers;

/**
 * Class TableViewHelper
 * @package App\Helpers
 */
class TableViewHelper
{
    /**
     * @param string $field
     * @return string
     */
    public static function sortLink(string $field): string
    {
        $additionalQuery = [
            'sort_by' => $field,
            'direction' => 'asc',
        ];

        if (request('direction') === 'asc') {
            $additionalQuery['direction'] = 'desc';
        }

        return request()->fullUrlWithQuery($additionalQuery);
    }
}
