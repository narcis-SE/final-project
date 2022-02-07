import React, {useEffect, useState, FormEvent} from 'react';
import axios, { Axios } from 'axios';
import { fetchQuestions } from '../services/TriviaServices';
import {Question} from "../models/Question";

function Generator() {
    const [randomNum, setRandomNum] = useState(0);
    const [questionArray, setQuestionArray] = useState<Question[]>( [] );
    const [oneQuestion, setOneQuestion] = useState("");
    const [userAnswer, setUserAnswer] = useState("");
    const [actualAnswer, setActualAnswer] = useState({});

    
    

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
        console.log(actualAnswer);
        

        console.log(randomQuestion);
        console.log(randomQuestion.answer[0]);
    };

    function SubmitHandler(e:FormEvent) {
        e.preventDefault();
        console.log(actualAnswer);
        axios.post('http://localhost:3999/game', {
            oneQuestion,
            actualAnswer,
            userAnswer
        });
        setUserAnswer("");
    };


    return(
        <div>

            <div>
                <button onClick={randomGenerator}> Random Question Generator </button>
                <span> {oneQuestion} </span>
            </div>

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

            <div>

            </div>

        </div>
    )
}


export default Generator;