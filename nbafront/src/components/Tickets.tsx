import react from 'react';
import { Events } from '../models/Tickets';
import "./Tickets.css"

interface Prop {
    tickets: Events[];
}

const Tickets = ({tickets}: Prop) => {
    // const [] = useState();

    return (
        <div>
            <div className="searchBar">
                <p className="searchHint">To look for a team, hit Ctrl+F to open search</p>
            </div>
            <div className="ticketsContainer">
                {tickets.map((tickets,i) => 
                    <div className="ticketsBox">
                        <p>{tickets.name}</p>
                        <p>Ticket Sales Close After: {tickets.dates.start.localDate}</p>
                        <a href={tickets.url}>Click to Buy your tickets now!</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Tickets;