import { useMemo } from "react"
import { useDataContext } from "../context/dataContex"
import { FaHeart , FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import {Link, useNavigate} from "react-router"
import { useCartContext } from "../context/cartContext";
const HomeWomenCategory = () => {
  const {products,color, womensCategoryProducts} = useDataContext()
    const {addToCart}=useCartContext()
    const navigate=useNavigate()
    const shuffledProducts = useMemo(
      () => [...womensCategoryProducts].sort(() => Math.random() - 0.5),
      [womensCategoryProducts]
    )
  return (
    <div className="">
        <div className="font-bold text-2xl opacity-75 mb-3 md:mb-5">Top Picks for Women</div>
        <div className='flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory'
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}>
            {
                shuffledProducts.map((product) => (
                    <div key={product.id} className="bg-primaryBg border border-cardBorder  min-w-[250px] h-[350px] rounded-lg ">
                        <div className="mx-auto w-full h-[55%]  relative  bg-cardBgImg rounded-lg">
                            <img onClick={()=>navigate(`/${product.id}`)} className="rounded-t-lg bg-cardBgImg cursor-pointer w-full h-full object-cover object-center" src={product.thumbnail} alt="" />
                        </div>
                        <div className="p-2 flex flex-col gap-1 ">
                            <div className="font-semibold mb-2 line-clamp-1">{product.title.length > 25 ? product.title.substring(0, 25) + "..." : product.title}</div>
                            <div className="flex items-center justify-between mb-2"><div>{product.brand}</div><div className={`${product.availabilityStatus === "In Stock" ? "text-greenish" : "text-red"} `}>{product.availabilityStatus === "In Stock" ? "In Stock" : "Out of Stock"}</div></div>
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center justify-center gap-3"><FaStar className="fill-amber-300 font-bold text-xl"/>{product.rating}</div>
                                <div>Price : <span className={`font-semibold`} style={{color :`text-greenish`}}>${product.price.toFixed(2)}</span></div>
                            </div>
                            <button className="bg-greenish  px-4 py-1 rounded-lg font-semibold uppercase text-white flex items-center justify-center cursor-pointer" onClick={()=>addToCart(product.id,product)}><MdOutlineShoppingCart className="me-2" />Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default HomeWomenCategory