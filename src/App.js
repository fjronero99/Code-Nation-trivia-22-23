import React, { useState } from "react";
import "./App.css";
import data from "./sample_data.json";
import Question from "/src/Question.js";
import NextQuestion from "/src/NextQuestion.js";

function App(props) {
  let [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  let [answerDisplayed, setAnswerDisplayed] = useState(null);

  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question
        text={data[currentQuestionNumber].question.text}
        choices={data[currentQuestionNumber].question.choices}
        setAnswerDisplayed={setAnswerDisplayed}
      />
      <NextQuestion
        onClick={goToNextQuestion}
        currentQuestionNumber={currentQuestionNumber}
        goToNextQuestion={goToNextQuestion}
      />
      {questionAnswered(answerDisplayed)}
    </div>
  );

  function getCorrectAnswer(questionNum) {
    let currentQuestion = data[questionNum];

    return currentQuestion.correct_choice_index;
  }

  function questionAnswered(answerState) {
    if (answerState === null) {
      return "Click an answer above. ";
    } else if (answerState) {
      return "That is correct!";
    } else {
      return "That is incorrect!";
    }
  }

  function goToNextQuestion(setAnswerState) {
    setCurrentQuestionNumber(currentQuestionNumber + 1);
    setAnswerDisplayed(null);
  }
}
export default App;
