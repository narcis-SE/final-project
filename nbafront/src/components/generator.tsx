import React, { useEffect, useState, FormEvent } from "react";
import axios, { Axios } from "axios";
import { fetchQuestions } from "../services/TriviaServices";
import { Question } from "../models/Question";
import "animate.css";
import "./generator.css";
import Triviaheader from "./Triviaheader";
import { getEffectiveTypeParameterDeclarations } from "typescript";

function Generator() {

  const [randomNum, setRandomNum] = useState(0);
  const [questionArray, setQuestionArray] = useState<Question[]>([]);
  const [oneQuestion, setOneQuestion] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [actualAnswer, setActualAnswer] = useState("");
  const [actualPicture, setActualPicture] = useState("");
  const [waitingForAnswer, setWaitingForAnswer] = useState(true);
  const [rightAnswer, setRightAnswer] = useState(false);
  const [scoreCounter, setScoreCounter] = useState(0);
  const [hint, setHint] = useState("");
  const [display, setDisplay] = useState("wrongAnswer");
  const [multiChoiceState, setMultiChoiceState] = useState("");
  const [multiChoiceContainer, setMultiChoiceContainer] = useState<string[]>([]);
  let multiContainer: any = [];

  useEffect(() => {
    fetchQuestions().then((questionArray) => setQuestionArray(questionArray));
  }, []);

  function multiChoiceGenerator(correctAnswer:string) {
    //   set 3 random numbers into variables
    let temp1 = Math.floor(Math.random() * questionArray.length);
    let temp2 = Math.floor(Math.random() * questionArray.length);
    let temp3 = Math.floor(Math.random() * questionArray.length);
    // set variable to array of random #'s created above
    let wrongAnswers = [temp1, temp2, temp3];
    // use a loop that itterates less than 3 times because we only want 
    // 3 random numbers in our newly declared array from line 22
    for (let i = 0; i < 3; i++) {
        //on each loop, evaluate if the name value at the index position randomly 
        // generated from line 34, doesnt match the actual answer. Push & store into 
        // empty array from line 22 
      if (questionArray[wrongAnswers[i]].answer[0].name != actualAnswer) {
        multiContainer.push(questionArray[wrongAnswers[i]].answer[0].name);
      }


    };
    console.log(multiContainer);
    console.log(actualAnswer);
    multiContainer.push(correctAnswer);

    shuffleArray(multiContainer);
    return multiContainer;
  };

  function renderMultiChoice() {
    {multiContainer.map((answers:string, i:string) => {
        return <div className="mulitChoiceArray"> (<div key={i}> {answers} </div>)</div>
    })};
  }

  function shuffleArray(array:[]) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

    let wikiLink = 'https://en.wikipedia.org/wiki/'+actualAnswer;





  function randomGenerator() {
    //set randomNum to a random number and use to target random index of the question array
    setRandomNum(Math.floor(Math.random() * questionArray.length));
    let randomQuestion = questionArray[randomNum];
    console.log(randomQuestion);
    // update state by targeting the question, answer & hint properties of the randomly generated
    // object
    setOneQuestion(randomQuestion.question);
    setActualAnswer(randomQuestion.answer[0].name);
    setActualPicture(randomQuestion.answer[1].image);
    setHint(randomQuestion.hint);
    // push the answer property into empty array
    let correctAnswer = randomQuestion.answer[0].name;
    // multiContainer.push(correctAnswer);
    // update multiChoiceContainer state by running the multiChoiceGenerator 
    // function which will push 3 random wrong answers into empty array
    setMultiChoiceContainer(multiChoiceGenerator(correctAnswer));
    // run renderMultiChoice function to render answers to the page
    renderMultiChoice();
    // setUserAnswer("");
    setDisplay("wrongAnswer");
    setWaitingForAnswer(true);
    setRightAnswer(false);
    console.log(multiContainer);

    


    console.log(multiContainer);
    console.log(multiContainer[0]);
    var multiChoice = multiContainer;
    return multiChoice;
  }

  console.log(multiContainer);
  

  function SubmitHandler(e: FormEvent) {
    e.preventDefault();
    answerComparison();
    console.log(userAnswer);
    // axios.post("http://localhost:3999/game", {
    //   oneQuestion,
    //   actualAnswer,
    //   userAnswer,
    // });
  }

  

  function answerComparison() {
    setWaitingForAnswer(false);
    if (userAnswer.toLocaleLowerCase() === actualAnswer.toLocaleLowerCase()) {
      setRightAnswer(true);
      setScoreCounter(scoreCounter + 1);
    } else {
      setRightAnswer(false);
      setDisplay("show");
    }
  }

  

  return (
    <div className="wholeBackground">
      <Triviaheader />
      <div className="underHeader">
        <button className="ball" onClick={randomGenerator}>
          {" "}
          Random Question Generator
        </button>
        <div id="scoreCounter">{scoreCounter}</div>
      </div>

      {/* FlexBox Parent */}
      <div id="questionAnswer">
        {/* Question FlexBox */}
        <div className="question">
          {oneQuestion}
          <button className="hint" onClick={() => setHint(hint)}>
            Need A Hint???
          </button>
        </div>
        {/* Answer FlexBox */}
        <div className="answerModal">
          <div>
            {waitingForAnswer ? (
              <div className="answerForm">
                <form
                  onSubmit={SubmitHandler}
                //   action="localhost:3999/game"
                //   method="POST"
                >
                  <div className="form-group ">
                      <div className="answerChoices">
                    {multiChoiceContainer.map((answers:string, i:number) => 
                         <label htmlFor={i.toString()}>{answers}<input type="radio" name="answer" id={i.toString()} value={answers} onChange={(e)=>setUserAnswer(e.target.value)}/></label>
                    )}
                    
                    </div>


                    

                    {/* {waitingForAnswer? 
                    <div>
                        <label htmlFor={multiContainer[0]}>Hello<input type="radio" name={multiContainer[0]} id="first" value={multiContainer[0]} onChange={(e)=>setUserAnswer(e.target.value)}/></label>
                        <label htmlFor={multiContainer[1]}>{multiContainer[1]}<input type="radio" name={multiContainer[1]} id="second" value={multiContainer[1]} onChange={(e)=>setUserAnswer(e.target.value)}/></label>
                        <label htmlFor={multiContainer[2]}>{multiContainer[2]}<input type="radio" name={multiContainer[2]} id="third" value={multiContainer[2]} onChange={(e)=>setUserAnswer(e.target.value)}/></label>
                        <label htmlFor={multiContainer[3]}>{multiContainer[3]}<input type="radio" name={multiContainer[3]} id="fourth" value={multiContainer[3]} onChange={(e)=>setUserAnswer(e.target.value)}/></label>
                    </div>
                    : 
                    <div></div>
                    } */}

                    {/* <input
                      type="text"
                      id="answer"
                      name="answer"
                      placeholder="????????"
                      onChange={(e) => setUserAnswer(e.target.value)}
                    /> */}
                    <button className="answer">Submit Answer</button>
                  </div>
                  <div className="blurDiv">
                  </div>

                </form>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          {rightAnswer ? (
            <div className="rightAnswerHolder animate__animated animate__bounceInUp ">
              <div className="rightAnswer">
                <h1 className="correctAnswer">Score!!</h1>
                <div>{actualAnswer}</div>
                <div>
                  {" "}
                  <img
                    className="actualPlayer"
                    src={actualPicture}
                    alt="Player Photo"
                  />{" "}
                </div>
              </div>
            </div>
          ) : userAnswer ? (
            <div className={display}>
              <h1>Air Ball! The correct answer was {actualAnswer}</h1>
              <img src="./airballGif.webp" alt="" className="gif" />
              <a href={wikiLink}>Who is this?</a>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Generator;
