// import { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);
//   const [incrementBy, setIncrementBy] = useState(1);
//   function increment() {
//     // count=count+1
//     setCount(count + incrementBy);
//   }

//   function decrement() {
//     setCount(count - incrementBy);
//   }

//   function increaseIncrement() {
//     setIncrementBy(incrementBy + 1);
//   }

//   function decreaseDecrement() {
//     setIncrementBy(incrementBy - 1);
//   }

//   return (
//     <div>
//       <h1>Count value is : {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>

//       <h1>We are incrementing the value by:{incrementBy}</h1>
//       <button onClick={increaseIncrement}>Increase Increment</button>
//       <button onClick={decreaseDecrement}>Decrese Decrement</button>
//     </div>
//   );
// }

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

/* Why state is necessary?
-Makes UI dynamic -> without state , UI won't update when data changes,
-Component memory -> Keeps values between renders.
-Triggers re-render -> React knows what to update on screen.
-Interactive apps -> Needs for counter, forms , toggle , shopping carts etc.

Normal variables=writing on paper(UI won't see changes
state-> writing on a shared whiteboard(everyone sees updates immediately)

*/



import { useState,useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  useEffect(()=>{
    // The code we want to run
    console.log('The count is: ',count)
    // Optional return function

    return(()=>{
      console.log('I am being cleanup ')
    })
  },[count]) // The dependency array

  return (
    <div>
      <h1>Count value is : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  );
}