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
        'Argentina' => [
            'Avellaneda' => [
                'Estadio Libertadores de America',
                'Estadio Presidente Peron',
            ],
            'Buenos Aires' => [
                'Estadio Jose Amalfitani',
                'Estadio Alberto J Armando',
                'Estadio Monumental',
                'Estadio Diego Armando Maradona',
                'Tomas Adolfo Duco Stadium',
            ],
            'Cordoba' => [
                'Estadio Mario Alberto Kempes',
                'Estadio Julio Cesar Villagra',
            ],
            'Florencio Varela' => [
                'Norberto Tomaghello Stadium',
            ],
            'La Plata' => [
                'Jorge Luis Hirschi Stadium',
            ],
            'Lanus' => [
                'Ciudad de Lanus',
            ],
            'Rivadavia' => [
                'Juan Bautista Gargantini Stadium',
            ],
            'Rosario' => [
                'Estadio Gigante de Arroyito',
            ],
            'Santa Fe' => [
                'Estadio 15 de Abril',
            ],
            'Victoria' => [
                'Estadio Jose Dellagiovanna',
            ],
        ],
        'Brazil' => [
            'Belo Horizonte' => [
                'Arena MRV',
            ],
            'Braganca Paulista' => [
                'Estadio Municipal Cicero De Souza Marques',
            ],
            'Curitiba' => [
                'Arena da Baixada',
                'Estadio Major Antonio Couto Pereira',
            ],
            'Porto Alegre' => [
                'Arena do Gremio',
                'Estadio Beira-Rio',
            ],
            'Ribeirao Preto' => [
                'Stadium Santa Cruz',
            ],
            'Rio de Janeiro' => [
                'Maracana',
                'MaracanaF',
                'Estadio Sao Januario',
            ],
            'Salvador' => [
                'Fonte Nova Arena',
                'Estadio Manoel Barradas',
            ],
            'Santos' => [
                'Urbano Caldeira Stadium',
            ],
            'Sao Paulo' => [
                'Allianz Parque',
                'MorumBIS',
            ],
        ],
        'Mexico' => [
            'Aguascalientes' => [
                'Estadio Victoria Aguascalientes',
            ],
            'Ciudad Juarez' => [
                'Estadio Olímpico Benito Juarez',
            ],
            'Guadalajara' => [
                'Akron Stadium',
                'Jalisco Stadium',
            ],
            'Leon' => [
                'Leon Stadium',
            ],
            'Mexico City' => [
                'Estadio Cuauhtemoc',
                'Estadio Olimpico Universitario',
                'Banorte Stadium',
            ],
            'Monterrey' => [
                'University Stadium',
                'Estadio BBVA',
            ],
            'Pachuca' => [
                'Estadio Hidalgo',
            ],
            'Puebla' => [
                'Estadio Cuauhtemoc',
            ],
            'San Luis Potosi' => [
                'Estadio Alfonso Lastras',
            ],
            'Santiago de Queretaro' => [
                'Corregidora Stadium',
            ],
            'Tijuana' => [
                'Estadio Caliente',
            ],
            'Toluca' => [
                'Antonio Mohamed',
            ],
        ],
        'Portugal' => [
            'Alverca do Ribatejo' => [
                'Alverca',
            ],
            'Amadora' => [
                'Estrela Amadora',
            ],
            'Arouca' => [
                'Arouca',
            ],
            'Barcelos' => [
                'Gil Vicente',
            ],
            'Braga' => [
                'Braga',
            ],
            'Estoril' => [
                'Estoril Praia',
            ],
            'Funchal' => [
                'Nacional',
            ],
            'Guimaraes' => [
                'Vitoria',
            ],
            'Lisbon' => [
                'Benfica',
                'Sporting',
                'Casa Pia',
            ],
            'Moreira de Conegos' => [
                'Moreirense',
            ],
            'Ponta Delgada' => [
                'Santa Clara',
            ],
            'Porto' => [
                'Porto',
            ],
            'Vila do Conde' => [
                'Rio Ave',
            ],
            'Vila Nova de Famalicao' => [
                'Famalicao',
            ],
        ],
        'Colombia' => [
            'Barranquilla' => [
                'Junior',
            ],
            'Bogota' => [
                'Internacional',
                'Millonarios',
                'Santa Fe',
                'Fortaleza',
            ],
            'Bucaramanga' => [
                'Atletico Bucaramanga',
            ],
            'Cali' => [
                'America de Cali',
                'Deportivo Cali',
            ],
            'Cucuta' => [
                'Cucuta Deportivo',
            ],
            'Manizales' => [
                'Once Caldas',
            ],
            'Medellín' => [
                'Atletico Nacional',
                'Independiente',
            ],
            'Pasto' => [
                'Deportivo Pasto',
            ],
            'Rionegro' => [
                'Rionegro Aguilas',
            ],
            'Tolima' => [
                'Deportes Tolima',
            ],
            'Villavicencio' => [
                'Llaneros',
            ],
        ],
        'Netherlands' => [
            'Alkmaar' => [
                'AZ',
            ],
            'Amsterdam' => [
                'Ajax',
            ],
            'Deventer' => [
                'Go Ahead Eagles',
            ],
            'Eindhoven' => [
                'PSV',
            ],
            'Enschede' => [
                'Twente',
            ],
            'Groningen' => [
                'Groningen',
            ],
            'Heerenveen' => [
                'Heerenveen',
            ],
            'Nijmegen' => [
                'NEC',
            ],
            'Rotterdam' => [
                'Feyenoord',
                'Sparta',
                'Excelsior',
            ],
            'Sittard' => [
                'Fortuna',
            ],
            'Utrecht' => [
                'Utrecht',
            ],
            'Velsen-Zuid' => [
                'Telstar',
            ],
            'Volendam' => [
                'Volendam',
            ],
            'Zwolle' => [
                'PEC',
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
