import React from 'react';
import Sidebar from "@/partials/_sidebar";
import SidebarToggle from "@/partials/_sidebar-toggle";
import NavBar from "@/partials/_nav-bar";
import Link from "next/dist/client/link";

interface TeamPageProps {
    params: Promise<{ id: number }>
}

const PlayerPage: React.FunctionComponent<TeamPageProps> = async ({params}) => {
    const {id} = await params;

    return (
        <>
            <Sidebar/>

            <div id="content" data-simplebar>
                <div className="content-body content-body-centered">
                    <div className="header">
                        <SidebarToggle/>

                        <h2 className="header-title">Team Profile</h2>

                        <nav aria-label="breadcrumb" className="ms-6 d-none d-sm-flex">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Application Views</a></li>
                                <li className="breadcrumb-item"><a href="#">John Dou</a></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Profile
                                </li>
                            </ol>
                        </nav>

                        <div className="d-flex gap-2 ms-auto">
                            <a href="" className="icon ph ph-arrow-clockwise"></a>
                            <a href="" className="icon ph ph-gear"></a>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <nav className="nav nav-pills nav-scroll fw-medium p-2">
                            <Link className="nav-link active" href={'players/' + id}>
                                Profile
                            </Link>
                            <Link className="nav-link" href={'players/' + id}>
                                Link 02
                            </Link>
                            <Link className="nav-link" href={'players/' + id}>
                                Link 03
                            </Link>
                            <Link className="nav-link" href={'players/' + id}>
                                Link 04
                            </Link>
                            <Link className="nav-link" href={'players/' + id}>
                                Link 05
                            </Link>
                            <Link className="nav-link" href={'players/' + id}>
                                Link 06
                            </Link>
                            <Link className="nav-link" href={'players/' + id}>
                                Link 07
                            </Link>
                            <Link className="nav-link" href={'players/' + id}>
                                Link 08
                            </Link>
                            <Link className="nav-link" href={'players/' + id}>
                                Link 09
                            </Link>
                            <Link className="nav-link" href={'players/' + id}>
                                Link 10
                            </Link>
                            <Link className="nav-link" href={'players/' + id}>
                                Link 11
                            </Link>
                            <Link className="nav-link" href={'players/' + id}>
                                Link 12
                            </Link>
                        </nav>
                    </div>

                    <div className="d-lg-flex align-items-start gap-4">
                        <div className="card w-lg-72 flex-shrink-0 mb-2 mt-32 mt-lg-0">
                            <div className="mb-n1 text-center mt-n24 mt-lg-0 p-2">
                                <img
                                    className="w-48 w-lg-100 rounded-2"
                                    src="/img/Real_Madrid_CF.svg.png"
                                    alt={"John Dou photo"}
                                />
                            </div>

                            <div className="p-5">
                                <div className="d-flex align-items-start mb-5">
                                    <div className="flex-grow-1">
                                        <h2 className="fs-5 text-body-emphasis mb-1">John Dou #{id}</h2>
                                    </div>
                                </div>

                                <ul className="list-unstyled vstack gap-4 m-0">
                                    <li className="d-flex align-items-center" title="Team">
                                        <i className="ph ph-chair fs-4 me-3"></i>
                                        <Link href="/teams/1">Real Madrid</Link>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <i className="ph ph-map-pin-line fs-4 me-3" title="Country"></i>
                                        England
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex-grow-1">
                            <div className="card p-6 mb-4">
                                <h2 className="fs-5 text-body-emphasis mb-5">Games</h2>

                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>Home</th>
                                            <th>Guest</th>
                                            <th>Score</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <Link href="/teams/1">
                                                    Real Madrid
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="/teams/1">
                                                    Man City
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="/games/1">
                                                    1:0
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

export default PlayerPage;