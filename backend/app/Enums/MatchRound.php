<?php
declare(strict_types=1);

namespace App\Enums;

enum MatchRound: int
{
    case MATCH_DAY_1 = 1;
    case MATCH_DAY_2 = 2;
    case MATCH_DAY_3 = 3;
    case MATCH_DAY_4 = 4;
    case MATCH_DAY_5 = 5;
    case MATCH_DAY_6 = 6;
    case MATCH_DAY_7 = 7;
    case MATCH_DAY_8 = 8;
    case MATCH_DAY_9 = 9;
    case MATCH_DAY_10 = 10;
    case MATCH_DAY_11 = 11;
    case MATCH_DAY_12 = 12;
    case MATCH_DAY_13 = 13;
    case MATCH_DAY_14 = 14;
    case MATCH_DAY_15 = 15;
    case MATCH_DAY_16 = 16;
    case MATCH_DAY_17 = 17;
    case MATCH_DAY_18 = 18;
    case MATCH_DAY_19 = 19;
    case MATCH_DAY_20 = 20;
    case MATCH_DAY_21 = 21;
    case MATCH_DAY_22 = 22;
    case MATCH_DAY_23 = 23;
    case MATCH_DAY_24 = 24;
    case MATCH_DAY_25 = 25;
    case MATCH_DAY_26 = 26;
    case MATCH_DAY_27 = 27;
    case MATCH_DAY_28 = 28;
    case MATCH_DAY_29 = 29;
    case MATCH_DAY_30 = 30;
    case QUALIFICATION_ROUND_1 = 31;
    case QUALIFICATION_ROUND_2 = 32;
    case QUALIFICATION_ROUND_3 = 33;
    case ROUND_OF_512 = 34;
    case ROUND_OF_256 = 35;
    case ROUND_OF_128 = 36;
    case ROUND_OF_64 = 37;
    case ROUND_OF_32 = 38;
    case ROUND_OF_16 = 39;
    case QUARTER_FINAL = 40;
    case SEMI_FINAL = 41;
    case FINAL_GAME = 42;
    case FRIENDLY = 43;
}
