import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';



const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4"

  const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";


const Home = () => {

const productList=[
    { name:"mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdafdadjflkjfaj",

    },

    { name:"Black shoes",
    price: 490,
    imgSrc: img2,
    id: "asdadafdfdadjflkjfaj",

     },
];

const dispatch=useDispatch()

const addToCartHAndler =(options)=>{


    console.log(options);

    
    dispatch({type:"addToCart",payload:options});
    dispatch({type:"calculatePrice"});
    toast.success("Added to Cart");

};



  return (
    <div className='home'>
      {
      productList.map(index=>(
        <ProductCard key={index.id} 
        imgSrc={index.imgSrc} 
         name={index.name}
         price={index.price}
         id={index.id}
         handler={addToCartHAndler}  />
      ))
         }

         </div>
   
  )
}

const ProductCard = ({name,id,price,handler,imgSrc})=>(

    <div className="productCard">

        <img src={imgSrc} alt={name}/>
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={()=>handler({name,price,id,quantity : 1 ,imgSrc})}>ADD to Cart</button>

      
    </div>

)




export default Home