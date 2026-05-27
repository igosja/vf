<?php
declare(strict_types=1);

namespace App\Enums;

enum Position: int
{
    case GK = 1;
    case LD = 2;
    case CD = 3;
    case RD = 4;
    case LM = 5;
    case CM = 6;
    case RM = 7;
    case LF = 8;
    case CF = 9;
    case RF = 10;
}
