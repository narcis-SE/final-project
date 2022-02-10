import { News } from "../models/News";
import { Articles } from "./Articles";
import "./ArticleList.css"

export interface Props{
    articles: News[]
}

export const ARow =  ({articles}: Props) => {
    console.log(articles);
    
    return(
        <div className="ArticleList">
            {articles.map((articles,i)=> <Articles key={i} article={articles}/>)}
        </div>
    )
}

export default ARow;
