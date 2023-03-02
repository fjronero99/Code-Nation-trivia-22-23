function AnswerChoices(props) {
  function updateAnswerState(){
    props.setAnswerDisplayed(props.choiceNum - 1);
  }
  return(
    <div className="answer-choice" onClick={updateAnswerState}>
    {props.choiceNum}) {props.choice} 
  </div>
  );
}

export default AnswerChoices;
