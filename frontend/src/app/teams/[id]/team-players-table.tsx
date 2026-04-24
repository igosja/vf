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

export interface PlayerInterface {
    id: number,
    country: CountryInterface
    name: NameInterface
    surname: SurnameInterface
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
                    </tr>
                    </thead>
                    <tbody>
                    {players.map((player) => (
                        <tr key={player.id}>
                            <td>
                                {player.surname.surname} {player.name.name}
                            </td>
                            <td>{player.country.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TeamPlayersTable;