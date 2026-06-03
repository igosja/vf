import React from 'react';
import Sidebar from "@/partials/_sidebar";
import SidebarToggle from "@/partials/_sidebar-toggle";
import NavBar from "@/partials/_nav-bar";
import TeamsTableClient, {TeamsDataResponseInterface} from "@/app/teams/teams-table-client";
import apiClient from "@/shared/lib/apiClient";
import TeamsPlaceholderTable from "@/app/teams/teams-placeholder-table";
import TeamsTable from "@/app/teams/teams-table";
import Pagination from "@/app/teams/pagination";
import Link from "next/dist/client/link";

async function getInitialTeams() {
    const response = await apiClient.get<TeamsDataResponseInterface>('teams?page=1');
    return response.data;
}

const TournamentsPage:React.FunctionComponent = async () => {
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
                                        <tr>
                                            <td>Champions League</td>
                                        </tr>
                                        <tr>
                                            <td>England</td>
                                            <td>Championship</td>
                                            <td>Cup</td>
                                        </tr>
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