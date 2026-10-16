import React from "react";

const SchedulesPage: React.FunctionComponent = () => {
    return (
        <div className="d-lg-flex align-items-start gap-4">
            <div className="flex-grow-1">
                <div className="card p-6 mb-4">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Расписание игровых дней</h1>
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
                        <div className="col-12 table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>Дата</th>
                                    <th>Соревнование</th>
                                    <th>Стадия</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Array.from({length: 30}).map((_, index: number) => (
                                    <tr key={index}>
                                        <td>1 сен 2026, 22:00</td>
                                        <td>Чемпионат</td>
                                        <td>{index + 1} тур</td>
                                    </tr>
                                ))}
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>Дата</th>
                                    <th>Соревнование</th>
                                    <th>Стадия</th>
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

export default SchedulesPage;
