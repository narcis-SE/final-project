import axios from "axios";
import {Scores} from "../models/Scores"

export function fetchYesterdayScores():Promise<Scores[]>{
    let startDate = new Date();
    startDate.setDate(startDate.getDate()-1)
    let month = (`0${startDate.getMonth() + 1}`).slice(-2);
    let year = startDate.getFullYear();
    let dateMDY = `${year}-${month}-${startDate.getDate()}`;
    console.log(dateMDY);
    console.log(year);
    let ScoresCall = "https://www.balldontlie.io/api/v1/games?dates[]="+dateMDY;

    axios.get(ScoresCall)
    .then(response=> console.log(response.data.data))
    

    return axios.get(ScoresCall)
    .then(response=> response.data.data)
}


export function fetchTwoDaysAgoScores():Promise<Scores[]>{
    let startDate = new Date();
    startDate.setDate(startDate.getDate()-1)
    let month = (`0${startDate.getMonth() + 1}`).slice(-2);
    let year = startDate.getFullYear();
    let dateMDY = `${year}-${month}-${startDate.getDate()-1}`;
    console.log(dateMDY);
    console.log(year);
    let ScoresCall = "https://www.balldontlie.io/api/v1/games?dates[]="+dateMDY;

    axios.get(ScoresCall)
    .then(response=> console.log(response.data.data))
    

    return axios.get(ScoresCall)
    .then(response=> response.data.data)
}