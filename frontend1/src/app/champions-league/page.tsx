import React from "react";

const ChampionsLeaguePage: React.FunctionComponent = () => {
    return (
        <div className="d-lg-flex align-items-start gap-4">
            <div className="flex-grow-1">
                <div className="card p-6 mb-4">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Лига чемпионов</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            Сезон:
                            <select className="inline-block">
                                {Array.from({length: 10}).map((_, index: number) => (
                                    <option key={index}>{index + 1}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {Array.from({length: 5}).map((_, index: number) => (
                        <div key={index}>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h3>Стадия {index + 1}</h3>
                                </div>
                            </div>
                            {Array.from({length: Math.pow(2, index)}).map((_, indexGame: number) => (
                                <div className="row" key={indexGame}>
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
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChampionsLeaguePage;
