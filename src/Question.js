function Question(props) {
  return (
  <div>
    <h1>{props.text}</h1>
    <h2> 1) {props.choices[0]} 2) {props.choices[1]} 3) {props.choices[2]} 4) {props.choices[3]} </h2>
  </div>
  );
}

export default Question;