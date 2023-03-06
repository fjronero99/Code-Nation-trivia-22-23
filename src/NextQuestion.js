function NextQuestion(props) {
  return (
    <div className="Nxt-Question">
      <button onClick={props.onClick}> Next Question </button>
      <p>Questions: {props.currentQuestionNumber + 1}</p>
    </div>
  );
}

export default NextQuestion;
