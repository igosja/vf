import React from 'react';
import Sidebar from "@/partials/_sidebar";
import SidebarToggle from "@/partials/_sidebar-toggle";
import NavBar from "@/partials/_nav-bar";
import apiClient from "@/shared/lib/apiClient";
import {TeamInterface} from "@/app/teams/teams-table";
import Link from "next/dist/client/link";
import {LinkInterface} from "@/app/teams/pagination";

interface FootballMatchPageProps {
    params: Promise<{ id: number }>
}

interface FootballMatchInterface {
    id: number,
    away_score: number,
    away_team_id: number,
    home_score: number,
    home_team_id: number,
    status: number,
    away_team: TeamInterface,
    home_team: TeamInterface,
}

async function getInitialFootballMatch(id: number) {
    const response = await apiClient.get<FootballMatchInterface>('football-matches/' + id);
    return response.data;
}

const FootballMatchPage: React.FunctionComponent<FootballMatchPageProps> = async ({params}) => {
    const {id} = await params;
    const initialData = await getInitialFootballMatch(id);

    return (
        <>
            <Sidebar/>

            <div id="content" data-simplebar>
                <div className="content-body content-body-centered">
                    <div className="header">
                        <SidebarToggle/>

                        <h2 className="header-title">Football match Profile</h2>
                    </div>

                    <div className="d-lg-flex align-items-start gap-4">
                        <div className="flex-grow-1">
                            <div className="card p-6 mb-4">
                                <h2 className="fs-5 text-body-emphasis mb-5">Match</h2>

                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>Home team</th>
                                            <th>Score</th>
                                            <th>Away team</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Link href={'/teams/' + initialData.home_team_id}>
                                                        {initialData.home_team.name}
                                                    </Link>
                                                </td>
                                                <td>
                                                    {initialData.home_score}:{initialData.away_score}
                                                </td>
                                                <td>
                                                    <Link href={'/teams/' + initialData.away_team_id}>
                                                        {initialData.away_team.name}
                                                    </Link>
                                                </td>
                                            </tr>
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

export default FootballMatchPage;