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
                    'Brighton',
                ],
            ],
            'Leeds' => [
                'Elland Road' => [
                    'Leeds',
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
                    'Tottenham',
                ],
            ],
            'Manchester' => [
                'Etihad Stadium' => [
                    'Man City',
                ],
                'Old Trafford' => [
                    'Man United',
                ],
            ],
            'Newcastle upon Tyne' => [
                'St James’ Park' => [
                    'Newcastle',
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
                    'Brest',
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
                    'LOSC',
                ],
            ],
            'Lorient' => [
                'Stade du Moustoir' => [
                    'Lorient',
                ],
            ],
            'Lyon' => [
                'Groupama Stadium' => [
                    'Lyon',
                ],
            ],
            'Marseille' => [
                'Orange Velodrome' => [
                    'Marseille',
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
                    'Nice',
                ],
            ],
            'Paris' => [
                'Parc des Princes' => [
                    'PSG',
                ],
            ],
            'Rennes' => [
                'Roazhon Park' => [
                    'Rennes',
                ],
            ],
            'Strasbourg' => [
                'Stade de la Meinau' => [
                    'Strasbourg',
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
                    'Athletic',
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
                    'Real Betis',
                ],
            ],
            'Valencia' => [
                'Mestalla Stadium' => [
                    'Valencia',
                ],
            ],
            'Vigo' => [
                'Estadio de Balaidos' => [
                    'Celta Vigo',
                ],
            ],
            'Villarreal' => [
                'Estadio de la Ceramica' => [
                    'Villarreal',
                ],
            ],
            'Vitoria-Gasteiz' => [
                'Mendizorroza' => [
                    'Alaves',
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
                    'Bologna',
                ],
            ],
            'Cagliari' => [
                'Unipol Domus' => [
                    'Cagliari',
                ],
            ],
            'Como' => [
                'Stadio Giuseppe Sinigaglia Djarum' => [
                    'Como',
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
                    'Inter',
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
                    'Parma',
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
                    'Sassuolo',
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
                    'Udinese',
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
                    'Union',
                ],
            ],
            'Bremen' => [
                'Weser Stadium' => [
                    'Werder',
                ],
            ],
            'Cologne' => [
                'RheinEnergieSTADION' => [
                    'Koln',
                ],
            ],
            'Dortmund' => [
                'Signal Iduna Park' => [
                    'Dortmund',
                ],
            ],
            'Frankfurt am Main' => [
                'Deutsche Bank Park' => [
                    'Eintracht',
                ],
            ],
            'Freiburg im Breisgau' => [
                'Europa-Park-Stadion' => [
                    'Freiburg',
                ],
            ],
            'Hamburg' => [
                'Volksparkstadion' => [
                    'Hamburg',
                ],
            ],
            'Hoffenheim' => [
                'PreZero Arena' => [
                    'Hoffenheim',
                ],
            ],
            'Leipzig' => [
                'Red Bull Arena' => [
                    'Leipzig',
                ],
            ],
            'Leverkusen' => [
                'BayArena' => [
                    'Leverkusen',
                ],
            ],
            'Mainz' => [
                'Mewa Arena' => [
                    'Mainz',
                ],
            ],
            'Monchengladbach' => [
                'BORUSSIA-PARK' => [
                    'Monchengladbach',
                ],
            ],
            'Munich' => [
                'Allianz Arena' => [
                    'Bayern',
                ],
            ],
            'Stuttgart' => [
                'MHP Arena' => [
                    'Stuttgart',
                ],
            ],
            'Wolfsburg' => [
                'Volkswagen Arena' => [
                    'Wolfsburg',
                ],
            ],
        ],
        'Argentina' => [
            'Avellaneda' => [
                'Estadio Libertadores de America' => [
                    'Independiente',
                ],
                'Estadio Presidente Peron' => [
                    'Racing Club',
                ],
            ],
            'Buenos Aires' => [
                'Estadio Jose Amalfitani' => [
                    'Velez Sarsfield',
                ],
                'Estadio Alberto J Armando' => [
                    'Boca',
                ],
                'Estadio Monumental' => [
                    'River Plate',
                ],
                'Estadio Diego Armando Maradona' => [
                    'Argentinos Juniors',
                ],
                'Tomas Adolfo Duco Stadium' => [
                    'Huracan',
                ],
            ],
            'Cordoba' => [
                'Estadio Mario Alberto Kempes' => [
                    'Talleres',
                ],
                'Estadio Julio Cesar Villagra' => [
                    'Belgrano',
                ],
            ],
            'Florencio Varela' => [
                'Norberto Tomaghello Stadium' => [
                    'Defensa y Justicia',
                ],
            ],
            'La Plata' => [
                'Jorge Luis Hirschi Stadium' => [
                    'Estudiantes',
                ],
            ],
            'Lanus' => [
                'Ciudad de Lanus' => [
                    'Lanus',
                ],
            ],
            'Rivadavia' => [
                'Juan Bautista Gargantini Stadium' => [
                    'Independiente Rivadavia',
                ],
            ],
            'Rosario' => [
                'Estadio Gigante de Arroyito' => [
                    'Central',
                ],
            ],
            'Santa Fe' => [
                'Estadio 15 de Abril' => [
                    'Union',
                ],
            ],
            'Victoria' => [
                'Estadio Jose Dellagiovanna' => [
                    'Tigre',
                ],
            ],
        ],
        'Brazil' => [
            'Belo Horizonte' => [
                'Arena MRV' => [
                    'Atletico Mineiro',
                ],
            ],
            'Braganca Paulista' => [
                'Estadio Municipal Cicero De Souza Marques' => [
                    'Bragantino',
                ],
            ],
            'Curitiba' => [
                'Arena da Baixada' => [
                    'Athletico',
                ],
                'Estadio Major Antonio Couto Pereira' => [
                    'Coritiba',
                ],
            ],
            'Porto Alegre' => [
                'Arena do Gremio' => [
                    'Gremio',
                ],
                'Estadio Beira-Rio' => [
                    'Internacional',
                ],
            ],
            'Ribeirao Preto' => [
                'Stadium Santa Cruz' => [
                    'Botafogo',
                ],
            ],
            'Rio de Janeiro' => [
                'Maracana' => [
                    'Fluminense',
                ],
                'MaracanaF' => [
                    'Flamengo',
                ],
                'Estadio Sao Januario' => [
                    'Vasco da Gama',
                ],
            ],
            'Salvador' => [
                'Fonte Nova Arena' => [
                    'Bahia',
                ],
                'Estadio Manoel Barradas' => [
                    'Vitoria',
                ],
            ],
            'Santos' => [
                'Urbano Caldeira Stadium' => [
                    'Santos',
                ],
            ],
            'Sao Paulo' => [
                'Allianz Parque' => [
                    'Palmeiras',
                ],
                'MorumBIS' => [
                    'Sao Paulo',
                ],
            ],
        ],
        'Mexico' => [
            'Aguascalientes' => [
                'Estadio Victoria Aguascalientes' => [
                    'Necaxa',
                ],
            ],
            'Ciudad Juarez' => [
                'Estadio Olímpico Benito Juarez' => [
                    'Juarez',
                ],
            ],
            'Guadalajara' => [
                'Akron Stadium' => [
                    'Guadalajara',
                ],
                'Jalisco Stadium' => [
                    'Atlas',
                ],
            ],
            'Leon' => [
                'Leon Stadium' => [
                    'Leon',
                ],
            ],
            'Mexico City' => [
                'Estadio Cuauhtemoc' => [
                    'Cruz Azul',
                ],
                'Estadio Olimpico Universitario' => [
                    'Pumas',
                ],
                'Banorte Stadium' => [
                    'America',
                ],
            ],
            'Monterrey' => [
                'University Stadium' => [
                    'Tigres',
                ],
                'Estadio BBVA' => [
                    'Monterrey',
                ],
            ],
            'Pachuca' => [
                'Estadio Hidalgo' => [
                    'Pachuca',
                ],
            ],
            'Puebla' => [
                'Estadio Cuauhtemoc' => [
                    'Puebla',
                ],
            ],
            'San Luis Potosi' => [
                'Estadio Alfonso Lastras' => [
                    'San Luis',
                ],
            ],
            'Santiago de Queretaro' => [
                'Corregidora Stadium' => [
                    'Queretaro',
                ],
            ],
            'Tijuana' => [
                'Estadio Caliente' => [
                    'Tijuana',
                ],
            ],
            'Toluca' => [
                'Antonio Mohamed' => [
                    'Toluca',
                ],
            ],
        ],
        'Portugal' => [
            'Alverca do Ribatejo' => [
                'Alverca' => [
                    'Alverca',
                ],
            ],
            'Amadora' => [
                'Estrela Amadora' => [
                    'Estrela Amadora',
                ],
            ],
            'Arouca' => [
                'Arouca' => [
                    'Arouca',
                ],
            ],
            'Barcelos' => [
                'Gil Vicente' => [
                    'Gil Vicente',
                ],
            ],
            'Braga' => [
                'Braga' => [
                    'Braga',
                ],
            ],
            'Estoril' => [
                'Estoril Praia' => [
                    'Estoril Praia',
                ],
            ],
            'Funchal' => [
                'Nacional' => [
                    'Nacional',
                ],
            ],
            'Guimaraes' => [
                'Vitoria' => [
                    'Vitoria',
                ],
            ],
            'Lisbon' => [
                'Benfica' => [
                    'Benfica',
                ],
                'Sporting' => [
                    'Sporting',
                ],
                'Casa Pia' => [
                    'Casa Pia',
                ],
            ],
            'Moreira de Conegos' => [
                'Moreirense' => [
                    'Moreirense',
                ],
            ],
            'Ponta Delgada' => [
                'Santa Clara' => [
                    'Santa Clara',
                ],
            ],
            'Porto' => [
                'Porto' => [
                    'Porto',
                ],
            ],
            'Vila do Conde' => [
                'Rio Ave' => [
                    'Rio Ave',
                ],
            ],
            'Vila Nova de Famalicao' => [
                'Famalicao' => [
                    'Famalicao',
                ],
            ],
        ],
        'Colombia' => [
            'Barranquilla' => [
                'Junior' => [
                    'Junior',
                ],
            ],
            'Bogota' => [
                'Internacional' => [
                    'Internacional',
                ],
                'Millonarios' => [
                    'Millonarios',
                ],
                'Santa Fe' => [
                    'Santa Fe',
                ],
                'Fortaleza' => [
                    'Fortaleza',
                ],
            ],
            'Bucaramanga' => [
                'Atletico Bucaramanga' => [
                    'Atletico Bucaramanga',
                ],
            ],
            'Cali' => [
                'America de Cali' => [
                    'America de Cali',
                ],
                'Deportivo Cali' => [
                    'Deportivo Cali',
                ],
            ],
            'Cucuta' => [
                'Cucuta Deportivo' => [
                    'Cucuta Deportivo',
                ],
            ],
            'Manizales' => [
                'Once Caldas' => [
                    'Once Caldas',
                ],
            ],
            'Medellín' => [
                'Atletico Nacional' => [
                    'Atletico Nacional',
                ],
                'Independiente' => [
                    'Independiente',
                ],
            ],
            'Pasto' => [
                'Deportivo Pasto' => [
                    'Deportivo Pasto',
                ],
            ],
            'Rionegro' => [
                'Rionegro Aguilas' => [
                    'Rionegro Aguilas',
                ],
            ],
            'Tolima' => [
                'Deportes Tolima' => [
                    'Deportes Tolima',
                ],
            ],
            'Villavicencio' => [
                'Llaneros' => [
                    'Llaneros',
                ],
            ],
        ],
        'Netherlands' => [
            'Alkmaar' => [
                'AZ' => [
                    'AZ',
                ],
            ],
            'Amsterdam' => [
                'Ajax' => [
                    'Ajax',
                ],
            ],
            'Deventer' => [
                'Go Ahead Eagles' => [
                    'Go Ahead Eagles',
                ],
            ],
            'Eindhoven' => [
                'PSV' => [
                    'PSV',
                ],
            ],
            'Enschede' => [
                'Twente' => [
                    'Twente',
                ],
            ],
            'Groningen' => [
                'Groningen' => [
                    'Groningen',
                ],
            ],
            'Heerenveen' => [
                'Heerenveen' => [
                    'Heerenveen',
                ],
            ],
            'Nijmegen' => [
                'NEC' => [
                    'NEC',
                ],
            ],
            'Rotterdam' => [
                'Feyenoord' => [
                    'Feyenoord',
                ],
                'Sparta' => [
                    'Sparta',
                ],
                'Excelsior' => [
                    'Excelsior',
                ],
            ],
            'Sittard' => [
                'Fortuna' => [
                    'Fortuna',
                ],
            ],
            'Utrecht' => [
                'Utrecht' => [
                    'Utrecht',
                ],
            ],
            'Velsen-Zuid' => [
                'Telstar' => [
                    'Telstar',
                ],
            ],
            'Volendam' => [
                'Volendam' => [
                    'Volendam',
                ],
            ],
            'Zwolle' => [
                'PEC' => [
                    'PEC',
                ],
            ],
        ],
        'Uruguay' => [
            'Las Piedras' => [
                'Juventud',
            ],
            'Maldonado' => [
                'Maldonado',
            ],
            'Melo' => [
                'Cerro Largo',
            ],
            'Montevideo' => [
                'Racing',
                'Penarol',
                'Central Espanol',
                'Nacional',
                'Torque',
                'Wanderers',
                'Albion',
                'Liverpool',
                'Defensor Sporting',
                'Danubio',
                'Boston River',
                'Cerro',
                'Progreso',
            ],
        ],
        'Belgium' => [
            'Anderlecht' => [
                'Anderlecht',
            ],
            'Antwerp' => [
                'Antwerp',
            ],
            'Bruges' => [
                'Brugge',
                'Cercle Brugge',
            ],
            'Brussels' => [
                'Union Saint-Gilloise',
            ],
            'Charleroi' => [
                'Charleroi',
            ],
            'Denderleeuw' => [
                'Dender',
            ],
            'Genk' => [
                'Genk',
            ],
            'Ghent' => [
                'Gent',
            ],
            'La Louviere' => [
                'RAAL La Louviere',
            ],
            'Leuven' => [
                'Oud-Heverlee Leuven',
            ],
            'Liege' => [
                'Standard',
            ],
            'Mechelen' => [
                'Mechelen',
            ],
            'Sint-Truiden' => [
                'STVV',
            ],
            'Waregem' => [
                'Zulte Waregem',
            ],
            'Westerlo' => [
                'Westerlo',
            ],
        ],
        'Turkey' => [
            'Alanya' => [
                'Alanyaspor',
            ],
            'Ankara' => [
                'Genclerbirligi',
            ],
            'Antalya' => [
                'Antalyaspor',
            ],
            'Basaksehir' => [
                'Istanbul Basaksehir',
            ],
            'Besiktas' => [
                'Besiktas',
            ],
            'Gaziantep' => [
                'Gaziantep',
            ],
            'Istanbul' => [
                'Galatasaray',
            ],
            'Izmir' => [
                'Goztepe',
            ],
            'Kadikoy' => [
                'Fenerbahce',
            ],
            'Kasimpasa' => [
                'Kasimpasa',
            ],
            'Kayseri' => [
                'Kayserispor',
            ],
            'Kocaeli' => [
                'Kocaelispor',
            ],
            'Konya' => [
                'Konyaspor',
            ],
            'Rize' => [
                'Rizespor',
            ],
            'Samsun' => [
                'Samsunspor',
            ],
            'Trabzon' => [
                'Trabzonspor',
            ],
        ],
        'Ecuador' => [
            'Ambato' => [
                'Tecnico Universitario',
                'Macara',
                'Mushuc Runa',
            ],
            'Atuntaqui' => [
                'Leones',
            ],
            'Cuenca' => [
                'Deportivo Cuenca',
            ],
            'Guayaquil' => [
                'Barcelona',
                'Guayaquil City',
                'Emelec',
            ],
            'Loja' => [
                'Libertad Loja',
            ],
            'Machala' => [
                'Orense',
            ],
            'Manta' => [
                'Delfín',
                'Manta',
            ],
            'Quito' => [
                'Independiente del Valle',
                'Universidad Catolica',
                'LDU Quito',
                'Aucas',
            ],
        ],
        'Paraguay' => [
            'Asuncion' => [
                'Cerro Porteno',
                'Nacional',
                'Trinidense',
                'Recoleta',
                'Libertad',
                'Olimpia',
                'Sportivo Ameliano',
                'Rubio Nu',
            ],
            'Capiata' => [
                'Deportivo Capiata',
            ],
            'Doctor Juan Leon Mallorquin' => [
                'Sportivo Luqueno',
            ],
            'Luque' => [
                'General Caballero',
            ],
            'Pedro Juan Caballero' => [
                '2 de Mayo',
            ],
            'Pinoza' => [
                'Guarani',
            ],
            'San Lorenzo' => [
                'Sportivo San Lorenzo',
            ],
            'Villa Elisa' => [
                'Atletico Tembetary',
            ],
            'Villa Hayes' => [
                '12 de Junio Villa Hayes',
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
                    if (is_integer($stadiumName)) {
                        $stadium = Stadium::query()->where('name', $teams)->where('city_id', $city->id)->first();
                    } else {
                        $stadium = Stadium::query()->where('name', $stadiumName)->where('city_id', $city->id)->first();
                    }
                    if (is_array($teams)) {
                        foreach ($teams as $team) {
                            $model = new Team();
                            $model->name = $team;
                            $model->stadium()->associate($stadium);
                            $model->save();

                        }
                    } else {
                        $model = new Team();
                        $model->name = $teams;
                        $model->stadium()->associate($stadium);
                        $model->save();
                    }
                }
            }
        }
    }
}
