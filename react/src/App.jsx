import { Children, useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./components/Hello";
import { getImageUrl } from "./components/TASK-3/utils";
import Profile from "./components/TASK-3/Profile";
import Card from "./components/Card-3/Card";
import Fruits from "./components/Render/Fruits";
import ConditionalComponent from "./components/Render/ConditionalComponent";
import Message from "./components/Render/Message";
import Counter from "./components/State/Counter";
import Form from "./components/Form/Form";
import Search from "./components/search/Search";
import FruitList from "./components/Conditional/map/FruitList";
// import Greeting from './components/Conditional/Ifternarylogc'
import DataFetcher from "./components/Conditional/DataFetcher";
import Greeting from "./components/Conditional/Ifternarylogc";
import Timer from "./components/Useeffect/Timer";
import EffectDemo from "./components/Useeffect/EffectDemo";
import ChildComponent from "./components/Props/ChildComponent";
import ChildInput from "./components/Props/ChildInput";
import ChildDisplay from "./components/Props/ChildDisplay";
import Child from "./components/Props/ChildDisplay";
/*
function App() {
// const [count, setCount] = useState(0)
// const seatNumbers=[1,4,7]
// const person={
//   name:"Rob",
//   message:"Hi there!",
//   emoji:"😄",
//   seatNumbers:[1,4,7]
// }
//   const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <div className="App">*/
{
  /* <Hello
         name="Rob"
         message="Hi there!"
         emoji="😄"
         seatNumbers={seatNumbers}/> */
}
{
  /* <Hello name="Tom" message="Hi Hello"/> */
}

{
  /* <Hello person={person}/> */
}
{
  /* <Fruits/> */
}
{
  /* <ConditionalComponent/> */
}
{
  /* <Message/> */
}
{
  /* <Counter/> */
}
{
  /* <Form/> */
}
{
  /* <Search /> */
}
{
  /* <FruitList fruits={fruits}/> */
}
{
  /* <Greeting/> */
}
{
  /* <DataFetcher/> */
}

{
  /* <EffectDemo/> */
}

/*</div>
  );
}
export default App;*/

/*
function App() {
  return (
    <div>
      <h1>Reusable Card Example</h1>

      <Card
        title="Marie Curie"
        description="Pioneer in radioactivity and first woman to win a Nobel Prize."
        image="https://i.imgur.com/szV5sdG.jpg"
      >
        <button>Read More</button>
      </Card>

      <Card
        title="Katsuko Saruhashi"
        description="Geochemist who developed a method for measuring carbon dioxide in seawater."
        image="https://i.imgur.com/YfeOqp2.jpg"
      >
        <button>Explore</button>
      </Card>
    </div>
  )
}
export default App
*/

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       <Greeting isLoggedIn={isLoggedIn} />
//       {isLoggedIn?(
//         <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
//       ):(
//         <button onClick={()=>setIsLoggedIn(true)}>Login</button>
//       )}
//     </div>
//   );
// }

// use effect

// export default function JokeFetcher() {
//   const [joke, setJoke] = useState(null);

//   useEffect(() => {
//     async function fetchJoke() {
//       const res = await fetch("https://official-joke-api.appspot.com/random_joke");
//       const data = await res.json();
//       setJoke(data);
//     }

//     fetchJoke();
//   }, []); // [] → run once when component mounts

//   if (!joke) return <p>Loading...</p>;
//   return <p>{joke.setup} - {joke.punchline}</p>;
// }

// export default function WindowSize() {
//   const [width,setWidth]=useState(window.innerWidth)
//   useEffect(()=>{
//     function handleResize(){
//       setWidth(window.innerWidth);
//     }
//     window.addEventListener("resize",handleResize)

//     //Cleanup
//     return()=>{
//       window.removeEventListener("resize",handleResize)
//     };
//   },[]);
//   return <p>Window width:{width}px</p>
// }

// export default function App(){
//   const [show,setShow]=useState(true);
//   return(
//     <div>
//       <button onClick={()=> setShow(!show)}>
//         {show?"Hide Timer":"ShowTimer"}
//       </button>
//       {show&&<Timer/>}
//     </div>
//   )
// }

// Props
/*
export default function ParentComponent() {
  const [message, setMessage] = useState("Initial message");

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (<div>
    <h1>Parent:{message}</h1>
    <ChildComponent onUpdateMessage={updateMessage} />
  </div>)
}
*/

// Child-to-parent communication through callbacks.
/*
export default function ParentComponent(){
  const [message,setMessage]=useState('No message')
  const handleClickMessage=useCallback((data)=>{
    setMessage(data)
  },[])

  return(
    <div>
      <h1>Parent:{message}</h1>
      <ChildComponent onUpdateMessage={handleClickMessage} />
    </div>
  )
}*/
/*
// child sending data to parent
export default function Parent() {
  const [message, setMessage] = useState("");

  function handleMessageFromChild(msg) {
    setMessage(msg);
  }
  return (
    <div>
      <Child sendMessage={handleMessageFromChild} />
      <p>Message: {message}</p>
    </div>
  );
}*/

/*
// Input handling
export default function Parent() {
  const [name, setName] = useState("");
  return (
    <div>
      <ChildInput onNameChange={setName} />
      <h2>Name:{name}</h2>
    </div>
  );
}*/

// Lifting state up to share data between components.​
/*export default function Parent(){
  const [name,setName] =useState("")

  return (
    <div>
      <ChildInput onNameChange={setName}/>
      <ChildDisplay name={name}/>
    </div>
  )
}*/


export default function CounterApp(){
  const [count,setCount]=useState(0)
  // const handleIncrement=()=>{
  //   setCount(count+1);
  // }
  function incrementCounter(){
    setCount(prev=>prev+1)
  }
  return (
    <div>
       {/* <ChildInput onIncrement={handleIncrement}/> */}
       <ChildInput onIncrement={incrementCounter}/>
       {/* <ChildDisplay count={count}/> */}
       <h1>Counter:{count}</h1>
    </div>
  )
}

