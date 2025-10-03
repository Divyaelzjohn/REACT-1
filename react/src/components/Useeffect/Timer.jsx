import { useState,useEffect } from "react";

export default function Timer(){
  const[seconds,setSeconds]=useState(0);

  useEffect(()=>{
    const interval=setInterval(()=>{
      setSeconds(prev=>prev+1)
    },1000);

    return ()=>{
      clearInterval(interval)
      console.log("Interval cleared!");
    }
  },[]);

  return <p>Timer:{seconds} seconds</p>
}