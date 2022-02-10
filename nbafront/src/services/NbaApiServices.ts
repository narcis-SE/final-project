import axios from "axios";
import { News } from "../models/News";

const apiKey:string = process.env.REACT_APP_NEWS_API_KEY || "";

export function fetchNbaNews():Promise<News[]>{
    return axios.get("https://nba-latest-news.p.rapidapi.com/news/source/espn/",{
        params:{
            'rapidapi-key': apiKey
        }
    })
    .then(response=> response.data)
}



