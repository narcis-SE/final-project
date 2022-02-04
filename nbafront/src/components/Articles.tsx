import { News } from "../models/News";

interface newsProp{
    article: News;
}

export const Articles = ({article}: newsProp) => {
    return(
        <div className="Articles">
            <h1>{article.title}</h1>
            <h2> Source: {article.source}</h2>
            <a href={article.url}> Link to Article</a>
        </div>
    )
}