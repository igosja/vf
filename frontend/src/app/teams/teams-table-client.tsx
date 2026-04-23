'use client';

import React, {useState} from 'react';
import TeamsTable, {TeamInterface} from "./teams-table";
import Pagination, {LinkInterface} from "@/app/teams/pagination";
import Loading from "@/app/loading";
import api from "@/api/api";

export interface TeamDataResponseInterface {
    data: TeamInterface[],
    links: LinkInterface[],
    current_page: number,
}

interface TeamTableClintProps {
    initialData: TeamDataResponseInterface,
}

const TeamsTableClient:React.FunctionComponent<TeamTableClintProps> = ({initialData}) => {
    const [teams, setTeams] = useState(initialData.data);
    const [links, setLinks] = useState(initialData.links);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(initialData.current_page);

    const loadPage = async (page:number) => {
        setLoading(true);
        try {
            const response = await api.get<TeamDataResponseInterface>(`teams?page=${page}`);
            const data = response.data;
            setTeams(data.data);
            setLinks(data.links);
            setCurrentPage(data.current_page);
        } catch (error) {
            console.error('Ошибка загрузки:', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (page: number) => {
        if (page == currentPage) {
            return;
        }

        loadPage(page);
    };

    return (
        <>
            <div className="table-responsive">
                {loading && <Loading/>}
                <TeamsTable teams={teams}/>
                <Pagination
                    links={links}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
};

export default TeamsTableClient;