import React from 'react';
import Sidebar from "@/app/partials/_sidebar";
import SidebarToggle from "@/app/partials/_sidebar-toggle";
import NavBar from "@/partials/_nav-bar";

const BadgePage = () => {
    return (
        <>
            <NavBar/>
            <Sidebar/>
            <div id="content" data-simplebar>
                <div className="header">
                    <SidebarToggle/>

                    <h2 className="header-title">Badge</h2>

                    <nav aria-label="breadcrumb" className="ms-6 d-none d-sm-flex">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Miscellaneous</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Components</li>
                        </ol>
                    </nav>

                    <i className="ms-auto"></i>

                    <div id="toc-wrapper"></div>
                </div>
                <div className="content-body mw-1200 mx-auto" data-simplebar>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h3 className="card-title fs-5">Buttons</h3>
                            <p className="card-subtitle mb-6">
                                Badges can be used as part of links or buttons to provide a counter.
                            </p>

                            <button type="button" className="btn btn-theme d-flex align-items-center">
                                Notifications
                                <span className="badge bg-white bg-opacity-25 ms-3">32</span>
                            </button>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-body">
                            <h3 className="card-title fs-5">Positioned</h3>
                            <p className="card-subtitle mb-6">
                                Use utilities to modify a <code>.badge</code> and position it in the corner of a link
                                or button.
                            </p>

                            <button type="button" className="btn btn-theme position-relative">
                                Inbox
                                <span className="position-absolute top-0 end-0 me-n2 mt-n1 badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">unread messages</span>
              </span>
                            </button>

                            <div className="my-6"></div>

                            <p className="mb-6">
                                You can also replace the <code>.badge</code> class with a few more utilities without a
                                count for a more generic indicator.
                            </p>

                            <button type="button" className="btn btn-theme position-relative">
                                Profile
                                <span className="position-absolute top-0 end-0 mt-n1 p-1.5 bg-danger rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
                            </button>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-body">
                            <h3 className="card-title fs-5">Background colors</h3>
                            <p className="card-subtitle mb-6">
                                Set a background-color with contrasting foreground color.
                            </p>

                            <span className="badge bg-primary">Primary</span>
                            <span className="badge bg-success">Success</span>
                            <span className="badge bg-danger">Danger</span>
                            <span className="badge bg-warning">Warning</span>
                            <span className="badge bg-info">Info</span>
                            <span className="badge bg-dark">Dark</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title fs-5">Pill badges</h3>
                            <p className="card-subtitle mb-6">
                                Use the <code>.rounded-pill</code> utility class to make badges more rounded with a
                                larger border-radius.
                            </p>

                            <span className="badge rounded-pill bg-primary">Primary</span>
                            <span className="badge rounded-pill bg-success">Success</span>
                            <span className="badge rounded-pill bg-danger">Danger</span>
                            <span className="badge rounded-pill bg-warning">Warning</span>
                            <span className="badge rounded-pill bg-info">Info</span>
                            <span className="badge rounded-pill bg-dark">Dark</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BadgePage;