import React from 'react';
import {PlayerInterface} from "./team-players-table";
import TeamPlayersTable from "./team-players-table";

export interface TeamPlayersDataResponseInterface {
    data: PlayerInterface[],
}

interface TeamPlayerTableClintProps {
    initialData: TeamPlayersDataResponseInterface,
}

const TeamPlayersTableClient:React.FunctionComponent<TeamPlayerTableClintProps> = ({initialData}) => {
    return (
        <>
            <div className="table-responsive">
                {<TeamPlayersTable players={initialData.data}/>}
            </div>
        </>
    );
};

export default TeamPlayersTableClient;