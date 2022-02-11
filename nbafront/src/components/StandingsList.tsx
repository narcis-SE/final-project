import { Standings } from "../models/Standings";
import "./StandingsList.css"
import Table from 'react-bootstrap/Table'
export interface Prop{
    standings: Standings[]
}

export const StandingsList = ({standings}: Prop) =>{
    return(
        <div className="StandingList">
              <Table  hover variant="dark">
              <thead>
              <h1>Western Conference</h1>
                 <tr>
                  <th> Position </th>
                  <th> Team </th>
                  <th> Win/Loss</th>
                 </tr>
                </thead>
                
                <tbody>
                {standings.slice(0,7).map((standings,i) =>
                    <tr className="table-success">
                    <td>{standings.position}</td>
                    <td>{standings.team.name}</td>
                    <td>{standings.games.win.total} - {standings.games.lose.total}</td>
                    </tr>
                    )}
                {standings.slice(7,9).map((standings,i) =>
                    <tr className="table-warning">
                    <td>{standings.position}</td>
                    <td>{standings.team.name}</td>
                    <td>{standings.games.win.total} - {standings.games.lose.total}</td>
                    </tr>
                    )}

                {standings.slice(9,15).map((standings,i) =>
                    <tr className="table-danger">
                    <td>{standings.position}</td>
                    <td>{standings.team.name}</td>
                    <td>{standings.games.win.total} - {standings.games.lose.total}</td>
                    </tr>
                    )}
                </tbody>
              </Table>
              
              <Table hover variant="dark">
              
              <thead>
              <h1>Eastern Conference</h1>
                 <tr>
                  <th> Position </th>
                  <th> Team </th>
                  <th> Win/Loss</th>
                 </tr>
                </thead>
                <tbody>
                {standings.slice(15,22).map((standings,i) =>
                    <tr className="table-success">
                    <td>{standings.position}</td>
                    <td>{standings.team.name}</td>
                    <td>{standings.games.win.total} - {standings.games.lose.total}</td>
                    </tr>
                    )}
                {standings.slice(22,24).map((standings,i) =>
                    <tr className="table-warning">
                    <td>{standings.position}</td>
                    <td>{standings.team.name}</td>
                    <td>{standings.games.win.total} - {standings.games.lose.total}</td>
                    </tr>
                    )}

                {standings.slice(24,30).map((standings,i) =>
                    <tr className="table-danger">
                    <td>{standings.position}</td>
                    <td>{standings.team.name}</td>
                    <td>{standings.games.win.total} - {standings.games.lose.total}</td>
                    </tr>
                    )}
                </tbody>
              </Table>



        </div>
    )
}