import axios from "axios";
import { BetData } from "../models/Spreads";
const apiKey: string = process.env.REACT_APP_STANDINGS_API_NBA_KEY || "";

export function fetchSpreads():Promise<BetData[]>{
    //testing end points
    axios.get("https://odds.p.rapidapi.com/v1/odds",{
        params:{sport: 'basketball_nba',
        region: 'us',
        mkt: 'spreads',
        dateFormat: 'iso',
        oddsFormat: 'american'},
        headers:{ 'x-rapidapi-host': 'odds.p.rapidapi.com',
        'x-rapidapi-key': apiKey}
    })
    .then(response=>console.log(response.data.data[0]))
    
    
    return axios.get("https://odds.p.rapidapi.com/v1/odds",{
        params:{sport: 'basketball_nba',
        region: 'us',
        mkt: 'spreads',
        dateFormat: 'iso',
        oddsFormat: 'american'},
        headers:{ 'x-rapidapi-host': 'odds.p.rapidapi.com',
        'x-rapidapi-key': apiKey}
    })
    .then(response=>response.data.data)

}