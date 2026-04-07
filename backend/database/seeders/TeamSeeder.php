<?php
declare(strict_types=1);

namespace Database\Seeders;

use App\Models\City;
use App\Models\Country;
use App\Models\Stadium;
use App\Models\Team;
use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
{
    private const array TEAMS = [
        'England' => [
            'Birmingham' => [
                'Villa Park' => [
                    'Aston Villa',
                ],
            ],
            'Bournemouth' => [
                'Vitality Stadium' => [
                    'Bournemouth',
                ],
            ],
            'Brentford' => [
                'Gtech Community Stadium' => [
                    'Brentford',
                ],
            ],
            'Brighton and Hove' => [
                'American Express Stadium' => [
                    'Brighton & Hove Albion',
                ],
            ],
            'Leeds' => [
                'Elland Road' => [
                    'Leeds United',
                ],
            ],
            'Liverpool' => [
                'Anfield' => [
                    'Liverpool',
                ],
                'Hill Dickinson Stadium' => [
                    'Everton',
                ],
            ],
            'London' => [
                'Emirates Stadium' => [
                    'Arsenal',
                ],
                'Stamford Bridge' => [
                    'Chelsea',
                ],
                'Craven Cottage' => [
                    'Fulham',
                ],
                'Selhurst Park Stadium' => [
                    'Crystal Palace',
                ],
                'Tottenham Hotspur Stadium' => [
                    'Tottenham Hotspur',
                ],
            ],
            'Manchester' => [
                'Etihad Stadium' => [
                    'Manchester City',
                ],
                'Old Trafford' => [
                    'Manchester United',
                ],
            ],
            'Newcastle upon Tyne' => [
                'St James’ Park' => [
                    'Newcastle United',
                ],
            ],
            'Stoke-on-Trent' => [
                'Britannia Stadium' => [
                    'Stoke City',
                ],
            ],
            'Sunderland' => [
                'Stadium of Light' => [
                    'Sunderland',
                ],
            ],
        ],
        'France' => [
            'Angers' => [
                'Raymond Kopa Stadium' => [
                    'Angers',
                ],
            ],
            'Auxerre' => [
                'Estadio de l\'Abbe-Deschamps' => [
                    'Auxerre',
                ],
            ],
            'Brest' => [
                'Stade Francis Le Ble' => [
                    'Stade Brestois 29',
                ],
            ],
            'Le Havre' => [
                'Stade Oceane' => [
                    'Le Havre',
                ],
            ],
            'Lens' => [
                'Stade Bollaert-Delelis' => [
                    'Lens',
                ],
            ],
            'Lille' => [
                'Stade Pierre Mauroy' => [
                    'Lille',
                ],
            ],
            'Lorient' => [
                'Stade du Moustoir' => [
                    'Lorient',
                ],
            ],
            'Lyon' => [
                'Groupama Stadium' => [
                    'Olympique Lyonnais',
                ],
            ],
            'Marseille' => [
                'Orange Velodrome' => [
                    'Olympique Marseille',
                ],
            ],
            'Metz' => [
                'Stade Saint-Symphorien' => [
                    'Metz',
                ],
            ],
            'Nantes' => [
                'Estadio de la Beaujoire' => [
                    'Nantes',
                ],
            ],
            'Nice' => [
                'Allianz Riviera' => [
                    'Olympique Nice',
                ],
            ],
            'Paris' => [
                'Parc des Princes' => [
                    'Paris Saint-Germain',
                ],
            ],
            'Rennes' => [
                'Roazhon Park' => [
                    'Stade Rennais',
                ],
            ],
            'Strasbourg' => [
                'Stade de la Meinau' => [
                    'Strasbourg Alsace',
                ],
            ],
            'Toulouse' => [
                'Stadium de Toulouse' => [
                    'Toulouse',
                ],
            ],
        ],
        'Spain' => [
            'Barcelona' => [
                'Camp Nou' => [
                    'Barcelona',
                ],
                'RCDE Stadium' => [
                    'Espanyol',
                ],
            ],
            'Bilbao' => [
                'San Mames Stadium' => [
                    'Athletic Club',
                ],
            ],
            'Getafe' => [
                'Coliseum Stadium' => [
                    'Getafe',
                ],
            ],
            'Girona' => [
                'Estadi Montilivi' => [
                    'Girona',
                ],
            ],
            'Madrid' => [
                'Bernabeu' => [
                    'Real Madrid',
                ],
                'Riyadh Air Metropolitano' => [
                    'Atletico Madrid',
                ],
                'Estadio de Vallecas' => [
                    'Rayo Vallecano',
                ],
            ],
            'Majorca' => [
                'Son Moix' => [
                    'Mallorca',
                ],
            ],
            'Pamplona' => [
                'El Sadar Stadium' => [
                    'Osasuna',
                ],
            ],
            'San Sebastian' => [
                'Anoeta Stadium' => [
                    'Real Sociedad',
                ],
            ],
            'Seville' => [
                'Estadio de La Cartuja' => [
                    'Real Betis Balompie',
                ],
            ],
            'Valencia' => [
                'Mestalla Stadium' => [
                    'Valencia',
                ],
            ],
            'Vigo' => [
                'Estadio de Balaidos' => [
                    'Celta de Vigo',
                ],
            ],
            'Villarreal' => [
                'Estadio de la Ceramica' => [
                    'Villarreal',
                ],
            ],
            'Vitoria-Gasteiz' => [
                'Mendizorroza' => [
                    'Deportivo Alaves',
                ],
            ],
        ],
        'Italy' => [
            'Bergamo' => [
                'Stadio di Bergamo' => [
                    'Atalanta',
                ],
            ],
            'Bologna' => [
                'Renato Dall\'Ara Stadium' => [
                    'Bologna 1909',
                ],
            ],
            'Cagliari' => [
                'Unipol Domus' => [
                    'Cagliari Calcio',
                ],
            ],
            'Como' => [
                'Stadio Giuseppe Sinigaglia Djarum' => [
                    'Como 1907',
                ],
            ],
            'Florence' => [
                'Artemio Franchi Stadium' => [
                    'Fiorentina',
                ],
            ],
            'Genoa' => [
                'Luigi Ferraris Stadium' => [
                    'Genoa',
                ],
            ],
            'Milan' => [
                'San Siro Stadium I' => [
                    'Inter Milan',
                ],
                'San Siro Stadium M' => [
                    'Milan',
                ],
            ],
            'Naples' => [
                'Stadio Diego Armando Maradona' => [
                    'Napoli',
                ],
            ],
            'Parma' => [
                'Ennio Tardini Stadium' => [
                    'Parma Calcio 1913',
                ],
            ],
            'Rome' => [
                'Stadio Olimpico R' => [
                    'Roma',
                ],
                'Stadio Olimpico L' => [
                    'Lazio',
                ],
            ],
            'Sassuolo' => [
                'Mapei Stadium' => [
                    'Sassuolo Calcio',
                ],
            ],
            'Turin' => [
                'Allianz Stadium' => [
                    'Juventus',
                ],
                'Olympic Grande Torino Stadium' => [
                    'Torino',
                ],
            ],
            'Udine' => [
                'Bluenergy Stadium' => [
                    'Udinese Calcio',
                ],
            ],
        ],
        'Germany' => [
            'Augsburg' => [
                'WWK Arena' => [
                    'Augsburg',
                ],
            ],
            'Berlin' => [
                'Stadion An der Alten Forsterei' => [
                    '1. FC Union Berlin',
                ],
            ],
            'Bremen' => [
                'Weser Stadium' => [
                    'Werder Bremen',
                ],
            ],
            'Cologne' => [
                'RheinEnergieSTADION' => [
                    'Koln',
                ],
            ],
            'Dortmund' => [
                'Signal Iduna Park' => [
                    'Borussia Dortmund',
                ],
            ],
            'Frankfurt am Main' => [
                'Deutsche Bank Park' => [
                    'Eintracht Frankfurt',
                ],
            ],
            'Freiburg im Breisgau' => [
                'Europa-Park-Stadion' => [
                    'Freiburg',
                ],
            ],
            'Hamburg' => [
                'Volksparkstadion' => [
                    'Hamburger SV',
                ],
            ],
            'Hoffenheim' => [
                'PreZero Arena' => [
                    '1899 Hoffenheim',
                ],
            ],
            'Leipzig' => [
                'Red Bull Arena' => [
                    'RB Leipzig',
                ],
            ],
            'Leverkusen' => [
                'BayArena' => [
                    'Bayer 04 Leverkusen',
                ],
            ],
            'Mainz' => [
                'Mewa Arena' => [
                    '1. FSV Mainz 05',
                ],
            ],
            'Monchengladbach' => [
                'BORUSSIA-PARK' => [
                    'Borussia Monchengladbach',
                ],
            ],
            'Munich' => [
                'Allianz Arena' => [
                    'Bayern Munich',
                ],
            ],
            'Stuttgart' => [
                'MHP Arena' => [
                    'VfB Stuttgart',
                ],
            ],
            'Wolfsburg' => [
                'Volkswagen Arena' => [
                    'VfL Wolfsburg',
                ],
            ],
        ],
    ];

    public function run(): void
    {
        Team::query()->truncate();

        foreach (self::TEAMS as $countryName => $cities) {
            $country = Country::query()->where('name', $countryName)->first();
            foreach ($cities as $cityName => $stadiums) {
                $city = City::query()->where('name', $cityName)->where('country_id', $country->id)->first();
                foreach ($stadiums as $stadiumName => $teams) {
                    $stadium = Stadium::query()->where('name', $stadiumName)->where('city_id', $city->id)->first();
                    foreach ($teams as $team) {
                        $model = new Team();
                        $model->name = $team;
                        $model->stadium()->associate($stadium);
                        $model->save();

                    }
                }
            }
        }
    }
}
