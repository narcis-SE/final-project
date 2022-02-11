import { News } from "../models/News";
import "./ArticleList.css"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export interface Props{
    articles: News[]
}

export const ArticleList = ({articles}: Props) =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <Carousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={7000}
        removeArrowOnDeviceType={["mobile"]}>
        {articles.map((articles,i)=> 
                <div className="row">
    
                    <div className="row__poster"> 
                    <div className="headlineContainer">
                        <div className="newsLogo"></div>
                            <div className="espnDiv"></div>
                        </div>
                        <div className="articleText articleText2">{articles.title}
                        <br />
                        <a className="a2" href={articles.url}> Click here for more ...</a>
                        </div> 
                        
                    </div>
                    {/* <div className="newsLogo"></div>                 */}
            </div>
        )}
    </Carousel>
    /* <Carousel>
    {articles.map((articles,i)=> 
            <Carousel.Item>
                <h1>{articles.title}</h1>
                <Carousel.Caption>
                <h2>{articles.source}</h2>
                <a href={articles.url}>Link to Article</a>
                </Carousel.Caption>
            </Carousel.Item>

    )}
    </Carousel> */
            /* {articles.map((articles,i)=> <Articles key={i} article={articles}/>)} */


    )
}