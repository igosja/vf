import React from 'react';

const NavBar = () => {
    return (
        <>
            <aside className="nav-bar">
                <ul className="navbar-menu">
                    <li>
                        <button
                            type="button"
                            className="p-2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            // style="--squircle-size: 2.75rem"
                        >
                            <img className="avatar" src="./img/contacts/2.jpg" alt=""/>
                        </button>

                        <div className="dropdown-menu">
                            <a href="" className="dropdown-item">
                                <i className="ph ph-user-circle"></i>
                                Profile
                            </a>
                            <a href="" className="dropdown-item">
                                <i className="ph ph-currency-circle-dollar"></i>
                                Billing
                            </a>
                            <a href="" className="dropdown-item">
                                <i className="ph ph-gear"></i>
                                Settings
                            </a>
                            <a href="" className="dropdown-item">
                                <i className="ph ph-sign-out"></i>
                                Logout
                            </a>
                        </div>
                    </li>

                    <li className="d-none d-sm-block">
                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img className="h-5 rounded-circle" src="./img/flags/england.svg" alt=""/>
                        </button>

                        <div className="dropdown-menu">
                            <a href="" className="dropdown-item">
                                <img className="h-5 rounded-circle" src="./img/flags/japan.svg" alt=""/>
                                Japanese
                            </a>
                            <a href="" className="dropdown-item">
                                <img className="h-5 rounded-circle" src="./img/flags/germany.svg" alt=""/>
                                German
                            </a>
                            <a href="" className="dropdown-item">
                                <img className="h-5 rounded-circle" src="./img/flags/china.svg" alt=""/>
                                Chinese
                            </a>
                            <a href="" className="dropdown-item">
                                <img className="h-5 rounded-circle" src="./img/flags/france.svg" alt=""/>
                                French
                            </a>
                        </div>
                    </li>

                    <li>
                        <button
                            type="button"
                            className="ph ph-magnifying-glass"
                            data-bs-toggle="dropdown"
                            data-bs-display="static"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                        >
                            <span className="visually-hidden">Search</span>
                        </button>

                        <div className="dropdown-menu navbar-dropdown-menu px-6">
                            <div className="d-flex align-items-center h-11 flex-shrink-0">
                                <div className="text-body-emphasis fw-medium">Search</div>

                                <div className="d-flex ms-auto gap-1">
                                    <button type="button" className="icon ph ph-broom">
                                        <span className="visually-hidden">Clear recent searches</span>
                                    </button>
                                    <button type="button" className="icon ph ph-gear ms-auto me-n1">
                                        <span className="visually-hidden">Settings</span>
                                    </button>
                                </div>
                            </div>

                            <div className="search-field mb-5 mx-n1">
                                <i className="ph ph-magnifying-glass"></i>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter a keyword"
                                    aria-label="Search"
                                    autoFocus
                                />
                            </div>

                            <div className="fs-7 text-body-secondary mb-1">Recent Searches</div>

                            <div className="flex-grow-1 mx-n6" data-simplebar>
                                <div id="recent-searches"></div>
                            </div>
                        </div>
                    </li>

                    <li className="dropdown">
      <span
          data-badge-count="99+"
          data-bs-toggle="dropdown"
          data-bs-display="static"
          data-bs-auto-close="outside"
      >
        <button type="button" className="ph ph-bell">
          <span className="visually-hidden">Notifications</span>
        </button>
      </span>
                        <div className="dropdown-menu navbar-dropdown-menu px-6">
                            <div className="d-flex align-items-center h-11 flex-shrink-0">
                                <div className="text-body-emphasis fw-medium">Notifications</div>

                                <div className="d-flex ms-auto me-n2.5 gap-1">
                                    <button type="button" className="icon ph ph-check-circle">
                                        <span className="visually-hidden">Mark as read</span>
                                    </button>
                                    <button type="button" className="icon ph ph-app-window">
                                        <span className="visually-hidden">Open Notifications</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-grow-1 mx-n6" data-simplebar>
                                <div id="top-notifications"></div>
                            </div>
                        </div>
                    </li>

                    <li className="dropdown d-none d-sm-block">
      <span
          data-badge-count="12"
          data-bs-toggle="dropdown"
          data-bs-display="static"
          data-bs-auto-close="outside"
      >
        <button type="button" className="ph ph-chat-centered-text">
          <span className="visually-hidden">Direct Messages</span>
        </button>
      </span>
                        <div className="dropdown-menu navbar-dropdown-menu px-6">
                            <div className="d-flex align-items-center h-11 flex-shrink-0">
                                <div className="text-body-emphasis fw-medium">Direct Messages</div>

                                <div className="d-flex ms-auto me-n2.5 gap-1">
                                    <button type="button" className="icon ph ph-plus-circle">
                                        <span className="visually-hidden">Mark as read</span>
                                    </button>
                                    <button type="button" className="icon ph ph-app-window">
                                        <span className="visually-hidden">Open Direct Messages</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-grow-1 mx-n6" data-simplebar>
                                <div id="top-messages"></div>
                            </div>
                        </div>
                    </li>

                    <li className="dropdown d-none d-sm-block">
                        <button
                            type="button"
                            className="ph ph-check-circle"
                            data-bs-toggle="dropdown"
                            data-bs-display="static"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                        >
                            <span className="visually-hidden">Tasks</span>
                        </button>
                        <div className="dropdown-menu navbar-dropdown-menu px-6">
                            <div className="d-flex align-items-center h-11 flex-shrink-0">
                                <div className="text-body-emphasis fw-medium">Ongoing Tasks</div>

                                <div className="d-flex ms-auto me-n2 gap-1">
                                    <button type="button" className="icon ph ph-app-window">
                                        <span className="visually-hidden">Open Tasks</span>
                                    </button>
                                    <button type="button" className="icon ph ph-gear">
                                        <span className="visually-hidden">Settings</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-grow-1 pt-2 mx-n6" data-simplebar>
                                <div id="top-tasks"></div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <button id="color-mode-toggle" type="button">
                            <i className="ph ph-sun"></i>
                            <i className="ph ph-moon"></i>
                            <span className="visually-hidden">Search</span>
                        </button>
                    </li>

                    <li className="d-sm-none icon">
                        <button type="button" className="sidebar-toggle">
                            <svg className="pe-none" width="15" height="12" viewBox="0 0 16 13" fill="none">
                                <path
                                    d="M1 1H15M1 6.25H10.5455M1 11.5H15"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="visually-hidden">Open Sidebar</span>
                        </button>
                    </li>
                </ul>
            </aside>

            <i className="backdrop backdrop-navbar"></i>
        </>
    )
        ;
};

export default NavBar;
