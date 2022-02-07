import { fetchNbaNews } from "../services/NbaApiServices";
import { useState, useEffect } from "react";
import { News } from "../models/News";
import { Header } from "./Header";
import { ArticleList } from "./ArticleList";
import Generator from "./generator";


interface NewsProp{
    article: News[]
}



export const Main = () => {
    const[articles, setArticle] = useState<News[]>([]);

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