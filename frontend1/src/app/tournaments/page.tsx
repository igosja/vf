import React from "react";
import Link from "next/link";

const TournamentsPage: React.FunctionComponent = () => {
    return (
        <div className="d-lg-flex align-items-start gap-4">
            <div className="flex-grow-1">
                <div className="card p-6 mb-4">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Турниры</h1>
                        </div>
                    </div>
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
                            <p className="text-center">
                                <Link href={'/champions-league'}>
                                    Лига чемпионов
                                </Link>
                                |
                                <Link href={'/pre-season'}>
                                    Кубок межсезонья
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th colSpan={3}>Страна</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Array.from({length: 10}).map((_, index: number) => (
                                    <tr key={index}>
                                        <td>Страна {index + 1}</td>
                                        <td>
                                            <Link href={'/championships'}>
                                                Чемпионат
                                            </Link>
                                        </td>
                                        <td>
                                            <Link href={'/cups'}>
                                                Кубок
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th colSpan={3}>Страна</th>
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

export default TournamentsPage;
