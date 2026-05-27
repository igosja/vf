'use client';

import React from 'react';

interface CountryInterface {
    id: number,
    name: string,
}

interface NameInterface {
    id: number,
    name: string,
}

interface SurnameInterface {
    id: number,
    surname: string,
}

interface PlayerPositonInterface {
    player_id: number,
    position: number,
}

export interface PlayerInterface {
    id: number,
    age: number,
    fatigue: number,
    power: number,
    country: CountryInterface,
    name: NameInterface,
    surname: SurnameInterface,
    player_positions: PlayerPositonInterface[],
}

interface TeamPlayerTableProps {
    players: PlayerInterface[],
}

const TeamPlayersTable:React.FunctionComponent<TeamPlayerTableProps> = ({players}) => {
    return (
        <>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Age</th>
                        <th>Fatigue</th>
                        <th>Power</th>
                        <th>Position</th>
                    </tr>
                    </thead>
                    <tbody>
                    {players.map((player) => (
                        <tr key={player.id}>
                            <td>
                                {player.surname.surname} {player.name.name}
                            </td>
                            <td>{player.country.name}</td>
                            <td>{player.age}</td>
                            <td>{player.fatigue}</td>
                            <td>{player.power}</td>
                            <td>
                                {player.player_positions.map((playerPosition) => (
                                    <>{playerPosition.position}</>
                                ))}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TeamPlayersTable;