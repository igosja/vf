import React from 'react';
import Sidebar from "@/partials/_sidebar";
import SidebarToggle from "@/partials/_sidebar-toggle";
import NavBar from "@/partials/_nav-bar";
import Link from "next/dist/client/link";

interface TeamPageProps {
    params: Promise<{ id: number }>
}

const GamePage: React.FunctionComponent<TeamPageProps> = async ({params}) => {
    const {id} = await params;

    return (
        <>
            <Sidebar/>

            <div id="content" data-simplebar>
                <div className="content-body content-body-centered">
                    <div className="header">
                        <SidebarToggle/>

                        <h2 className="header-title">Game</h2>

                        <nav aria-label="breadcrumb" className="ms-6 d-none d-sm-flex">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Application Views</a></li>
                                <li className="breadcrumb-item"><a href="#">Game</a></li>
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

                    <div className="d-lg-flex align-items-start gap-4">
                        <div className="flex-grow-1">
                            <div className="card p-6 mb-4">
                                <div className="row">
                                    <div className="col-5 text-end">
                                        <Link href={'/teams/1'}>
                                            Real Madrid
                                        </Link>
                                    </div>
                                    <div className="col-2 text-center">
                                        1:0
                                    </div>
                                    <div className="col-5">
                                        <Link href={'/teams/2'}>
                                            Manchester City
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-lg-flex align-items-start gap-4">
                        <div className="flex-grow-1">
                            <div className="card p-6 mb-4">


                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                        <tr>
                                            <td>4-4-2</td>
                                            <td>Scheme</td>
                                            <td>4-5-1</td>
                                        </tr>
                                        <tr>
                                            <td>4-4-2</td>
                                            <td>Scheme</td>
                                            <td>4-5-1</td>
                                        </tr>
                                        <tr>
                                            <td>4-4-2</td>
                                            <td>Scheme</td>
                                            <td>4-5-1</td>
                                        </tr>
                                        <tr>
                                            <td>4-4-2</td>
                                            <td>Scheme</td>
                                            <td>4-5-1</td>
                                        </tr>
                                        <tr>
                                            <td>4-4-2</td>
                                            <td>Scheme</td>
                                            <td>4-5-1</td>
                                        </tr>
                                        <tr>
                                            <td>4-4-2</td>
                                            <td>Scheme</td>
                                            <td>4-5-1</td>
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

export default GamePage;