import React from "react";



const fruits = ["Apple", "Banana", "Mango", "Orange"];
function Fruits1({items}){
  if(!items||items.length===0){
    return <p>No item to display</p>
  }
  return (
    <ul>
      {items.map((item,index)=>(
        <li>{item}</li>
      ))}
    </ul>
  )
}
export default ItemList;