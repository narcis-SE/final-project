import React, {useEffect, useState, FormEvent} from 'react';
import axios, { Axios } from 'axios';
import {fetchQuestions} from "../services/TriviaServices";
import {Question} from "../models/Question";
import './generator.css';
import 'animate.css';
import Triviaheader from './Triviaheader';


function Generator() {
    const [randomNum, setRandomNum] = useState(0);
    const [questionArray, setQuestionArray] = useState<Question[]>( [] );
    const [oneQuestion, setOneQuestion] = useState("");
    const [userAnswer, setUserAnswer] = useState("");
    const [actualAnswer, setActualAnswer] = useState("");
    const [actualPicture, setActualPicture] = useState("")
    const [waitingForAnswer, setWaitingForAnswer] = useState(true);
    const [rightAnswer, setRightAnswer] = useState(false);
    const [scoreCounter, setScoreCounter] = useState(0);
    const [hint, setHint] = useState("");
    
    const [display, setDisplay] = useState("wrongAnswer");


    useEffect( ()=> {
          fetchQuestions()
          .then(
            questionArray => setQuestionArray(questionArray)
        );
    }, [])

    function randomGenerator() {
        setRandomNum(Math.floor(Math.random() * questionArray.length));
        let randomQuestion = questionArray[randomNum];
        console.log(randomQuestion);
        
        setOneQuestion(randomQuestion.question);
        setActualAnswer(randomQuestion.answer[0].name);
        setActualPicture(randomQuestion.answer[1].image);
        setHint(randomQuestion.hint);
        setUserAnswer("");
        setDisplay("wrongAnswer")
        setWaitingForAnswer(true);
        setRightAnswer(false);
    };

    function SubmitHandler(e:FormEvent) {
        e.preventDefault();
        answerComparison();
        axios.post('http://localhost:3999/game', {
            oneQuestion,
            actualAnswer,
            userAnswer
        });
    };

    function answerComparison() {
        setWaitingForAnswer(false);
        if(userAnswer.toLocaleLowerCase() === actualAnswer.toLocaleLowerCase()) {
            setRightAnswer(true);
            setScoreCounter(scoreCounter + 1)
        } else {
            setRightAnswer(false);
            setDisplay("show")
        }
    }
    let wikiLink = 'https://en.wikipedia.org/wiki/'+actualAnswer;

function nextQuestion() {

}


    return(
        <div className="wholeBackground">
        <Triviaheader />
            <div className="underHeader">


                <button className="ball" 
                        onClick={randomGenerator}> Random Question Generator 
                </button>
                <div id="scoreCounter">{scoreCounter}</div>
            </div>


            

            
            {/* FlexBox Parent */}
            <div id="questionAnswer">
                {/* Question FlexBox */}
                <div className="question">
                    {oneQuestion} 
                        <button className="hint" 
                            onClick={() => setHint(hint)}>
                            Need A Hint???
                        </button>
                </div>
            {/* Answer FlexBox */}
                <div className="answerModal">
                <div>
                {
                    waitingForAnswer? 
                        <div className="answerForm">
                            <form onSubmit={SubmitHandler} action="localhost:3999/game" method="POST">
                                <div className="form-group ">
                        
                                        <input
                                            type="text"
                                            id="answer"
                                            name="answer"
                                            placeholder="????????"
                                            onChange={(e) => setUserAnswer(e.target.value)}
                                        />
                                        <button className="answer">Submit Answer</button>
                                </div>
                                <div className="blurDiv"></div>
                            </form>
                        </div> :
                        <div></div>
                        

                }
                </div>
                                {rightAnswer? 
                                    <div className="rightAnswerHolder animate__animated animate__bounceInUp ">
                                        <div className="rightAnswer">
                                            <h1 className="correctAnswer">Score!!</h1>
                                            <div>{actualAnswer}</div>
                                            <div> <img className="actualPlayer"src={actualPicture} alt="Player Photo" /> </div>
                                        </div>
                                    </div>
                : userAnswer ? 
                                    <div className={display}>
                                        <h1>Air Ball! The correct answer was {actualAnswer}</h1>
                                        <img src="./airballGif.webp" alt="" className="gif"/>
                                        <a href={wikiLink}>Who is this?</a>
                                    </div> 
                                    :
                                    <div></div>
                                }
                </div>
                    
                  

            </div>

            





        </div>
    )
}


export default Generator;


