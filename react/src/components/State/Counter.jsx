import { useState } from "react"

export default function Counter(){
  const [count,setCount] = useState(0);
  const [incrementBy,setIncrementBy]=useState(1)
  function increment(){
    // count=count+1
    setCount(count+incrementBy);
  }

  function decrement(){
    setCount(count-incrementBy);
  }

  function increaseIncrement(){
    setIncrementBy(incrementBy+1)
  }

  function decreaseDecrement(){
    setIncrementBy(incrementBy-1)
  }

  return (
    <div>
      <h1>Count value is : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>We are incrementing the value by:{incrementBy}</h1>
      <button onClick={increaseIncrement}>Increase Increment</button>
      <button onClick={decreaseDecrement}>Decrese Decrement</button>
    </div>
  )
}

// Wrong way
// export default function Counter(){
//   let count=0;
//   function increment(){
//     count++;
//     console.log(count)
//   }
//   function decrement(){
//     count--;
//     console.log(count)
//   }
//   return(
//     <div>
//       <h1>Count value is : {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   )
// }


