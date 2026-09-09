<?php
declare(strict_types=1);

namespace App\Enums;

enum MatchStatus: int
{
    case NEW = 1;
    case LIVE = 2;
    case FINISHED = 3;
}
