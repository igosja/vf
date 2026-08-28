<?php
declare(strict_types=1);

namespace App\Enums;

enum TournamentType: int
{
    case NATIONAL = 1;
    case CHAMPIONS_LEAGUE = 2;
    case CHAMPIONSHIP = 3;
    case CUP = 4;
}
