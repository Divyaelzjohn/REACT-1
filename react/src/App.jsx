import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'

function App() {
  // const [count, setCount] = useState(0)
  // const seatNumbers=[1,4,7]
const person={
  name:"Rob",
  message:"Hi there!",
  emoji:"😄",
  seatNumbers:[1,4,7]
}
  return (
    <div className="App">
      {/* <Hello 
        name="Rob" 
        message="Hi there!" 
        emoji="😄" 
        seatNumbers={seatNumbers}/> */}
      {/* <Hello name="Tom" message="Hi Hello"/> */}

      <Hello person={person}/>
    </div>
  )
}
export default App