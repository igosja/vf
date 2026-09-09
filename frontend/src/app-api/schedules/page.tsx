import React from 'react';
import Sidebar from "@/partials/_sidebar";
import SidebarToggle from "@/partials/_sidebar-toggle";
import NavBar from "@/partials/_nav-bar";
import apiClient from "@/shared/lib/apiClient";
import Link from "next/dist/client/link";
import {LinkInterface} from "@/app/teams/pagination";

interface ScheduleInterface {
    id: number,
    date: string,
    round: number,
    season_id: number,
    tournament_type: number,
}

interface SchedulesDataResponseInterface {
    data: ScheduleInterface[],
    links: LinkInterface[],
    current_page: number,
}

async function getInitialSchedules() {
    const response = await apiClient.get<SchedulesDataResponseInterface>('schedules');
    return response.data;
}

const SchedulesPage: React.FunctionComponent = async () => {
    const initialData = await getInitialSchedules();

    return (
        <>
            <Sidebar/>

            <div id="content" data-simplebar>
                <div className="content-body content-body-centered">
                    <div className="header">
                        <SidebarToggle/>

                        <h2 className="header-title">Schedules</h2>
                    </div>

                    <div className="d-lg-flex align-items-start gap-4">
                        <div className="flex-grow-1">
                            <div className="card p-6 mb-4">
                                <h2 className="fs-5 text-body-emphasis mb-5">List</h2>

                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>Season</th>
                                            <th>Date</th>
                                            <th>Tournament</th>
                                            <th>Round</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {initialData.data.map((schedule) => (
                                            <tr key={schedule.id}>
                                                <td>
                                                    {schedule.season_id}
                                                </td>
                                                <td>
                                                    <Link href={'/schedules/' + schedule.id}>
                                                        {schedule.date}
                                                    </Link>
                                                </td>
                                                <td>
                                                    {schedule.tournament_type}
                                                </td>
                                                <td>
                                                    {schedule.round}
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

export default SchedulesPage;