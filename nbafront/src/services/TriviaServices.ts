import axios from "axios";
import {Question} from "../models/Question";



const url:string = process.env.REACT_APP_DATABASE || "";

export function fetchQuestions(): Promise<Question[]> {
    return axios
        .get(url, {})
        .then(response => response.data)
};