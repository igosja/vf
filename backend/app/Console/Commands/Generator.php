<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class Generator extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:generator';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $historyCup = [];
        $history = [];
        for ($i = 1; $i <= 16; $i++) {
            $historyCup['team' . $i] = 0;
            $history['team' . $i] = 0;
        }

        $bar = $this->output->createProgressBar(10000);
        $bar->start();

        $oneGameResult = [
            'win' => 0,
            'draw' => 0,
            'lose' => 0,
        ];

        for ($y = 1; $y <= 10000; $y++) {

            $win1 = 0;
            $win2 = 0;
            $power1 = 3000;
            $power2 = 3100;
            for ($i = 0; $i < 30; $i++) {
                if (mt_rand(0, $power1 + $power2) < $power1) {
                    $win1++;
                } else {
                    $win2++;
                }
            }

            if ($win1 > $win2 + 1) {
                $oneGameResult['win']++;
            } elseif ($win1 + 2 < $win2) {
                $oneGameResult['lose']++;
            } else {
                $oneGameResult['draw']++;
            }

            $bar->advance();
        }

//        for ($y = 1; $y <= 10000; $y++) {
//            $cup = [];
//            $table = [];
//            $result = [];
//            for ($i = 1; $i <= 16; $i++) {
//                $cup[] = [
//                    'team' => 'team' . $i,
//                    'power' => 3600 - $i * 100,
//                ];
//                $table['team' . $i] = [
//                    'power' => 3600 - $i * 100,
//                ];
//                $result['team' . $i] = [
//                    'game' => 0,
//                    'win' => 0,
//                    'draw' => 0,
//                    'lose' => 0,
//                    'points' => 0,
//                    'power' => 3600 - $i * 100,
//                ];
//            }
//            foreach ($table as $teamHome => $itemHome) {
//                foreach ($table as $teamAway => $itemAway) {
//                    if ($teamHome == $teamAway) {
//                        continue;
//                    }
//
//                    $win1 = 0;
//                    $win2 = 0;
//                    $power1 = $itemHome['power'];
//                    $power2 = $itemAway['power'];
//                    for ($i = 0; $i < 30; $i++) {
//                        if (mt_rand(0, $power1 + $power2) < $power1) {
//                            $win1++;
//                        } else {
//                            $win2++;
//                        }
//                    }
//
//                    $result[$teamHome]['game']++;
//                    $result[$teamAway]['game']++;
//
//                    if ($win1 > $win2 + 1) {
//                        $result[$teamHome]['win']++;
//                        $result[$teamHome]['points'] += 3;
//                        $result[$teamAway]['lose']++;
//                    } elseif ($win1 + 2 < $win2) {
//                        $result[$teamAway]['win']++;
//                        $result[$teamAway]['points'] += 3;
//                        $result[$teamHome]['lose']++;
//                    } else {
//                        $result[$teamHome]['draw']++;
//                        $result[$teamHome]['points'] += 1;
//                        $result[$teamAway]['draw']++;
//                        $result[$teamAway]['points'] += 1;
//                    }
//                }
//            }
//            uasort($result, function ($a, $b) {
//                return $b['points'] <=> $a['points'];
//            });
//            $history[array_key_first($result)]++;
//
//            shuffle($cup);
//            $countCup = count($cup);
//            for ($j = 0; $j < $countCup; $j = $j + 2) {
//                $win1 = 0;
//                $win2 = 0;
//                $power1 = $cup[$j]['power'];
//                $power2 = $cup[$j+1]['power'];
//                for ($i = 0; $i < 31; $i++) {
//                    if (mt_rand(0, $power1 + $power2) < $power1) {
//                        $win1++;
//                    } else {
//                        $win2++;
//                    }
//                }
//
//                if ($win1 > $win2) {
//                    unset($cup[$j+1]);
//                } else {
//                    unset($cup[$j]);
//                }
//            }
//
//            shuffle($cup);
//            $countCup = count($cup);
//            for ($j = 0; $j < $countCup; $j = $j + 2) {
//                $win1 = 0;
//                $win2 = 0;
//                $power1 = $cup[$j]['power'];
//                $power2 = $cup[$j+1]['power'];
//                for ($i = 0; $i < 31; $i++) {
//                    if (mt_rand(0, $power1 + $power2) < $power1) {
//                        $win1++;
//                    } else {
//                        $win2++;
//                    }
//                }
//
//                if ($win1 > $win2) {
//                    unset($cup[$j+1]);
//                } else {
//                    unset($cup[$j]);
//                }
//            }
//
//            shuffle($cup);
//            $countCup = count($cup);
//            for ($j = 0; $j < $countCup; $j = $j + 2) {
//                $win1 = 0;
//                $win2 = 0;
//                $power1 = $cup[$j]['power'];
//                $power2 = $cup[$j+1]['power'];
//                for ($i = 0; $i < 31; $i++) {
//                    if (mt_rand(0, $power1 + $power2) < $power1) {
//                        $win1++;
//                    } else {
//                        $win2++;
//                    }
//                }
//
//                if ($win1 > $win2) {
//                    unset($cup[$j+1]);
//                } else {
//                    unset($cup[$j]);
//                }
//            }
//
//            shuffle($cup);
//            $countCup = count($cup);
//            for ($j = 0; $j < $countCup; $j = $j + 2) {
//                $win1 = 0;
//                $win2 = 0;
//                $power1 = $cup[$j]['power'];
//                $power2 = $cup[$j+1]['power'];
//                for ($i = 0; $i < 31; $i++) {
//                    if (mt_rand(0, $power1 + $power2) < $power1) {
//                        $win1++;
//                    } else {
//                        $win2++;
//                    }
//                }
//
//                if ($win1 > $win2) {
//                    unset($cup[$j+1]);
//                } else {
//                    unset($cup[$j]);
//                }
//            }
//            shuffle($cup);
//            $historyCup[$cup[0]['team']]++;
//
//            $bar->advance();
//        }

        $bar->finish();
        print '<pre>';
        print_r($oneGameResult);
        exit;
//        print '<pre>';
//        print_r($result);
//        print '<pre>';
//        print_r($history);
//        print '<pre>';
//        print_r($historyCup);
//        exit;
    }
}
