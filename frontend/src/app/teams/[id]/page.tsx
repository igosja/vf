import React from 'react';
import Sidebar from "@/partials/_sidebar";
import SidebarToggle from "@/partials/_sidebar-toggle";
import NavBar from "@/partials/_nav-bar";
import api from "@/api/api";
import {TeamInterface} from "@/app/teams/teams-table";

interface TeamPageProps {
    params: Promise<{ id: number }>
}

async function getInitialTeam(id: number) {
    const response = await api.get<TeamInterface>('teams/' + id);
    return response.data;
}

const TeamPage: React.FunctionComponent<TeamPageProps> = async ({params}) => {
    const {id} = await params;
    const initialData = await getInitialTeam(id);

    return (
        <>
            <Sidebar/>
            <div id="content" data-simplebar>
                <div className="content-body content-body-centered">
                    <div className="header">
                        <SidebarToggle/>

                        <h2 className="header-title ps-xl-2">Team</h2>

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
                                <h5 className="card-title mb-0 flex-grow-1">Team</h5>
                            </div>

                            <div className="row">
                                <div className="col text-end">
                                    Name
                                </div>
                                <div className="col">
                                    {initialData.name}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-end">
                                    Stadium
                                </div>
                                <div className="col">
                                    {initialData.stadium.capacity}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-end">
                                    City
                                </div>
                                <div className="col">
                                    {initialData.stadium.city.name}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-end">
                                    Country
                                </div>
                                <div className="col">
                                    {initialData.stadium.city.country.name}
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

export default TeamPage;