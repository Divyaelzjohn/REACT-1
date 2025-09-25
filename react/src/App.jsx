import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import { getImageUrl } from './components/TASK-3/utils'
import Profile from './components/TASK-3/Profile'
import Card from './components/Card-3/Card'
import Fruits from './components/Render/Fruits'
import ConditionalComponent from './components/Render/ConditionalComponent'
import Message from './components/Render/Message'
import Counter from './components/State/Counter'

function App() {
  // const [count, setCount] = useState(0)
  // const seatNumbers=[1,4,7]
// const person={
//   name:"Rob",
//   message:"Hi there!",
//   emoji:"😄",
//   seatNumbers:[1,4,7]
// }
  return (
    <div className="App">
      {/* <Hello 
        name="Rob" 
        message="Hi there!" 
        emoji="😄" 
        seatNumbers={seatNumbers}/> */}
      {/* <Hello name="Tom" message="Hi Hello"/> */}

      {/* <Hello person={person}/> */}
      {/* <Fruits/> */}
      {/* <ConditionalComponent/> */}
      {/* <Message/> */}
      <Counter/>
    </div>
  )
}
export default App

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