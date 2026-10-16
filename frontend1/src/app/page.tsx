import React from "react";
import Link from "next/link";

const HomePage: React.FunctionComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="card p-5 mt-5">
                        <div className="d-flex align-items-start mb-5">
                            <div className="flex-grow-1">
                                <h2 className="fs-5 text-body-emphasis mb-1">Альянс (Липовая Долина, Украина)</h2>
                            </div>
                        </div>
                        <ul className="list-unstyled vstack gap-4 m-0">
                            <li className="d-flex align-items-center">
                                <i className="ph ph-rss fs-4 me-3"></i>
                                Кубок межсезонья: D30 - 28 место
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="ph ph-suitcase-simple fs-4 me-3"></i>
                                D4-B, 14 место 1/256 финала 1/64 финала
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="ph ph-house fs-4 me-3"></i>
                                Менеджер: Карл Третий
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="ph ph-map-pin-line fs-4 me-3"></i>
                                Ник: Земляк
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="ph ph-student fs-4 me-3"></i>
                                Заместитель: нет
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="ph ph-student fs-4 me-3"></i>
                                Стадион: "Юбилейный", 10тыс.
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="ph ph-student fs-4 me-3"></i>
                                База: 7 уровень (30 из 32 слотов)
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="ph ph-student fs-4 me-3"></i>
                                Финансы: 121 275 200 = 121 275к = 121м
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="card p-5 mt-5 table-responsive">
                        <table className="table">
                            <tbody>
                            <tr>
                                <td>22 сентября, 23:00</td>
                                <td>Кубок межсезонья</td>
                                <td>Д</td>
                                <td>Штадлау (Австрия)</td>
                                <td>2:0</td>
                            </tr>
                            <tr>
                                <td>вчера, 22:00</td>
                                <td>Кубок межсезонья</td>
                                <td>Д</td>
                                <td>Металлург (Узбекистан)</td>
                                <td>2:0</td>
                            </tr>
                            <tr>
                                <td>сегодня, 22:00</td>
                                <td>Кубок межсезонья</td>
                                <td>Д</td>
                                <td>Ля Роше (Франция)</td>
                                <td>Ред</td>
                            </tr>
                            <tr>
                                <td>завтра, 22:00</td>
                                <td>Кубок межсезонья</td>
                                <td></td>
                                <td>соперник неизвестен</td>
                                <td>Ред</td>
                            </tr>
                            <tr>
                                <td>27 сентября, 22:00</td>
                                <td>Товарищеский матч</td>
                                <td>Д</td>
                                <td>Пауэр Рейнджер (Американское Самоа)</td>
                                <td>Ред</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card p-5 mt-5">
                        <nav className="nav nav-pills nav-scroll">
                            <Link className="nav-link active" href={'/'}>Игроки</Link>
                            <Link className="nav-link " href={'/'}>Матчи</Link>
                            <Link className="nav-link" href={'/'}>Сделки</Link>
                            <Link className="nav-link" href={'/'}>События</Link>
                            <Link className="nav-link" href={'/'}>Финансы</Link>
                            <Link className="nav-link" href={'/'}>Спонсоры</Link>
                            <Link className="nav-link" href={'/'}>Статистика</Link>
                            <Link className="nav-link" href={'/'}>Трофеи</Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card p-5 mt-5 table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>Игрок</th>
                                <th>Нац</th>
                                <th>Поз</th>
                                <th>В</th>
                                <th>С</th>
                                <th>У</th>
                                <th>Ф</th>
                                <th>РС</th>
                                <th>Спецвозможности</th>
                                <th>О</th>
                                <th>И</th>
                                <th>Г</th>
                                <th>П</th>
                                <th>Ж</th>
                                <th>Кр</th>
                                <th>Цена</th>
                                <th>Ст</th>
                                <th>и/о</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Косован Куликов</td>
                                <td></td>
                                <td>CD</td>
                                <td>16</td>
                                <td>38</td>
                                <td>3</td>
                                <td></td>
                                <td>35</td>
                                <td>К</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>6 543к</td>
                                <td>Стиль не изучен</td>
                                <td>-1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Анджей Завертайло</td>
                                <td></td>
                                <td>RM/RD</td>
                                <td>17</td>
                                <td>49</td>
                                <td>2</td>
                                <td></td>
                                <td>40</td>
                                <td>К3 См</td>
                                <td>5</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>10 333к</td>
                                <td>Катеначчо</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Степан Чаус</td>
                                <td></td>
                                <td>CM/CD</td>
                                <td>18</td>
                                <td>63</td>
                                <td>12</td>
                                <td></td>
                                <td>46</td>
                                <td>К3 См2</td>
                                <td>5</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>16 742к</td>
                                <td>Катеначчо</td>
                                <td>+3</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Мариан Горбан</td>
                                <td></td>
                                <td>LM/LD</td>
                                <td>19</td>
                                <td>67</td>
                                <td>2</td>
                                <td></td>
                                <td>77</td>
                                <td>К3 См2 Тр2 Ат</td>
                                <td>4.75</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>13 310к</td>
                                <td>Британский</td>
                                <td>+1</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Жуниор Немчанинов</td>
                                <td></td>
                                <td>CF</td>
                                <td>20</td>
                                <td>73</td>
                                <td>2</td>
                                <td></td>
                                <td>76</td>
                                <td>К3 См2 Тр2 Ат2</td>
                                <td>5.05</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>12 070к</td>
                                <td>Катеначчо</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Борис Христусь</td>
                                <td></td>
                                <td>CD</td>
                                <td>21</td>
                                <td>86</td>
                                <td>4</td>
                                <td></td>
                                <td>78</td>
                                <td>К4 См2 Тр2 Ат2</td>
                                <td>6.3</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>26 576к</td>
                                <td>Катеначчо</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Вячеслав Атрощенко</td>
                                <td></td>
                                <td>CM/CD</td>
                                <td>22</td>
                                <td>86</td>
                                <td>0</td>
                                <td></td>
                                <td>71</td>
                                <td>К4 См2 Тр2 Ат2</td>
                                <td>4.85</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>19 004к</td>
                                <td>Катеначчо</td>
                                <td>-1</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Михаил Ярмаш</td>
                                <td></td>
                                <td>RM/RD</td>
                                <td>23</td>
                                <td>102</td>
                                <td>9</td>
                                <td></td>
                                <td>109</td>
                                <td>К4 См2 Тр2 Ат2</td>
                                <td>4.9</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>35 177к</td>
                                <td>Бей-беги</td>
                                <td>+3</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Павло Шепутько</td>
                                <td></td>
                                <td>GK</td>
                                <td>24</td>
                                <td>95</td>
                                <td>1</td>
                                <td></td>
                                <td>100</td>
                                <td>К3 Л3 Тр2 Ат2</td>
                                <td>4.3</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>17 637к</td>
                                <td>Катеначчо</td>
                                <td>+1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Констянтин Цвиренко</td>
                                <td></td>
                                <td>LM/LD</td>
                                <td>25</td>
                                <td>97</td>
                                <td>0</td>
                                <td></td>
                                <td>113</td>
                                <td>К3 См2 Тр2 Ат2</td>
                                <td>4.95</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>16 315к</td>
                                <td>Британский</td>
                                <td>-1</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Миксим Рудченко</td>
                                <td></td>
                                <td>CM/CD</td>
                                <td>26</td>
                                <td>103</td>
                                <td>2</td>
                                <td></td>
                                <td>125</td>
                                <td>К3 См3 Тр2 Ат2</td>
                                <td>5.85</td>
                                <td>2</td>
                                <td>1</td>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>19 379к</td>
                                <td>Катеначчо</td>
                                <td>+1</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Богдан Казаченко</td>
                                <td></td>
                                <td>CF</td>
                                <td>26</td>
                                <td>84</td>
                                <td>10</td>
                                <td></td>
                                <td>71</td>
                                <td>К Км Л</td>
                                <td>6.03</td>
                                <td>3</td>
                                <td>1</td>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>4 546к</td>
                                <td>Стиль не изучен</td>
                                <td>+3</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Вадим Мышенко</td>
                                <td></td>
                                <td>CD</td>
                                <td>27</td>
                                <td>99</td>
                                <td>0</td>
                                <td></td>
                                <td>93</td>
                                <td>К3 См2 Тр4 Ат</td>
                                <td>5.75</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>12 429к</td>
                                <td>Британский</td>
                                <td>-1</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Семен Запотюк</td>
                                <td></td>
                                <td>LM/LD</td>
                                <td>28</td>
                                <td>164</td>
                                <td>14</td>
                                <td></td>
                                <td>133</td>
                                <td>И3 Км От К</td>
                                <td>6.7</td>
                                <td>3</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>47 702к</td>
                                <td>Бразильский</td>
                                <td>+3</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Даниил Самсонов</td>
                                <td></td>
                                <td>RD/RM</td>
                                <td>30</td>
                                <td>89</td>
                                <td>0</td>
                                <td></td>
                                <td>84</td>
                                <td>Л Км</td>
                                <td>6.35</td>
                                <td>2</td>
                                <td>0</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>5 171к</td>
                                <td>Стиль не изучен</td>
                                <td>-1</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>Тимофей Цен</td>
                                <td></td>
                                <td>CM/CD</td>
                                <td>30</td>
                                <td>109</td>
                                <td>14</td>
                                <td></td>
                                <td>71</td>
                                <td>И</td>
                                <td>5.95</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>12 061к</td>
                                <td>Стиль не изучен</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>Роберт Олянишен</td>
                                <td></td>
                                <td>GK</td>
                                <td>31</td>
                                <td>107</td>
                                <td>8</td>
                                <td></td>
                                <td>104</td>
                                <td>Л</td>
                                <td>6.55</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>10 524к</td>
                                <td>Стиль не изучен</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>Алекс Кулинин</td>
                                <td></td>
                                <td>CM/CD</td>
                                <td>31</td>
                                <td>72</td>
                                <td>4</td>
                                <td></td>
                                <td>73</td>
                                <td>К</td>
                                <td>5.75</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>1 512к</td>
                                <td>Стиль не изучен</td>
                                <td>+1</td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td>Амет Бухал</td>
                                <td></td>
                                <td>RM/RD</td>
                                <td>32</td>
                                <td>96</td>
                                <td>3</td>
                                <td></td>
                                <td>99</td>
                                <td>Л</td>
                                <td>6.9</td>
                                <td>1</td>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>8 810к</td>
                                <td>Стиль не изучен</td>
                                <td>+1</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>24.5</th>
                                <th>1679</th>
                                <th></th>
                                <th></th>
                                <th>1598</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>295.8м</th>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
