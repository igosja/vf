import React from "react";
import {IdPageProps} from "@/app/idinterface";
import Link from "next/link";

const TeamsIdPage: React.FunctionComponent<IdPageProps> = async ({params}) => {
    const {id} = await params;

    return (
        <div className="d-lg-flex align-items-start gap-4">
            <div className="flex-grow-1">
                <div className="card p-6 mb-4">
                    <div className="row">
                        <h3>Team #{id + 1}</h3>
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6">
                                            Чемпионат
                                        </div>
                                        <div className="col-6">
                                            <Link href={'/championships'}>
                                                Укр
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            Менеджер
                                        </div>
                                        <div className="col-6">
                                            Карл Третий
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            Стадион
                                        </div>
                                        <div className="col-6">
                                            41985
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            База
                                        </div>
                                        <div className="col-6">
                                            7 уровень (30 из 32)
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            Финансы
                                        </div>
                                        <div className="col-6">
                                            $ 108 621 286
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            22 сентября - Чемпионат - Команда 1 - 1:0
                                        </div>
                                        <div className="col-12">
                                            22 сентября - Чемпионат - Команда 2 - 1:2
                                        </div>
                                        <div className="col-12">
                                            22 сентября - Чемпионат - Команда 3 - ?:?
                                        </div>
                                        <div className="col-12">
                                            22 сентября - Чемпионат - Команда 4 - ?:?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            Игроки | Матчи | Сделки | События | Финансы | Спонсоры | Статистика | Трофеи
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>Игрок</th>
                                    <th>Нац</th>
                                    <th>Поз</th>
                                    <th>В</th>
                                    <th>С</th>
                                    <th>У</th>
                                    <th>Ф</th>
                                    <th>РС</th>
                                    <th>Спец</th>
                                    <th>Цена</th>
                                    <th>ИО</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Array.from({length: 22}).map((_, index: number) => (
                                    <tr key={index}>
                                        <td>Имя{'\u00A0'}Фамилия</td>
                                        <td>Укр</td>
                                        <td>ПЦ</td>
                                        <td>25</td>
                                        <td>123</td>
                                        <td>12</td>
                                        <td>119</td>
                                        <td>201</td>
                                        <td>Сп1{'\u00A0'}Сп2{'\u00A0'}Сп3{'\u00A0'}Сп4{'\u00A0'}Сп5</td>
                                        <td>$1.234</td>
                                        <td>+1</td>
                                    </tr>
                                ))}
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>Игрок</th>
                                    <th>Нац</th>
                                    <th>Поз</th>
                                    <th>В</th>
                                    <th>С</th>
                                    <th>У</th>
                                    <th>Ф</th>
                                    <th>РС</th>
                                    <th>Спец</th>
                                    <th>Цена</th>
                                    <th>ИО</th>
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

export default TeamsIdPage;
