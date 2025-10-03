import { useEffect, useState } from "react";


export default function EffectDemo(){
  const [count,setCount]=useState(0)

  useEffect(()=>{
    console.log("Effect runs after EVERY render")
  })
  useEffect(()=>{
    console.log("Effect runs after ONLY once(on mount)")
  },[])
  useEffect(()=>{
    console.log("Effect runs when count changes:",count)
  },[count])

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}