import AnswerChoices from "./AnswerChoices";


function Question(props) {
  return (
    <div>
      <h1>
        {props.text} {props.answerState} {props.answerChoices} 
      </h1>
      <button onClick={props.setAnswerDisplayed.onClick}>
        <AnswerChoices choiceNum={1} choice={props.choices[0]} setAnswerDisplayed={props.setAnswerDisplayed} />
      </button>
      <button onClick={props.setAnswerDisplayed.onClick}>
        <AnswerChoices choiceNum={2} choice={props.choices[1]} setAnswerDisplayed={props.setAnswerDisplayed} />
      </button>
      <button onClick={props.onClick}>
        <AnswerChoices choiceNum={3} choice={props.choices[2]} setAnswerDisplayed={props.setAnswerDisplayed} />
      </button>
      <button onClick={props.onClick}>
        <AnswerChoices choiceNum={4} choice={props.choices[3]} setAnswerDisplayed={props.setAnswerDisplayed} />
      </button>
      
    </div>
  );
}

export default Question;
