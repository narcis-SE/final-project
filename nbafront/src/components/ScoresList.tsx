import {Scores} from "../models/Scores"
import "./ScoresList.css"

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
    return (
        <div>
            <div className="scoresTitle">
                <h3>Yesterdays Scores</h3>
            </div>
            <div className="ScoresContainer">
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
            </div>
        </div>
    )
}

export default ScoresList;