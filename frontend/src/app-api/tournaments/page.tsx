import React from 'react';
import Sidebar from "@/partials/_sidebar";
import SidebarToggle from "@/partials/_sidebar-toggle";
import NavBar from "@/partials/_nav-bar";
import apiClient from "@/shared/lib/apiClient";
import {LinkInterface} from "@/app/teams/pagination";
import Link from "next/dist/client/link";

interface CountryInterface {
    id: number,
    name: string,
}

interface TournamentInterface {
    id: number,
    country_id: number,
    country: CountryInterface,
    season_id: number,
    tournament_type: number,
}

interface TournamentsDataResponseInterface {
    data: TournamentInterface[],
    links: LinkInterface[],
    current_page: number,
}

async function getInitialTournaments() {
    const response = await apiClient.get<TournamentsDataResponseInterface>('tournaments?page=1');
    return response.data;
}

const TournamentsPage:React.FunctionComponent = async () => {
    const initialData = await getInitialTournaments();
    return (
        <>
            <Sidebar/>
            <div id="content" data-simplebar>
                <div className="content-body content-body-centered">
                    <div className="header">
                        <SidebarToggle/>

                        <h2 className="header-title ps-xl-2">Tournaments</h2>

                        <i className="ms-auto"></i>

                        <div className="range-picker range-picker-header d-none d-md-flex">
                            <div className="btn btn-theme">
                                <i className="ph ph-calendar-dots fs-3 me-2 position-relative"></i>
                                <input
                                    type="text"
                                    name="start"
                                    value="07/10/2023"
                                    className="form-control w-24"
                                    required
                                    readOnly
                                />
                                <span className="mx-n6">-</span>
                                <input
                                    type="text"
                                    name="end"
                                    value="07/13/2023"
                                    className="form-control text-end w-24"
                                    required
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className="d-flex gap-1.5 ms-4">
                            <a href="" className="icon ph ph-plus-circle"></a>
                            <a href="" className="icon ph ph-info"></a>
                            <a href="" className="icon ph ph-circles-four"></a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-start mb-5">
                                <h5 className="card-title mb-0 flex-grow-1">Tournaments</h5>
                            </div>

                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Country</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {initialData.data.map((tournament) => (
                                        <tr key={tournament.id}>
                                            <td>
                                                {tournament.country.name}
                                            </td>
                                            <td>
                                                <Link href={'/championships/' + tournament.country_id}>
                                                    Championship
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href={'/cup/' + tournament.country_id}>
                                                    Cup
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
            <NavBar/>
        </>
    );
};

export default TournamentsPage;