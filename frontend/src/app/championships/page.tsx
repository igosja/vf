import React from "react";
import Link from "next/link";

const ChampionshipsPage: React.FunctionComponent = () => {
    return (
        <div className="d-lg-flex align-items-start gap-4">
            <div className="flex-grow-1">
                <div className="card p-6 mb-4">
                    <div className="row">
                        <div className="col-12 text-center">
                            Сезон:
                            <select className="inline-block">
                                {Array.from({length: 10}).map((_, index: number) => (
                                    <option key={index}>{index}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">Украина</h1>
                            <p className="text-center">
                                <Link href="">D1</Link> | <Link href="">D2</Link> | <Link href="">D3-A</Link> | <Link
                                href="">D3-B</Link> | <Link href="">D4-A</Link> | <Link href="">D4-B</Link> | <Link
                                href="">D4-C</Link> | <Link href="">D4-D</Link> | <Link href="">КЛК</Link> | <Link
                                href="">кубок страны</Link> | <Link href="">кубок вызова</Link> | <Link
                                href="">суперкубок</Link>
                            </p>
                            <p>Чемпионаты стран - это основные турниры в Лиге. В каждой из стран, где зарегистрированы
                                16 или более клубов, проводятся национальные чемпионаты. Все команды, которые были
                                созданы на момент старта очередных чемпионатов, принимают в них участие. Национальные
                                чемпионаты проводятся один раз в сезон.</p>
                            <p>В одном национальном чемпионате может быть от двух до четырех дивизионов, в зависимости
                                от числа команд в стране. Победители низших дивизионов получают право в следующем сезоне
                                играть в более высоком дивизионе. Проигравшие вылетают в более низкий дивизион. Часть
                                команд переходят не напрямую, а через переходные игры.</p>
                            <p>В этом дивизионе 16 команд, каждая команда играет с другими по 2 матча: дома и на выезде.
                                Всего каждая команда проводит 30 матчей. За победу начисляется три очка, за ничью -
                                одно, за поражение - ноль.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            Расписание:
                            <select className="inline-block">
                                {Array.from({length: 30}).map((_, index: number) => (
                                    <option key={index}>{index}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>Тур 26 - 2 сентября, 22:00</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 text-end">
                            Тростянец
                        </div>
                        <div className="col-2 text-center">
                            4:0
                        </div>
                        <div className="col-5 text-start">
                            Ворскла Полтава
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 text-end">
                            Динамо Киев
                        </div>
                        <div className="col-2 text-center">
                            2:5
                        </div>
                        <div className="col-5 text-start">
                            Шахтер
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 text-end">
                            ВПК-Агро Магдалиновка
                        </div>
                        <div className="col-2 text-center">
                            0:4
                        </div>
                        <div className="col-5 text-start">
                            Агрон Великий Гай
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 text-end">
                            Ребель Киев
                        </div>
                        <div className="col-2 text-center">
                            4:0
                        </div>
                        <div className="col-5 text-start">
                            Судостроитель Николаев
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 text-end">
                            Диназ Вышгород
                        </div>
                        <div className="col-2 text-center">
                            1:2
                        </div>
                        <div className="col-5 text-start">
                            Волынь Луцк
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 text-end">
                            Днепр-1
                        </div>
                        <div className="col-2 text-center">
                            2:1
                        </div>
                        <div className="col-5 text-start">
                            Покуття Коломыя
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 text-end">
                            Металлист Харьков
                        </div>
                        <div className="col-2 text-center">
                            3:0
                        </div>
                        <div className="col-5 text-start">
                            Металлург
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 text-end">
                            Подолье Хмельницкий
                        </div>
                        <div className="col-2 text-center">
                            0:0
                        </div>
                        <div className="col-5 text-start">
                            МФК Николаев
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr className="text-center">
                                    <th>М</th>
                                    <th>Команда</th>
                                    <th>И</th>
                                    <th>В</th>
                                    <th>Н</th>
                                    <th>П</th>
                                    <th>М+</th>
                                    <th>М-</th>
                                    <th>+/-</th>
                                    <th>О</th>
                                    <th>Vs</th>
                                    <th>РМ</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1{'\u00A0'}(1)</td>
                                    <td>Тростянец</td>
                                    <td>26</td>
                                    <td>20</td>
                                    <td>5</td>
                                    <td>1</td>
                                    <td>44</td>
                                    <td>4</td>
                                    <td>+40</td>
                                    <td>65</td>
                                    <td>3558</td>
                                    <td>680</td>
                                </tr>
                                <tr>
                                    <td>2{'\u00A0'}(2)</td>
                                    <td>Шахтер</td>
                                    <td>26</td>
                                    <td>20</td>
                                    <td>1</td>
                                    <td>5</td>
                                    <td>73</td>
                                    <td>9</td>
                                    <td>+64</td>
                                    <td>61</td>
                                    <td>4246</td>
                                    <td>651</td>
                                </tr>
                                <tr>
                                    <td>3{'\u00A0'}(3)</td>
                                    <td>Агрон{'\u00A0'}Великий{'\u00A0'}Гай</td>
                                    <td>26</td>
                                    <td>17</td>
                                    <td>3</td>
                                    <td>6</td>
                                    <td>53</td>
                                    <td>16</td>
                                    <td>+37</td>
                                    <td>54</td>
                                    <td>3935</td>
                                    <td>655</td>
                                </tr>
                                <tr>
                                    <td>4{'\u00A0'}(4)</td>
                                    <td>МФК{'\u00A0'}Николаев</td>
                                    <td>26</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>5</td>
                                    <td>47</td>
                                    <td>24</td>
                                    <td>+23</td>
                                    <td>51</td>
                                    <td>3038</td>
                                    <td>616</td>
                                </tr>
                                <tr>
                                    <td>5{'\u00A0'}(5)</td>
                                    <td>Динамо{'\u00A0'}Киев</td>
                                    <td>26</td>
                                    <td>15</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>46</td>
                                    <td>28</td>
                                    <td>+18</td>
                                    <td>50</td>
                                    <td>3400</td>
                                    <td>437</td>
                                </tr>
                                <tr>
                                    <td>6{'\u00A0'}(6)</td>
                                    <td>Подолье{'\u00A0'}Хмельницкий</td>
                                    <td>26</td>
                                    <td>14</td>
                                    <td>5</td>
                                    <td>7</td>
                                    <td>37</td>
                                    <td>21</td>
                                    <td>+16</td>
                                    <td>47</td>
                                    <td>2845</td>
                                    <td>660</td>
                                </tr>
                                <tr>
                                    <td>7{'\u00A0'}(7)</td>
                                    <td>Волынь{'\u00A0'}Луцк</td>
                                    <td>26</td>
                                    <td>13</td>
                                    <td>4</td>
                                    <td>9</td>
                                    <td>29</td>
                                    <td>39</td>
                                    <td>-10</td>
                                    <td>43</td>
                                    <td>2929</td>
                                    <td>697</td>
                                </tr>
                                <tr>
                                    <td>8{'\u00A0'}(8)</td>
                                    <td>Покуття{'\u00A0'}Коломыя</td>
                                    <td>26</td>
                                    <td>11</td>
                                    <td>3</td>
                                    <td>12</td>
                                    <td>22</td>
                                    <td>25</td>
                                    <td>-3</td>
                                    <td>36</td>
                                    <td>2794</td>
                                    <td>606</td>
                                </tr>
                                <tr>
                                    <td>9{'\u00A0'}(9)</td>
                                    <td>Металлист{'\u00A0'}Харьков</td>
                                    <td>26</td>
                                    <td>9</td>
                                    <td>7</td>
                                    <td>10</td>
                                    <td>31</td>
                                    <td>34</td>
                                    <td>-3</td>
                                    <td>34</td>
                                    <td>3021</td>
                                    <td>883</td>
                                </tr>
                                <tr>
                                    <td>10{'\u00A0'}(10)</td>
                                    <td>Ребель{'\u00A0'}Киев</td>
                                    <td>26</td>
                                    <td>8</td>
                                    <td>7</td>
                                    <td>11</td>
                                    <td>38</td>
                                    <td>41</td>
                                    <td>-3</td>
                                    <td>31</td>
                                    <td>2971</td>
                                    <td>568</td>
                                </tr>
                                <tr>
                                    <td>11{'\u00A0'}(11)</td>
                                    <td>Днепр-1</td>
                                    <td>26</td>
                                    <td>9</td>
                                    <td>1</td>
                                    <td>16</td>
                                    <td>25</td>
                                    <td>44</td>
                                    <td>-19</td>
                                    <td>28</td>
                                    <td>2726</td>
                                    <td>892</td>
                                </tr>
                                <tr>
                                    <td>12{'\u00A0'}(12)</td>
                                    <td>ВПК-Агро{'\u00A0'}Магдалиновка</td>
                                    <td>26</td>
                                    <td>7</td>
                                    <td>3</td>
                                    <td>16</td>
                                    <td>12</td>
                                    <td>47</td>
                                    <td>-35</td>
                                    <td>24</td>
                                    <td>2479</td>
                                    <td>595</td>
                                </tr>
                                <tr>
                                    <td>13{'\u00A0'}(13)</td>
                                    <td>Металлург</td>
                                    <td>26</td>
                                    <td>6</td>
                                    <td>4</td>
                                    <td>16</td>
                                    <td>29</td>
                                    <td>57</td>
                                    <td>-28</td>
                                    <td>22</td>
                                    <td>2982</td>
                                    <td>501</td>
                                </tr>
                                <tr>
                                    <td>14{'\u00A0'}(14)</td>
                                    <td>Диназ{'\u00A0'}Вышгород</td>
                                    <td>26</td>
                                    <td>6</td>
                                    <td>3</td>
                                    <td>17</td>
                                    <td>36</td>
                                    <td>53</td>
                                    <td>-17</td>
                                    <td>21</td>
                                    <td>2991</td>
                                    <td>359</td>
                                </tr>
                                <tr>
                                    <td>15{'\u00A0'}(15)</td>
                                    <td>Судостроитель{'\u00A0'}Николаев</td>
                                    <td>26</td>
                                    <td>5</td>
                                    <td>2</td>
                                    <td>19</td>
                                    <td>11</td>
                                    <td>49</td>
                                    <td>-38</td>
                                    <td>17</td>
                                    <td>2535</td>
                                    <td>521</td>
                                </tr>
                                <tr>
                                    <td>16{'\u00A0'}(16)</td>
                                    <td>Ворскла{'\u00A0'}Полтава</td>
                                    <td>26</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>21</td>
                                    <td>14</td>
                                    <td>56</td>
                                    <td>-42</td>
                                    <td>9</td>
                                    <td>2776</td>
                                    <td>520</td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>М</th>
                                    <th>Команда</th>
                                    <th>И</th>
                                    <th>В</th>
                                    <th>Н</th>
                                    <th>П</th>
                                    <th>М+</th>
                                    <th>М-</th>
                                    <th>+/-</th>
                                    <th>О</th>
                                    <th>Vs</th>
                                    <th>РМ</th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChampionshipsPage;
