function AnswerChoices(props) {
  return (
    <div className="answer-choice">
      {props.text[0]} {props.text[1]}
    </div>
  );
}

export default AnswerChoices;
