//Not Necessary Anymore

import { Standings } from "../models/Standings";
import Table from 'react-bootstrap/Table'


interface standingProp{
    standing: Standings
}


export const Standing = ({standing}: standingProp) => {
    return(
        <div className="Standing">


                
            {/* <table>
                <tr>
                 <th> Position </th>
                 <th> Conference </th>
                 <th> Team </th>
                 <th> Win/Loss</th>
                </tr>
                <tr>
                    
                    <td>{standing.position}</td>
                    <td>{standing.group.name}</td>
                    <td>{standing.team.name}</td>
                    <td>{standing.games.win.total} / {standing.games.lose.total}</td>
                </tr>

            </table> */}
        </div>
    )
}