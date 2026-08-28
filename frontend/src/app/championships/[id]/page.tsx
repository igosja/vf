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
    country_id: string,
    team_id: string,
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
                                            <th>Team</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {initialData.data.map((championship) => (
                                            <tr key={championship.id}>
                                                <td>
                                                    <Link href={'/teams/' + championship.team_id}>
                                                        {championship.team.name}
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

export default ChampionshipPage;