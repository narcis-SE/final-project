import { News } from "../models/News";
import { Articles } from "./Articles";

export interface Props{
    articles: News[]
}

export const ArticleList = ({articles}: Props) =>{
    return(
        <div className="ArticleList">
            {articles.map((articles,i)=> <Articles key={i} article={articles}/>)}
        </div>
    )
}