import React from 'react';
import Logo from "./_logo";
import SidebarClose from "./_sidebar-close";
import Link from "next/link";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <SidebarClose/>

            <div className="sidebar-inner">
                <Logo/>

                <ul className="menu">
                    <li>
                        <div>
                            <i className="ph ph-puzzle-piece"></i>
                            <span>Клуб</span>
                        </div>
                        <ul>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Ростер
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Отправка состава
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Товарищеские матчи
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    База
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Тренировка
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Физцентр
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Скауты
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Спортшкола
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Планирование
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Стадион
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>
                            <i className="ph ph-puzzle-piece"></i>
                            <span>Соревнования</span>
                        </div>
                        <ul>
                            <li>
                                <Link href={'/schedules'}>
                                    <i className="ph ph-globe-stand"></i>
                                    Расписание
                                </Link>
                            </li>
                            <li>
                                <Link href={'/tournaments'}>
                                    <i className="ph ph-globe-stand"></i>
                                    Турниры
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>
                            <i className="ph ph-puzzle-piece"></i>
                            <span>Сообщество</span>
                        </div>
                        <ul>
                            <li>
                                <Link href={'/forum'}>
                                    <i className="ph ph-globe-stand"></i>
                                    Форум
                                </Link>
                            </li>
                            <li>
                                <Link href={'/chat'}>
                                    <i className="ph ph-globe-stand"></i>
                                    Чат
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>
                            <i className="ph ph-puzzle-piece"></i>
                            <span>ХЗ</span>
                        </div>
                        <ul>
                            <li>
                                <Link href={'/news'}>
                                    <i className="ph ph-globe-stand"></i>
                                    Новости
                                </Link>
                            </li>
                            <li>
                                <Link href={'/rules'}>
                                    <i className="ph ph-globe-stand"></i>
                                    Правила
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    ВИП клуб
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Опросы
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Смена выбор команды
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Профиль
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Команды
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Игроки
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Трансферы
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Аренда
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Обмены
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Статистика
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Общение
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="ph ph-globe-stand"></i>
                                    Техподдержка
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;