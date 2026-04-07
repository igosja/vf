<?php
declare(strict_types=1);

namespace Database\Seeders;

use App\Models\City;
use App\Models\Country;
use App\Models\Stadium;
use Illuminate\Database\Seeder;

class StadiumSeeder extends Seeder
{
    private const array STADIUMS = [
        'England' => [
            'Birmingham' => [
                'Villa Park',
            ],
            'Bournemouth' => [
                'Vitality Stadium',
            ],
            'Brentford' => [
                'Gtech Community Stadium',
            ],
            'Brighton and Hove' => [
                'American Express Stadium',
            ],
            'Leeds' => [
                'Elland Road',
            ],
            'Liverpool' => [
                'Anfield',
                'Hill Dickinson Stadium',
            ],
            'London' => [
                'Emirates Stadium',
                'Stamford Bridge',
                'Craven Cottage',
                'Selhurst Park Stadium',
                'Tottenham Hotspur Stadium',
            ],
            'Manchester' => [
                'Etihad Stadium',
                'Old Trafford',
            ],
            'Newcastle upon Tyne' => [
                'St James’ Park',
            ],
            'Stoke-on-Trent' => [
                'Britannia Stadium',
            ],
            'Sunderland' => [
                'Stadium of Light',
            ],
        ],
        'France' => [
            'Angers' => [
                'Raymond Kopa Stadium',
            ],
            'Auxerre' => [
                'Estadio de l\'Abbe-Deschamps',
            ],
            'Brest' => [
                'Stade Francis Le Ble',
            ],
            'Le Havre' => [
                'Stade Oceane',
            ],
            'Lens' => [
                'Stade Bollaert-Delelis',
            ],
            'Lille' => [
                'Stade Pierre Mauroy',
            ],
            'Lorient' => [
                'Stade du Moustoir',
            ],
            'Lyon' => [
                'Groupama Stadium',
            ],
            'Marseille' => [
                'Orange Velodrome',
            ],
            'Metz' => [
                'Stade Saint-Symphorien',
            ],
            'Nantes' => [
                'Estadio de la Beaujoire',
            ],
            'Nice' => [
                'Allianz Riviera',
            ],
            'Paris' => [
                'Parc des Princes',
            ],
            'Rennes' => [
                'Roazhon Park',
            ],
            'Strasbourg' => [
                'Stade de la Meinau',
            ],
            'Toulouse' => [
                'Stadium de Toulouse',
            ],
        ],
        'Spain' => [
            'Barcelona' => [
                'Camp Nou',
                'RCDE Stadium',
            ],
            'Bilbao' => [
                'San Mames Stadium',
            ],
            'Getafe' => [
                'Coliseum Stadium',
            ],
            'Girona' => [
                'Estadi Montilivi',
            ],
            'Madrid' => [
                'Bernabeu',
                'Riyadh Air Metropolitano',
                'Estadio de Vallecas',
            ],
            'Majorca' => [
                'Son Moix',
            ],
            'Pamplona' => [
                'El Sadar Stadium',
            ],
            'San Sebastian' => [
                'Anoeta Stadium',
            ],
            'Seville' => [
                'Estadio de La Cartuja',
            ],
            'Valencia' => [
                'Mestalla Stadium',
            ],
            'Vigo' => [
                'Estadio de Balaidos',
            ],
            'Villarreal' => [
                'Estadio de la Ceramica',
            ],
            'Vitoria-Gasteiz' => [
                'Mendizorroza',
            ],
        ],
        'Italy' => [
            'Bergamo' => [
                'Stadio di Bergamo',
            ],
            'Bologna' => [
                'Renato Dall\'Ara Stadium',
            ],
            'Cagliari' => [
                'Unipol Domus',
            ],
            'Como' => [
                'Stadio Giuseppe Sinigaglia Djarum',
            ],
            'Florence' => [
                'Artemio Franchi Stadium',
            ],
            'Genoa' => [
                'Luigi Ferraris Stadium',
            ],
            'Milan' => [
                'San Siro Stadium I',
                'San Siro Stadium M',
            ],
            'Naples' => [
                'Stadio Diego Armando Maradona',
            ],
            'Parma' => [
                'Ennio Tardini Stadium',
            ],
            'Rome' => [
                'Stadio Olimpico R',
                'Stadio Olimpico L',
            ],
            'Sassuolo' => [
                'Mapei Stadium',
            ],
            'Turin' => [
                'Allianz Stadium',
                'Olympic Grande Torino Stadium',
            ],
            'Udine' => [
                'Bluenergy Stadium',
            ],
        ],
        'Germany' => [
            'Augsburg' => [
                'WWK Arena',
            ],
            'Berlin' => [
                'Stadion An der Alten Forsterei',
            ],
            'Bremen' => [
                'Weser Stadium',
            ],
            'Cologne' => [
                'RheinEnergieSTADION',
            ],
            'Dortmund' => [
                'Signal Iduna Park',
            ],
            'Frankfurt am Main' => [
                'Deutsche Bank Park',
            ],
            'Freiburg im Breisgau' => [
                'Europa-Park-Stadion',
            ],
            'Hamburg' => [
                'Volksparkstadion',
            ],
            'Hoffenheim' => [
                'PreZero Arena',
            ],
            'Leipzig' => [
                'Red Bull Arena',
            ],
            'Leverkusen' => [
                'BayArena',
            ],
            'Mainz' => [
                'Mewa Arena',
            ],
            'Monchengladbach' => [
                'BORUSSIA-PARK',
            ],
            'Munich' => [
                'Allianz Arena',
            ],
            'Stuttgart' => [
                'MHP Arena',
            ],
            'Wolfsburg' => [
                'Volkswagen Arena',
            ],
        ],
    ];

    public function run(): void
    {
        Stadium::query()->truncate();

        foreach (self::STADIUMS as $countryName => $cities) {
            $country = Country::query()->where('name', $countryName)->first();
            foreach ($cities as $cityName => $stadiums) {
                $city = City::query()->where('name', $cityName)->where('country_id', $country->id)->first();
                foreach ($stadiums as $stadium) {
                    $model = new Stadium();
                    $model->name = $stadium;
                    $model->city()->associate($city);
                    $model->save();
                }
            }
        }
    }
}
