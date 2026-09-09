'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {LinkInterface} from "@/app/teams/pagination";

interface PaginationNewProps {
    links: LinkInterface[],
}

const PaginationNew:React.FunctionComponent<PaginationNewProps> = ({ links }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const changePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', newPage.toString());
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {links.map((link, key: number) => (
                    <li key={key} className={"page-item" + (link.active ? " active" : "")}>
                        <button
                            className={"page-link" + (link.page ? '' : ' disabled')}
                            onClick={() => changePage(link.page)}
                        >
                            {link.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default PaginationNew;