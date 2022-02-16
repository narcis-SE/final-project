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
import { Events } from "../models/Tickets";
import { fetchTickets } from "../services/TicketsServices";
import Tickets from "./Tickets";



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



    //Standings display with interval
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         fetchStandings().then(
    //             standings=>setStandings(standings)
    //         )
    //     }, 3600000); //Hourly calls 3600000
    // },[])
    //Normal Version
    // useEffect(()=>{
    //     fetchStandings().then(
    //         standings=>setStandings(standings)
    //     )
    // })

    //Spreads Display with interval
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         fetchSpreads().then(
    //             spreads=>setSpreads(spreads)
    //         )
    //     }, 10800000) //8 calls a day ~ still well below limit 500/month 10800000
    // }, [])
    //Normal Version
    // useEffect(()=>{
    //     fetchSpreads().then(
    //         spreads=>setSpreads(spreads)
    //     ) 
    // }, [])


    //Score Display
    useEffect(()=>{
        fetchTwoDaysAgoScores().then(
            TwoDaysAgoScores=>setTwoDaysAgoScores(TwoDaysAgoScores)
        )
        fetchYesterdayScores().then(
            YesterdaysScores=>setYesterdaysScores(YesterdaysScores)
        )
        fetchNbaNews().then(
            article=>setArticle(article)
        )
        fetchSpreads().then(
            spreads=>setSpreads(spreads)
        )
        fetchStandings().then(
            standings=>setStandings(standings)
        ) 
    }, []);



    //Article Display
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         fetchNbaNews().then(
    //             article=>setArticle(article)
    //         )
    //     }, 1728000) //50 calls a day, WELL below our limit of 10,0000/month 1728000
    // })
    //Normal Version
    // useEffect(()=>{
    //     fetchNbaNews().then(
    //         article=>setArticle(article)
    //     )
    // }, [])
    


    return(
        <div className="Main">
            {/* Could be a component herefor nav links and header stuff */}
            <ScoresList YesterdaysScores={YesterdaysScores} TwoDaysAgoScores={TwoDaysAgoScores}/>          
            <ArticleList articles={articles}/>
            <StandingsList standings={standings}/>
            <SpreadList spreads={spreads}/>
            <footer>
                <p>Powered by: <a href="https://rapidapi.com/savey03/api/nba-latest-news/">NBA Latest News API</a> -- <a href="https://www.api-basketball.com/documentation">API-Basketball</a> -- <a href="https://www.balldontlie.io/#introduction">balldontline API</a> -- <a href="https://developer.ticketmaster.com/products-and-docs/apis/getting-started/">TicketMaster API</a></p>
            </footer>
        </div>
    )
}