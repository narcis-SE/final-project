import {Scores} from "../models/Scores"
import "./ScoresList.css"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'

interface Prop {
    YesterdaysScores: Scores[];
    TwoDaysAgoScores: Scores[];
}

let startDate = new Date();
startDate.setDate(startDate.getDate()-1)
let month = (`0${startDate.getMonth() + 1}`).slice(-2);
let year = startDate.getFullYear();
let dateMDY = `${year}-${month}-${startDate.getDate()}`;

const ScoresList = ({YesterdaysScores, TwoDaysAgoScores}: Prop) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 10
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 10
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 4
        }
      };
    return (

        <div>


           
            <div className="scoresTitle">
                <h3>Yesterdays Scores</h3>
            </div>

            <div className="ScoresContainer">
                <Carousel 
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={7000}
                removeArrowOnDeviceType={["mobile"]} className="scoreList">
                {YesterdaysScores.map(YesterdaysScores => 
                    <div className="gameBox">
                        <p className="AwayTeam">{YesterdaysScores.visitor_team.abbreviation}: {YesterdaysScores.visitor_team_score}</p>
                        <p>@</p>
                        <p className="HomeTeam">{YesterdaysScores.home_team.abbreviation}: {YesterdaysScores.home_team_score}</p>
                        <p>Final</p>
                    </div>
                    )}
                   

                {TwoDaysAgoScores.map(TwoDaysAgoScores => 
                    <div className="gameBox">
                        <p className="HomeTeam">{TwoDaysAgoScores.home_team.abbreviation}: {TwoDaysAgoScores.home_team_score}</p>
                        <p>@</p>
                        <p className="AwayTeam">{TwoDaysAgoScores.visitor_team.abbreviation}: {TwoDaysAgoScores.visitor_team_score}</p>
                        <p>Final</p>
                    </div>
                    )}

            </Carousel>
                    
            </div>


            
            
        </div>
       
    )
}

export default ScoresList;