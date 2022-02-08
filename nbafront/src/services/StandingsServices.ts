import axios from "axios";
import {Standings} from '../models/Standings'

const apiKey:string = process.env.REACT_APP_STANDINGS_API_NBA_KEY || "";

export function fetchStandings():Promise<Standings[]>{
    return axios.get("https://api-nba-v1.p.rapidapi.com/standings/standard/2021/?rapidapi-key=",{
        params:{
            'rapidapi-key': apiKey
        }
    })
    .then (response=> response.data)
}