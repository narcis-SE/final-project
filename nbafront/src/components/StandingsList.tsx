import { Standings } from "../models/Standings";
import { Standing } from "./Standing";

export interface Prop{
    standings: Standings[]
}

export const StandingsList = ({standings}: Prop) =>{
    return(
        <div className="StandingList">
            {standings.map((standings,i) => <Standing key={i} standing={standings}/>)}
        </div>
    )
}