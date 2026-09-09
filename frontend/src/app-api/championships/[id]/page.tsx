import React from 'react';
import Sidebar from "@/partials/_sidebar";
import SidebarToggle from "@/partials/_sidebar-toggle";
import NavBar from "@/partials/_nav-bar";
import apiClient from "@/shared/lib/apiClient";
import {TeamInterface} from "@/app/teams/teams-table";
import Link from "next/dist/client/link";
import {LinkInterface} from "@/app/teams/pagination";

interface ChampionshipPageProps {
    params: Promise<{ id: number }>
}

interface ChampionshipInterface {
    id: number,
    country_id: number,
    draws: number,
    goals_against: number,
    goals_difference: number,
    goals_for: number,
    losses: number,
    played: number,
    points: number,
    position: number,
    team_id: number,
    wins: number,
    team: TeamInterface,
}

interface ChampionshipDataResponseInterface {
    data: ChampionshipInterface[],
    links: LinkInterface[],
    current_page: number,
}

async function getInitialChampionship(id: number) {
    const response = await apiClient.get<ChampionshipDataResponseInterface>('championships/' + id);
    return response.data;
}

const ChampionshipPage: React.FunctionComponent<ChampionshipPageProps> = async ({params}) => {
    const {id} = await params;
    const initialData = await getInitialChampionship(id);

    return (
        <>
            <Sidebar/>

            <div id="content" data-simplebar>
                <div className="content-body content-body-centered">
                    <div className="header">
                        <SidebarToggle/>

                        <h2 className="header-title">Championship Profile</h2>
                    </div>

                    <div className="d-lg-flex align-items-start gap-4">
                        <div className="flex-grow-1">
                            <div className="card p-6 mb-4">
                                <h2 className="fs-5 text-body-emphasis mb-5">Standings</h2>

                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th title="Position">Pos</th>
                                            <th>Team</th>
                                            <th title="Played">MP</th>
                                            <th title="Wins">W</th>
                                            <th title="Draws">D</th>
                                            <th title="Losses">L</th>
                                            <th title="Goals For">GF</th>
                                            <th title="Goals Against">GA</th>
                                            <th title="Goal Difference">GD</th>
                                            <th title="Points">Pts</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {initialData.data.map((championship) => (
                                            <tr key={championship.id}>
                                                <td>
                                                    {championship.position}
                                                </td>
                                                <td>
                                                    <Link href={'/teams/' + championship.team_id}>
                                                        {championship.team.name}
                                                    </Link>
                                                </td>
                                                <td>
                                                    {championship.played}
                                                </td>
                                                <td>
                                                    {championship.wins}
                                                </td>
                                                <td>
                                                    {championship.draws}
                                                </td>
                                                <td>
                                                    {championship.losses}
                                                </td>
                                                <td>
                                                    {championship.goals_for}
                                                </td>
                                                <td>
                                                    {championship.goals_against}
                                                </td>
                                                <td>
                                                    {championship.goals_difference}
                                                </td>
                                                <td>
                                                    {championship.points}
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavBar/>
        </>
    );
};

export default ChampionshipPage;