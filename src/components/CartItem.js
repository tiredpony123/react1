export default function CartItem(props){
    return(
        <div>
            <p>{props.cartItem.name}: ${props.cartItem.price}</p>
            <button onClick={() => props.removeFromCart(props.cartItem)}> Remove From Cart </button>
        </div>
    )
}