import { useCartContext } from "../context/cartContext"

const CartOrderSummery = () => {
    const {cartData,totalPrice,totalItemQuantity}=useCartContext()
  return (
    <div className="px-4 py-2 border border-greenish/70 rounded-2xl ">
        <div className="text-lg md:text-xl lg:text-2xl font-bold">Order Summery</div>
        <div className="flex items-center w-full justify-between mb-2 "><div>Total Item :</div><div className="pe-3">{cartData.length}</div></div>
        <hr className="w-full  text-gray-300 " />
        <div className="flex items-center w-full justify-between my-2"><div>Total Quantity :</div><div className="pe-3">{totalItemQuantity}</div></div>
        <hr className="w-full  text-gray-300 " />
        <div className="flex items-center w-full justify-between my-2 font-semibold"><div>Order Total :</div><div className="pe-3">${totalPrice}</div></div>
        <div className="bg-greenish/80 hover:bg-greenish text-white transition-all duration-75   w-fit mx-auto px-8 py-2 rounded-md mt-4 mb-2 font-semibold border-red- shadow shadow-dark cursor-pointer">checkout</div>
    </div>
  )
}

export default CartOrderSummery