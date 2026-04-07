<?php
declare(strict_types=1);

namespace Database\Seeders;

use App\Models\City;
use App\Models\Country;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    private const array CITIES = [
        'England' => [
            'Birmingham',
            'Bournemouth',
            'Brentford',
            'Brighton and Hove',
            'Leeds',
            'Liverpool',
            'London',
            'Manchester',
            'Newcastle upon Tyne',
            'Stoke-on-Trent',
            'Sunderland',
        ],
        'France' => [
            'Angers',
            'Auxerre',
            'Brest',
            'Le Havre',
            'Lens',
            'Lille',
            'Lorient',
            'Lyon',
            'Marseille',
            'Metz',
            'Nantes',
            'Nice',
            'Paris',
            'Rennes',
            'Strasbourg',
            'Toulouse',
        ],
        'Spain' => [
            'Barcelona',
            'Bilbao',
            'Getafe',
            'Girona',
            'Madrid',
            'Majorca',
            'Pamplona',
            'San Sebastian',
            'Seville',
            'Valencia',
            'Vigo',
            'Villarreal',
            'Vitoria-Gasteiz',
        ],
        'Italy' => [
            'Bergamo',
            'Bologna',
            'Cagliari',
            'Como',
            'Florence',
            'Genoa',
            'Milan',
            'Naples',
            'Parma',
            'Rome',
            'Sassuolo',
            'Turin',
            'Udine',
        ],
        'Germany' => [
            'Augsburg',
            'Berlin',
            'Bremen',
            'Cologne',
            'Dortmund',
            'Frankfurt am Main',
            'Freiburg im Breisgau',
            'Hamburg',
            'Hoffenheim',
            'Leipzig',
            'Leverkusen',
            'Mainz',
            'Monchengladbach',
            'Munich',
            'Stuttgart',
            'Wolfsburg',
        ],
        'Argentina' => [],
        'Brazil' => [],
        'Mexico' => [],
        'Portugal' => [],
        'Colombia' => [],
    ];

    public function run(): void
    {
        City::query()->truncate();

        foreach (self::CITIES as $countryName => $cities) {
            $country = Country::query()->where('name', $countryName)->first();
            foreach ($cities as $city) {
                $model = new City();
                $model->name = $city;
                $model->country()->associate($country);
                $model->save();
            }
        }
    }
}
