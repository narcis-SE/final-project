import React, {useEffect, useState, FormEvent} from 'react';
import axios, { Axios } from 'axios';
import {fetchQuestions} from "../services/TriviaServices";
import {Question} from "../models/Question";
import './generator.css';


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


    useEffect( ()=> {
          fetchQuestions()
          .then(
            questionArray => setQuestionArray(questionArray)
        );
    }, [])

    function randomGenerator() {
        setRandomNum(Math.floor(Math.random() * questionArray.length));
        let randomQuestion = questionArray[randomNum];
        setOneQuestion(randomQuestion.question);
        setActualAnswer(randomQuestion.answer[0].name);
        setActualPicture(randomQuestion.answer[1].image)
        setUserAnswer("");
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
        }
    }


    return(
        <div>

            <div>
                <button onClick={randomGenerator}> Random Question Generator </button>
                <span> {oneQuestion} </span>
            </div>
            <div>
                <span>{scoreCounter}</span>
            </div>
            <div>
                {
                    waitingForAnswer? 
                        <div className="answerForm">
                            <form onSubmit={SubmitHandler} action="localhost:3999/game" method="POST">
                                <div className="form-group">
                                    <label>Answer</label>
                                        <input
                                            type="text"
                                            id="answer"
                                            name="answer"
                                            placeholder="Enter answer"
                                            onChange={(e) => setUserAnswer(e.target.value)}
                                        />
                                        <button>Submit Answer</button>
                                </div>
                            </form>
                        </div> :
                        <div className="answerModal">
                            {
                                rightAnswer? 
                                    <div className="rightAnswer">
                                        <h1>Correct Answer</h1>
                                        <div>{actualAnswer}</div>
                                        <div> <img src={actualPicture} alt="Player Photo" /> </div>
                                    </div> :
                                    <div className="wrongAnswer">
                                        <h1>Wrong Answer</h1>
                                    </div>
                            }
                        </div>

                }
            </div>

        </div>
    )
}


export default Generator;
