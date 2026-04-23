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
                                <a href="index.html">
                                    <i className="ph ph-shopping-bag"></i>
                                    E-Commerce
                                </a>
                            </li>
                            <li>
                                <a href="analytics">
                                    <i className="ph ph-globe-hemisphere-west"></i>
                                    Analytics
                                </a>
                            </li>
                            <li>
                                <a href="project-management.html">
                                    <i className="ph ph-kanban"></i>
                                    Project Management
                                </a>
                            </li>
                            <li>
                                <a href="crm.html">
                                    <i className="ph ph-address-book-tabs"></i>
                                    CRM
                                </a>
                            </li>
                            <li>
                                <a href="email-marketing.html">
                                    <i className="ph ph-tray"></i>
                                    Email Marketing
                                </a>
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
                                <a href="">
                                    <i className="ph ph-user-circle"></i>
                                    User
                                </a>
                                <ul>
                                    <li><a href="user-profile.html">Profile</a></li>
                                    <li><a href="user-timeline.html">Timeline</a></li>
                                    <li><a href="user-photos.html">Photos</a></li>
                                    <li><a href="user-connections.html">Connections</a></li>
                                    <li><a href="user-preferences.html">Preferences</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="file-manager.html">
                                    <i className="ph ph-folder"></i>
                                    File Manager
                                </a>
                            </li>
                            <li>
                                <a href="contacts.html">
                                    <i className="ph ph-user-rectangle"></i>
                                    Contacts
                                </a>
                            </li>
                            <li>
                                <a href="mail.html">
                                    <i className="ph ph-at"></i>
                                    Mail
                                </a>
                            </li>
                            <li>
                                <a href="messages.html">
                                    <i className="ph ph-chat-circle-text"></i>
                                    Messages
                                </a>
                            </li>
                            <li>
                                <a href="photos.html">
                                    <i className="ph ph-image"></i>
                                    Photos
                                </a>
                            </li>
                            <li>
                                <a href="todo-lists.html">
                                    <i className="ph ph-check-circle"></i>
                                    Todo Lists
                                </a>
                            </li>
                            <li>
                                <a href="calendar.html">
                                    <i className="ph ph-calendar-blank"></i>
                                    Calendar
                                </a>
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
                                <a href="invoice.html">
                                    <i className="ph ph-invoice"></i>
                                    Invoice
                                </a>
                            </li>
                            <li>
                                <a href="pricing-table.html">
                                    <i className="ph ph-table"></i>
                                    Pricing Tables
                                </a>
                            </li>
                            <li>
                                <a href="search-results.html">
                                    <i className="ph ph-list-magnifying-glass"></i>
                                    Search Results
                                </a>
                            </li>
                            <li>
                                <a href="faq.html">
                                    <i className="ph ph-seal-question"></i>
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="team.html">
                                    <i className="ph ph-users-three"></i>
                                    Teams
                                </a>
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
                                <a href="forgot-password.html">
                                    <i className="ph ph-lock-key-open"></i>
                                    Forgot Password
                                </a>
                            </li>
                            <li>
                                <a href="coming-soon.html">
                                    <i className="ph ph-clock-countdown"></i>
                                    Coming Soon
                                </a>
                            </li>
                            <li>
                                <a href="error.html">
                                    <i className="ph ph-warning"></i>
                                    Error
                                </a>
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
                                <a href="typography.html">
                                    <i className="ph ph-text-t"></i>
                                    Typography
                                </a>
                            </li>
                            <li>
                                <a href="figures.html">
                                    <i className="ph ph-square-half-bottom"></i>
                                    Figures
                                </a>
                            </li>
                            <li>
                                <a href="images.html">
                                    <i className="ph ph-images"></i>
                                    Images
                                </a>
                            </li>
                            <li>
                                <a href="tables.html">
                                    <i className="ph ph-table"></i>
                                    Tables
                                </a>
                            </li>
                            <li>
                                <a href="icons.html">
                                    <i className="ph ph-smiley"></i>
                                    Icons
                                </a>
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
                                <a href="">
                                    <i className="ph ph-text-b"></i>
                                    Bootstrap
                                </a>
                                <ul>
                                    <li><a href="accordion.html">Accordion</a></li>
                                    <li><a href="alerts.html">Alerts</a></li>
                                    <li><a href="badge.html">Badge</a></li>
                                    <li><a href="breadcrumb.html">Breadcrumb</a></li>
                                    <li><a href="buttons.html">Buttons</a></li>
                                    <li><a href="card.html">Card</a></li>
                                    <li><a href="carousel.html">Carousel</a></li>
                                    <li><a href="collapse.html">Collapse</a></li>
                                    <li><a href="dropdown.html">Dropdown</a></li>
                                    <li><a href="listgroup.html">List Group</a></li>
                                    <li><a href="modal.html">Modal</a></li>
                                    <li><a href="nav.html">Nav</a></li>
                                    <li><a href="offcanvas.html">Offcanvas</a></li>
                                    <li><a href="pagination.html">Pagination</a></li>
                                    <li><a href="placeholders.html">Placeholders</a></li>
                                    <li><a href="popovers.html">Popovers</a></li>
                                    <li><a href="progress.html">Progress</a></li>
                                    <li><a href="spinners.html">Spinners</a></li>
                                    <li><a href="toasts.html">Toasts</a></li>
                                    <li><a href="tooltips.html">Tooltips</a></li>
                                </ul>
                            </li>
                            <li className="menu-sub">
                                <a href="file-manager.html">
                                    <i className="ph ph-rows"></i>
                                    Forms
                                </a>
                                <ul>
                                    <li><a href="form-elements.html">Form Elements</a></li>
                                    <li><a href="input-groups.html">Input Groups</a></li>
                                    <li><a href="form-layouts.html">Layouts</a></li>
                                    <li><a href="form-templates.html">Templates</a></li>
                                    <li><a href="form-validation.html">Validation</a></li>
                                    <li><a href="form-components.html">Components</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="charts.html">
                                    <i className="ph ph-chart-pie-slice"></i>
                                    Charts
                                </a>
                            </li>
                            <li>
                                <a href="maps.html">
                                    <i className="ph ph-globe-stand"></i>
                                    Maps
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;