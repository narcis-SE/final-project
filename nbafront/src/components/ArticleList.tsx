import { News } from "../models/News";
import { Articles } from "./Articles";
import Carousel from 'react-bootstrap/Carousel'
import "./ArticleList.css"

export interface Props{
    articles: News[]
}

export const ArticleList = ({articles}: Props) =>{
    return(
        <div className="ArticleList">
            <Carousel>
            {articles.map((articles,i)=> 
                    <Carousel.Item>
                        <h1>{articles.title}</h1>
                        <Carousel.Caption>
                        <h2>{articles.source}</h2>
                        <a href={articles.url}>Link to Article</a>
                        </Carousel.Caption>
                    </Carousel.Item>

            )}
            </Carousel>
            
            
        </div>
    )
}