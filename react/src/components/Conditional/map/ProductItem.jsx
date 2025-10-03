import React from "react";

export default function ProductItem({product}){
  return(
    <div>
      <h3>{product.name}</h3>
      <p>Price:${product.price}</p>
    </div>
  )
}