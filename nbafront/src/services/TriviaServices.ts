import axios from "axios";
import {Question} from "../models/Question";



const url:string = "http://localhost:3999/api";

export function fetchQuestions(): Promise<Question[]> {
    return axios
        .get(url, {})
        .then(response => response.data)
};