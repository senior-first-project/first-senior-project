import React from "react";
import Data from "../data/index"
import "./card.css"
import OneProduct from "./OneProduct";
const Product=()=>{
  return (
    <div className="mainContainer">{
      Data.map(({id,name,description,price,stock,category,image})=>{
        return (<div key={id}  >
          <OneProduct data={name,description,price,stock,category,image}/>
          {/* <div className="card">
            <div className="image">
<img src={image} alt="empty"/>
            </div>
<div className="desc">
<h1>{name}</h1>
<p>{description}</p>
<span>${price}</span><br />
<span>there is {stock} left</span>
<p>{category}</p>
</div>
          </div>
          <button className="btn"> add to cart</button> */}
          </div>)
      })
    }</div>
  );
}
export default Product