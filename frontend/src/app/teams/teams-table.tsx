'use client';

import React from 'react';

interface CountryInterface {
    id: number,
    name: string,
}

interface CityInterface {
    id: number,
    country_id: number,
    name: string,
    country: CountryInterface
}

interface StadiumInterface {
    id: number,
    capacity: number,
    city_id: number,
    name: string,
    city: CityInterface
}

export interface TeamInterface {
    id: number,
    name: string,
    stadium_id: number,
    stadium: StadiumInterface
}

interface TeamTableProps {
    teams: TeamInterface[],
}

const TeamsTable:React.FunctionComponent<TeamTableProps> = ({teams}) => {
    return (
        <>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Team</th>
                        <th>Stadium</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                    </thead>
                    <tbody>
                    {teams.map((team) => (
                        <tr key={team.id}>
                            <td>{team.name}</td>
                            <td>{team.stadium.capacity}</td>
                            <td>{team.stadium.city.name}</td>
                            <td>{team.stadium.city.country.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TeamsTable;