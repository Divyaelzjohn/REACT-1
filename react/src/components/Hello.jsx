/*
function Hello({name,message,emoji}){
  // console.log(props);
  // const {name,message}= props;
  return (
    <div>
      <h1>{message} {emoji} {name}</h1>
    </div>
  )
}*/

/*
Immutable
function Hello(props){
  props.name="Jack"
  return (
    <div>
      <h1>{props.message} {props.emoji} {props.name}</h1>
    </div>
  )
}*/

// Passing array to a prop
// function Hello({name, message, emoji, seatNumbers}){
function Hello({ person }) {
  return (
    <div>
      <h1>
        {person.message}
        {person.emoji}
        {person.name}
        {person.seatNumbers}
      </h1>
    </div>
  );
}
export default Hello;
