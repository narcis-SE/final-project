import { fetchNbaNews } from "../services/NbaApiServices";
import { useState, useEffect } from "react";
import { News } from "../models/News";
import { Header } from "./Header";
import { ArticleList } from "./ArticleList";
import Generator from "./generator";
import { Standings } from "../models/Standings";
import { fetchStandings } from "../services/StandingsServices";
import { StandingsList } from "./StandingsList";


interface NewsProp{
    article: News[]
}

interface StandingProp{
    standing: Standings[]
}



export const Main = () => {
    const[articles, setArticle] = useState<News[]>([]);
    const[standings, setStandings] = useState<Standings[]>([])



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
        fetchNbaNews().then(
            article=>setArticle(article)
        )
        console.log(articles);
    }, [])


    return(
        <div className="Main">
            {/* Could be a component herefor nav links and header stuff */}
            <ArticleList articles={articles}/>
            <StandingsList standings={standings}/>          
        </div>
    )
}