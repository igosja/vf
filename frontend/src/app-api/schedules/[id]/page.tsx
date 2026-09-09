import React from 'react';
import Sidebar from "@/partials/_sidebar";
import SidebarToggle from "@/partials/_sidebar-toggle";
import NavBar from "@/partials/_nav-bar";
import apiClient from "@/shared/lib/apiClient";
import {TeamInterface} from "@/app/teams/teams-table";
import Link from "next/dist/client/link";
import {LinkInterface} from "@/app/teams/pagination";

interface SchedulePageProps {
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

interface FootballMatchDataResponseInterface {
    data: FootballMatchInterface[],
    links: LinkInterface[],
    current_page: number,
}

async function getInitialFootballMatches(id: number) {
    const response = await apiClient.get<FootballMatchDataResponseInterface>('football-matches/?schedule_id=' + id);
    return response.data;
}

const SchedulePage: React.FunctionComponent<SchedulePageProps> = async ({params}) => {
    const {id} = await params;
    const initialData = await getInitialFootballMatches(id);

    return (
        <>
            <Sidebar/>

            <div id="content" data-simplebar>
                <div className="content-body content-body-centered">
                    <div className="header">
                        <SidebarToggle/>

                        <h2 className="header-title">Schedule profile</h2>
                    </div>

                    <div className="d-lg-flex align-items-start gap-4">
                        <div className="flex-grow-1">
                            <div className="card p-6 mb-4">
                                <h2 className="fs-5 text-body-emphasis mb-5">Matches</h2>

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
                                        {initialData.data.map((footballMatch) => (
                                            <tr key={footballMatch.id}>
                                                <td>
                                                    <Link href={'/teams/' + footballMatch.home_team_id}>
                                                        {footballMatch.home_team.name}
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link href={'/football-matches/' + footballMatch.id}>
                                                        {footballMatch.home_score}:{footballMatch.away_score}
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link href={'/teams/' + footballMatch.away_team_id}>
                                                        {footballMatch.away_team.name}
                                                    </Link>
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

export default SchedulePage;