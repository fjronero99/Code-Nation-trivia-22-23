import AnswerChoices from "./AnswerChoices";
import NextQuestion from "./NextQuestion";

function Question(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      <AnswerChoices choiceNum={1} choice={props.choices[0]} />
      <AnswerChoices choiceNum={2} choice={props.choices[1]} />
      <AnswerChoices choiceNum={3} choice={props.choices[2]} />
      <AnswerChoices choiceNum={4} choice={props.choices[3]} />

      <button onClick={NextQuestion}> Next Question </button>
    </div>
  );
}

export default Question;
