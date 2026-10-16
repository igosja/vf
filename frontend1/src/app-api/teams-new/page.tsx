import PaginationNew from "@/app/teams-new/pagination-new";
import apiClient from "@/shared/lib/apiClient";
import {TeamsDataResponseInterface} from "@/app/teams/teams-table-client";
import React from "react";
import Sidebar from "@/partials/_sidebar";
import SidebarToggle from "@/partials/_sidebar-toggle";
import NavBar from "@/partials/_nav-bar";
import Link from "next/dist/client/link";

interface TeamPageProps {
    searchParams: Promise<{ page?: string }>,
}

async function getInitialTeams(page: number) {
    const response = await apiClient.get<TeamsDataResponseInterface>('teams?page=' + page);
    return response.data;
}

// async function getUsers(page: number) {
//     // const res = await fetch(`https://api.example.com/users?page=${page}`);
//
//     const limit = 5;
//     const mockUsers = Array.from({ length: 25 }, (_, i) => ({
//         id: i + 1,
//         name: `Пользователь ${i + 1}`,
//         email: `user${i + 1}@example.com`,
//     }));
//
//     const start = (page - 1) * limit;
//     const paginatedUsers = mockUsers.slice(start, start + limit);
//     const totalPages = Math.ceil(mockUsers.length / limit);
//
//     return { users: paginatedUsers, totalPages };
// }

// export default async function UsersPage({searchParams}: {
//     searchParams: Promise<{ page?: string }>;
// }) {
//     const params = await searchParams;
//     const currentPage = Number(params.page) || 1;
//
//     const { users, totalPages } = await getUsers(currentPage);
//
//     return (
//         <main style={{padding: '20px'}}>
//             <h1>Список пользователей</h1>
//
//             <table border={1} cellPadding={8} cellSpacing={0}>
//                 <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Имя</th>
//                     <th>Email</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {users.map((user) => (
//                     <tr key={user.id}>
//                         <td>{user.id}</td>
//                         <td>{user.name}</td>
//                         <td>{user.email}</td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//
//             <PaginationNew totalPages={totalPages}/>
//         </main>
//     );
// }


const TeamsNewPage: React.FunctionComponent<TeamPageProps> = async ({searchParams}) => {
    const params = await searchParams;
    const currentPage = Number(params.page) || 1;
    const initialData = await getInitialTeams(currentPage);

    return (
        <>
            <Sidebar/>
            <div id="content" data-simplebar>
                <div className="content-body content-body-centered">
                    <div className="header">
                        <SidebarToggle/>

                        <h2 className="header-title ps-xl-2">Teams</h2>

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
                                <h5 className="card-title mb-0 flex-grow-1">Teams</h5>
                            </div>

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
                                    {initialData.data.map((team) => (
                                        <tr key={team.id}>
                                            <td>
                                                <Link href={'/teams/' + team.id}>
                                                    {team.name}
                                                </Link>
                                            </td>
                                            <td>{team.stadium.capacity}</td>
                                            <td>{team.stadium.city.name}</td>
                                            <td>{team.stadium.city.country.name}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <PaginationNew links={initialData.links}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavBar/>
        </>
    );
};

export default TeamsNewPage;