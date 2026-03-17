<?php
declare(strict_types=1);

namespace App\Http\Controllers;

class GeneratorController extends Controller
{
    public function index()
    {
        $history = [];
        for ($i = 1; $i <= 16; $i++) {
            $history['team' . $i] = 0;
        }
        for ($y = 1; $y <= 1000; $y++) {
            $table = [];
            $result = [];
            for ($i = 1; $i <= 16; $i++) {
                $table['team' . $i] = [
                    'power' => 3600 - $i *100,
                ];
                $result['team' . $i] = [
                    'game' => 0,
                    'win' => 0,
                    'draw' => 0,
                    'lose' => 0,
                    'points' => 0,
                    'power' => 3600 - $i *100,
                ];
            }
            foreach ($table as $teamHome => $itemHome) {
                foreach ($table as $teamAway => $itemAway) {
                    if ($teamHome == $teamAway) {
                        continue;
                    }

                    $win1 = 0;
                    $win2 = 0;
                    $power1 = $itemHome['power'];
                    $power2 = $itemAway['power'];
                    for ($i = 0; $i < 30; $i++) {
                        if (rand(0, $power1 + $power2) < $power1) {
                            $win1++;
                        } else {
                            $win2++;
                        }
                    }

                    $result[$teamHome]['game']++;
                    $result[$teamAway]['game']++;

                    if ($win1 > $win2 + 2) {
                        $result[$teamHome]['win']++;
                        $result[$teamHome]['points'] += 3;
                        $result[$teamAway]['lose']++;
                    } elseif ($win1 + 1 < $win2) {
                        $result[$teamAway]['win']++;
                        $result[$teamAway]['points'] += 3;
                        $result[$teamHome]['lose']++;
                    } else {
                        $result[$teamHome]['draw']++;
                        $result[$teamHome]['points'] += 1;
                        $result[$teamAway]['draw']++;
                        $result[$teamAway]['points'] += 1;
                    }
                }
            }
            uasort($result, function ($a, $b) {
                return $b['points'] <=> $a['points'];
            });
            $history[array_key_first($result)]++;
        }
        print '<pre>';
        print_r($history);
        exit;
    }
}
