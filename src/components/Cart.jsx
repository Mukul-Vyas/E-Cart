import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';



const Cart = () => {

const {cartItems,subTotal,tax,shipping,total}=useSelector(state=>state.cart)

const dispatch = useDispatch();

const increment = (id)=>{
    

    dispatch({type:"addToCart", payload: {id}});

    dispatch({type:"calculatePrice"});
};

const decrement=(id)=>{

    dispatch({type:"decrement", payload: id});

    dispatch({type:"calculatePrice"});
};

const deleteHandler=(id)=>{

    dispatch({type:"deleteFromCart", payload: id});

    dispatch({type:"calculatePrice"});

};

  return (
    <div className='cart'>

<main>

   {
    cartItems.length > 0 ? (

        cartItems.map(index=>(

            <CartItem  
            imgSrc={index.imgSrc} 
            name={index.name} 
            price={index.price} 
            qty={index.quantity}  
            id={index.id} 
            key ={index.id} 
            decrement={decrement}
            increment={increment}
            deleteHandler={deleteHandler}
            
            />
        ))
    ): <h1>No items yet</h1>
   }
   
</main>

<aside>
    <h2>Subtotal: ${subTotal}</h2>
    <h2>Shipping:${shipping}</h2>
    <h2>tax:${tax}</h2>
    <h2>Total:${total}</h2>
    </aside>




    </div>
  );
};

const CartItem = ({imgSrc,name,price,qty,decrement,increment,deleteHandler,id})=>(

    <div className='CartItem'>
<img src={imgSrc} alt="Item"/>

<article>

    <h3>{name}</h3>
    <p>${price}</p>

</article>
<div> 

    <button onClick={()=>decrement(id)}>-</button>
    <p>{qty}</p>
    <button onClick={()=>increment(id)}>+</button>
</div>
<AiFillDelete onClick={()=>deleteHandler(id)}/>

    </div>


)





export default Cart