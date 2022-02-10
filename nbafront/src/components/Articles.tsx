import { News } from "../models/News";
import "./Articles.css"

interface newsProp{
    article: News;
}

export const Articles = ({article}: newsProp) => {
    return(
        <div className="row">
            
            Source: {article.source}
                <div className="row__poster"> 
                <div className="headlineContainer">
                    <div className="headline"></div>
                        <div className="espnDiv"></div>
                    </div>
                    <div className="articleText articleText2">{article.title}
                    <br />
                    <a className="a2" href={article.url}> Click here for more ...</a>
                    </div> 
                    
                </div>
                <div className="newsLogo"></div>                
        </div>

    )
}

<div className="linkAndText">
    
</div>

