import axios from "axios";
import {Standings} from '../models/Standings'

const apiKey:string = process.env.REACT_APP_STANDINGS_API_NBA_KEY || "";

export function fetchStandings():Promise<Standings[]>{

    //  axios.get("https://api-basketball.p.rapidapi.com/standings",{
    //     params:{league: '12', season: '2021-2022'},
    //     headers:{
    //         'x-rapidapi-host': 'api-basketball.p.rapidapi.com',
    //         'rapidapi-key': apiKey 
    //     }
    // })
    // .then(response => console.log(response.data.response[0][0].position))
    
    return axios.get("https://api-basketball.p.rapidapi.com/standings",{
        params:{league: '12', season: '2021-2022'},
        headers:{
            'x-rapidapi-host': 'api-basketball.p.rapidapi.com',
            'rapidapi-key': apiKey 
        }
    })
    .then(response => response.data.response[0])

}
//   var cron = require('node-cron');
//     cron.schedule('1 * * * *', () => {
//         console.log("hi");
//     });
