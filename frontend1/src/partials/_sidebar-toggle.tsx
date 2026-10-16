import React from 'react';

const SidebarToggle = () => {
    return (
        <button type="button" className="sidebar-toggle icon d-none d-sm-flex d-xl-none">
            <svg className="pe-none" width="15" height="12" viewBox="0 0 16 13" fill="none">
                <path d="M1 1H15M1 6.25H10.5455M1 11.5H15" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="visually-hidden">
                Open Sidebar
            </span>
        </button>
    );
};

export default SidebarToggle;
