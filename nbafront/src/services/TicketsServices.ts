import axios from "axios";
import {Events} from "../models/Tickets"

const apiKey:string = process.env.REACT_APP_TICKETS_KEY || "";

let ZuluTime = new Date().toISOString().slice(0,19) + "Z";

export function fetchTickets():Promise<Events[]>{
    axios.get("https://app.ticketmaster.com/discovery/v2/events.json",{
        params:{
            'apikey': apiKey,
            'classificationId': "KZazBEonSMnZfZ7vFJA",
            'onsaleEndDateTime': ZuluTime
        }
    })
    .then(response=> console.log(response.data._embedded.events))
    
    return axios.get("https://app.ticketmaster.com/discovery/v2/events.json",{
        params:{
            'apikey': apiKey,
            'classificationId': "KZazBEonSMnZfZ7vFJA",
            'onsaleEndDateTime': ZuluTime,
            'size': 100,
            'sort': "date,asc"
        }
    })
    .then(response=> response.data._embedded.events)
}