function AnswerChoices(props) {
  return (
    <div className="answer-choice">
      {props.choiceNum}) {props.choice}
    </div>
  );
}

export default AnswerChoices;
