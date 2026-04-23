'use client';

import React from 'react';

export interface LinkInterface {
    url: string | null,
    label: string,
    page: number,
    active: boolean
}

interface PaginationProps {
    links: LinkInterface[],
    onPageChange: (page:number) => void,
}

const Pagination:React.FunctionComponent<PaginationProps> = ({ links, onPageChange }) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {links.map((link, key: number) => (
                    <li key={key} className={"page-item" + (link.active ? " active" : "")}>
                        <button
                            className={"page-link" + (link.page ? '' : ' disabled')}
                            onClick={() => onPageChange(link.page)}
                        >
                            {new DOMParser().parseFromString(link.label, "text/html").documentElement.textContent}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;