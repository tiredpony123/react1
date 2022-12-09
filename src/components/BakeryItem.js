import {useState} from "react";

export default function BakeryItem(props) {
    const item = props.item;

    return(
        <div style={{width:"400px"}}>
            <img src={item.image} width="400px"></img>
            <h1>{item.name}</h1>
            <p>{item.type}, {item.dietary}</p>
            <p>{item.description}</p>
            <h2>${item.price.toFixed(2)}</h2>
                <button onClick={() => props.addToCart(item)}> Add to Cart </button>
        </div>
    )
}