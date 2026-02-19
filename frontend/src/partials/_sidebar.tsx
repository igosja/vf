import React from 'react';
import Logo from "./_logo";
import SidebarClose from "./_sidebar-close";
import Link from "next/dist/client/link";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <SidebarClose/>

            <div className="sidebar-inner">
                <Logo/>

                <ul className="menu">
                    <li>
                        <div>
                            <i className="ph ph-squares-four"></i>
                            <span>Dashboards</span>
                        </div>

                        <ul>
                            <li>
                                <Link href="index">
                                    <i className="ph ph-shopping-bag"></i>
                                    E-Commerce
                                </Link>
                            </li>
                            <li>
                                <Link href="analytics">
                                    <i className="ph ph-globe-hemisphere-west"></i>
                                    Analytics
                                </Link>
                            </li>
                            <li>
                                <Link href="project-management">
                                    <i className="ph ph-kanban"></i>
                                    Project Management
                                </Link>
                            </li>
                            <li>
                                <Link href="crm">
                                    <i className="ph ph-address-book-tabs"></i>
                                    CRM
                                </Link>
                            </li>
                            <li>
                                <Link href="email-marketing">
                                    <i className="ph ph-tray"></i>
                                    Email Marketing
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>
                            <i className="ph ph-app-window"></i>
                            <span>Applications</span>
                        </div>

                        <ul>
                            <li className="menu-sub">
                                <Link href="">
                                    <i className="ph ph-user-circle"></i>
                                    User
                                </Link>
                                <ul>
                                    <li><Link href="user-profile">Profile</Link></li>
                                    <li><Link href="user-timeline">Timeline</Link></li>
                                    <li><Link href="user-photos">Photos</Link></li>
                                    <li><Link href="user-connections">Connections</Link></li>
                                    <li><Link href="user-preferences">Preferences</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="file-manager">
                                    <i className="ph ph-folder"></i>
                                    File Manager
                                </Link>
                            </li>
                            <li>
                                <Link href="contacts">
                                    <i className="ph ph-user-rectangle"></i>
                                    Contacts
                                </Link>
                            </li>
                            <li>
                                <Link href="mail">
                                    <i className="ph ph-at"></i>
                                    Mail
                                </Link>
                            </li>
                            <li>
                                <Link href="messages">
                                    <i className="ph ph-chat-circle-text"></i>
                                    Messages
                                </Link>
                            </li>
                            <li>
                                <Link href="photos">
                                    <i className="ph ph-image"></i>
                                    Photos
                                </Link>
                            </li>
                            <li>
                                <Link href="todo-lists">
                                    <i className="ph ph-check-circle"></i>
                                    Todo Lists
                                </Link>
                            </li>
                            <li>
                                <Link href="calendar">
                                    <i className="ph ph-calendar-blank"></i>
                                    Calendar
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>
                            <i className="ph ph-browser"></i>
                            <span>Pages</span>
                        </div>
                        <ul>
                            <li>
                                <Link href="invoice">
                                    <i className="ph ph-invoice"></i>
                                    Invoice
                                </Link>
                            </li>
                            <li>
                                <Link href="pricing-table">
                                    <i className="ph ph-table"></i>
                                    Pricing Tables
                                </Link>
                            </li>
                            <li>
                                <Link href="search-results">
                                    <i className="ph ph-list-magnifying-glass"></i>
                                    Search Results
                                </Link>
                            </li>
                            <li>
                                <Link href="faq">
                                    <i className="ph ph-seal-question"></i>
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="team">
                                    <i className="ph ph-users-three"></i>
                                    Teams
                                </Link>
                            </li>
                            <li>
                                <Link href="login">
                                    <i className="ph ph-keyhole"></i>
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="register">
                                    <i className="ph ph-user-circle-plus"></i>
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link href="forgot-password">
                                    <i className="ph ph-lock-key-open"></i>
                                    Forgot Password
                                </Link>
                            </li>
                            <li>
                                <Link href="coming-soon">
                                    <i className="ph ph-clock-countdown"></i>
                                    Coming Soon
                                </Link>
                            </li>
                            <li>
                                <Link href="error">
                                    <i className="ph ph-warning"></i>
                                    Error
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>
                            <i className="ph ph-article"></i>
                            <span>Content</span>
                        </div>
                        <ul>
                            <li>
                                <Link href="typography">
                                    <i className="ph ph-text-t"></i>
                                    Typography
                                </Link>
                            </li>
                            <li>
                                <Link href="figures">
                                    <i className="ph ph-square-half-bottom"></i>
                                    Figures
                                </Link>
                            </li>
                            <li>
                                <Link href="images">
                                    <i className="ph ph-images"></i>
                                    Images
                                </Link>
                            </li>
                            <li>
                                <Link href="tables">
                                    <i className="ph ph-table"></i>
                                    Tables
                                </Link>
                            </li>
                            <li>
                                <Link href="icons">
                                    <i className="ph ph-smiley"></i>
                                    Icons
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>
                            <i className="ph ph-puzzle-piece"></i>
                            <span>Components</span>
                        </div>
                        <ul>
                            <li className="menu-sub">
                                <Link href="">
                                    <i className="ph ph-text-b"></i>
                                    Bootstrap
                                </Link>
                                <ul>
                                    <li><Link href="accordion">Accordion</Link></li>
                                    <li><Link href="alerts">Alerts</Link></li>
                                    <li><Link href="badge">Badge</Link></li>
                                    <li><Link href="breadcrumb">Breadcrumb</Link></li>
                                    <li><Link href="buttons">Buttons</Link></li>
                                    <li><Link href="card">Card</Link></li>
                                    <li><Link href="carousel">Carousel</Link></li>
                                    <li><Link href="collapse">Collapse</Link></li>
                                    <li><Link href="dropdown">Dropdown</Link></li>
                                    <li><Link href="listgroup">List Group</Link></li>
                                    <li><Link href="modal">Modal</Link></li>
                                    <li><Link href="nav">Nav</Link></li>
                                    <li><Link href="offcanvas">Offcanvas</Link></li>
                                    <li><Link href="pagination">Pagination</Link></li>
                                    <li><Link href="placeholders">Placeholders</Link></li>
                                    <li><Link href="popovers">Popovers</Link></li>
                                    <li><Link href="progress">Progress</Link></li>
                                    <li><Link href="spinners">Spinners</Link></li>
                                    <li><Link href="toasts">Toasts</Link></li>
                                    <li><Link href="tooltips">Tooltips</Link></li>
                                </ul>
                            </li>
                            <li className="menu-sub">
                                <Link href="file-manager">
                                    <i className="ph ph-rows"></i>
                                    Forms
                                </Link>
                                <ul>
                                    <li><Link href="form-elements">Form Elements</Link></li>
                                    <li><Link href="input-groups">Input Groups</Link></li>
                                    <li><Link href="form-layouts">Layouts</Link></li>
                                    <li><Link href="form-templates">Templates</Link></li>
                                    <li><Link href="form-validation">Validation</Link></li>
                                    <li><Link href="form-components">Components</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="charts">
                                    <i className="ph ph-chart-pie-slice"></i>
                                    Charts
                                </Link>
                            </li>
                            <li>
                                <Link href="maps">
                                    <i className="ph ph-globe-stand"></i>
                                    Maps
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;