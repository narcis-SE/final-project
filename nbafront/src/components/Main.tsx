import { fetchNbaNews } from "../services/NbaApiServices";
import { useState, useEffect } from "react";
import { News } from "../models/News";
import { Header } from "./Header";
import { ArticleList } from "./ArticleList";
import Generator from "./generator";
import { Standings } from "../models/Standings";
import { fetchStandings } from "../services/StandingsServices";


interface NewsProp{
    article: News[]
}



export const Main = () => {
    const[articles, setArticle] = useState<News[]>([]);
    // const[standings, setStandings] = useState<Standings[]>([]);

    // var cron = require('node-cron');
    
    // cron.schedule('*/5 * * * *', () => {
    //     fetchStandings().then(
    //         standings=>setStandings(standings)
    //     )
    //     console.log(standings);
    // });


    useEffect(()=>{
        fetchNbaNews().then(
            article=>setArticle(article)
        )
    }, [])


    return(
        <div className="Main">
            <Header/>
            {/* Could be a component herefor nav links and header stuff */}
            <ArticleList articles={articles}/>
            <Generator/>
        </div>
    )
}