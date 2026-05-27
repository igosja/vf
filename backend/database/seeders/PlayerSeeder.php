<?php
declare(strict_types=1);

namespace Database\Seeders;

use App\Models\City;
use App\Models\Country;
use App\Models\CountryName;
use App\Models\CountrySurname;
use App\Models\Player;
use App\Models\Stadium;
use App\Models\Team;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;

class PlayerSeeder extends Seeder
{
    public function run(): void
    {
        Player::query()->truncate();

        Team::query()->each(function (Team $team) {
            $countryId = $team->stadium->city->country_id;
            for ($i = 0; $i < 22; $i++) {
                $player = new Player();
                $player->age = $this->getAge($i);
                $player->power = $this->getPower($i);
                $player->fatigue = random_int(15, 25);
                $player->team_id = $team->id;
                $player->country_id = $countryId;
                $player->name_id = $this->getNameId($countryId);
                $player->surname_id = $this->getSurnameId($countryId);
                $player->save();
            }
        });
    }

    private function getAge(int $index): int
    {
        $age = $index + 18;
        if ($age > 35) {
            $age = $age - 18;
        }

        return $age;
    }

    private function getPower(int $index): int
    {
        return $this->getAge($index) * 2;
    }

    private function getNameId(int $countryId): int
    {
        /**
         * @var Collection<CountryName> $countryNames
         */
        $countryNames = CountryName::query()->where('country_id', $countryId)->get();
        $totalFrequency = $countryNames->sum('frequency');
        $targetFrequency = random_int(0, $totalFrequency);
        $frequency = 1;
        foreach ($countryNames as $countryName) {
            if ($frequency >= $targetFrequency) {
                return $countryName->name_id;
            }
            $frequency = $frequency + $countryName->frequency;
        }
        return 1;
    }

    private function getSurnameId(int $countryId): int
    {
        /**
         * @var Collection<CountrySurname> $countrySurnames
         */
        $countrySurnames = CountrySurname::query()->where('country_id', $countryId)->get();
        $totalFrequency = $countrySurnames->sum('frequency');
        $targetFrequency = random_int(0, $totalFrequency);
        $frequency = 1;
        foreach ($countrySurnames as $countrySurname) {
            if ($frequency >= $targetFrequency) {
                return $countrySurname->surname_id;
            }
            $frequency = $frequency + $countrySurname->frequency;
        }
        return 1;
    }
}
