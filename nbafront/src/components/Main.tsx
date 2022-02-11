import { fetchNbaNews } from "../services/NbaApiServices";
import { useState, useEffect } from "react";
import { News } from "../models/News";
import { ArticleList } from "./ArticleList";
import Generator from "./generator";
import { Data, Standings } from "../models/Standings";
import { fetchStandings } from "../services/StandingsServices";
import { StandingsList } from "./StandingsList";

import { fetchSpreads } from "../services/SpreadApiServices";
import { BetData } from "../models/Spreads";
import { SpreadList } from "./SpreadList";


import { fetchTwoDaysAgoScores, fetchYesterdayScores } from "../services/ScoresServices";
import { Scores } from "../models/Scores";
import ScoresList from "./ScoresList";



interface NewsProp{
    article: News[]
}

interface StandingProp{
    standing: Standings[]
}

interface BetProp{
    data: BetData[]
}



export const Main = () => {
    const[YesterdaysScores, setYesterdaysScores] = useState<Scores[]>([]);
    const[TwoDaysAgoScores, setTwoDaysAgoScores] = useState<Scores[]>([]);
    const[articles, setArticle] = useState<News[]>([]);
    const[standings, setStandings] = useState<Standings[]>([]);
    const[spreads, setSpreads] = useState<BetData[]>([]);


    //Standings display *****
    // useEffect(()=>{
    //     fetchStandings().then(
    //         standings=>setStandings(standings.slice(0,30))
    //     )
    // }, [])

    // useEffect(()=>{ 
    //     const interval = setInterval(()=>{
    //         fetchStandings().then(
    //             standings=>setStandings(standings)
    //         )
    //         console.log(standings);
    //     }, 60000);
    // }, [])

    useEffect(()=>{

        // fetchSpreads().then(
        //     spreads=>setSpreads(spreads)
        // )
        fetchYesterdayScores().then(
            YesterdaysScores=>setYesterdaysScores(YesterdaysScores)
        )
        console.log(YesterdaysScores);
    }, []);
    
    useEffect(()=>{
        fetchTwoDaysAgoScores().then(
            TwoDaysAgoScores=>setTwoDaysAgoScores(TwoDaysAgoScores)
        )
        console.log(TwoDaysAgoScores);

    }, [])

    useEffect(()=>{
        fetchNbaNews().then(
            article=>setArticle(article)
        )
    }, [])


    return(
        <div className="Main">
            {/* Could be a component herefor nav links and header stuff */}
            <ScoresList YesterdaysScores={YesterdaysScores} TwoDaysAgoScores={TwoDaysAgoScores}/>          
            <ArticleList articles={articles}/>
            <StandingsList standings={standings}/>
            <SpreadList spreads={spreads}/>
            <footer>
                <p>Powered by: <a href="https://rapidapi.com/savey03/api/nba-latest-news/">NBA Latest News API</a> and <a href="https://www.api-basketball.com/documentation">API-Basketball</a> and <a href="https://www.balldontlie.io/#introduction">balldontline API</a></p>
            </footer>
        </div>
    )
}