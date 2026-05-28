import { useEffect, useState } from "react";
import { useCartContext } from "../context/cartContext"
import { useDataContext } from "../context/dataContex";
import CartOrderSummery from "../components/CartOrderSummery";
import SingleCartItem from "../components/SingleCartItem";
const Cart = () => {
  useEffect(()=>{
    scrollTo(0,0)
  },[])
  const {color}= useDataContext()
  const {cartData,setCartData} = useCartContext();
  // const [singleItemQunetity,setSingleItemQuenty]=useState()
  
   return (
    <div className="bg-primaryBg grid grid-cols-1 lg:grid-cols-[60%_36%] mx-auto w-full items-start justify-center gap-6 px-4 md:px-6 py-6" >
      {cartData.length === 0 ? (<div className="bg-primaryBg w-full p-4  min-h-[30vh] lg:h-[60vh] flex flex-col gap-4 overflow-y-auto rounded-xl border border-cardBorder shadow-sm">
          <div className="flex items-center justify-center m-auto rounded-xl w-[50%] h-[50%]  text-2xl md:text-3xl lg:text-4xl font-semibold text-dark/50">Card Is Empty</div>
         </div>)
      : (
      
      <div className="bg-primaryBg w-full p-4 h-auto lg:h-[80vh] flex flex-col gap-4 overflow-y-auto rounded-xl border border-cardBorder shadow-sm" style={{msOverflowStyle: 'none',
            scrollbarWidth: 'none'}}>
        <div className="text-2xl font-semibold ">Cart Items</div>
        
        <div className="flex  flex-col w-full gap-3 bg-primaryBg">
          {cartData.map((cartItem)=>(<SingleCartItem key={cartItem.id} cartItem={cartItem} color={color}/>))
        }
        </div>
      </div>
    )}
      <div className="bg-primaryBg w-full p-4 h-full flex flex-col text-primaryText">
        <CartOrderSummery/>
      </div>
    </div>
  )
}


export default Cart