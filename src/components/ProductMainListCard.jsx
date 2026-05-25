import { useDataContext } from "../context/dataContex"
import {  useNavigate } from "react-router"
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCartContext } from "../context/cartContext";
const ProductMainListCard = ({item}) => {
    const {addToCart}=useCartContext()
    const navigate = useNavigate()
  return (
    <div className="h-83 rounded-2xl bg-cardBg border border-cardBorder shadow-sm hover-lift transition-all duration-300 overflow-hidden flex flex-col justify-between">
        <div className="h-[50%] flex cursor-pointer items-center justify-center rounded-t-2xl bg-cardBgImg overflow-hidden group" onClick={()=>navigate(`/product/${item.id}`)}>
            <img className="h-full w-full object-center object-cover group-hover:scale-105 transition-transform duration-500" src={item.thumbnail} alt={item.title} />
        </div>
        <div className="px-3 py-2 flex-1 flex flex-col justify-between">
            <div>
                <div className="line-clamp-1 font-semibold text-lg my-1 text-primaryText">{item.title}</div>
                <div className="flex items-center gap-3 mb-1">
                    <div className="text-red font-bold" style={{fontSize : "20px"}}>${item.price}</div>
                    <div className="line-through text-text-dec font-medium" style={{fontSize : "15px"}}>${((100 * item.price)/(100-item.discountPercentage)).toFixed(3)}</div>
                </div>
               {item.brand && <div className="line-clamp-1 mb-1 text-sm text-primaryText/70">Brand: <span className="font-medium text-primaryText">{item.brand}</span></div>}
                <div className="md:hidden flex items-center justify-between mb-2 text-sm">
                    <div className="line-clamp-1 bg-category px-2 py-0.5 rounded-full text-xs font-semibold text-primaryText/80">{item.category.toUpperCase()}</div>
                    <div className={`${item.availabilityStatus === "In Stock" ? "text-greenish bg-greenish/10" : "text-red bg-red/10"} px-2 py-0.5 rounded-full text-xs font-bold line-clamp-1`}>{item.availabilityStatus === "In Stock" ? "In Stock" : "Out of Stock"}</div>
                </div>
            </div>
            <button className="btn-primary mt-auto w-full px-4 py-2 rounded-xl font-semibold mb-1 uppercase flex items-center justify-center cursor-pointer shadow-sm" onClick={()=>addToCart(item.id,item)}>
                <MdOutlineShoppingCart className="me-2 text-lg md:hidden" />Add to Cart
            </button>
        </div>
    </div>
  )
}

export default ProductMainListCard