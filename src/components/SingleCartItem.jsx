import { useCartContext } from "../context/cartContext";
import { toast } from "react-toastify";
import { FaTrash ,FaStar ,FaCheckCircle } from "react-icons/fa";
import { FaPlus ,FaMinus } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

const SingleCartItem = ({cartItem, color}) => {
    const { updateCartItemQuantity, deleteFromCart } = useCartContext();
    const quantity = cartItem.quantity ?? 1;

    const increment = () => {
        toast.success("Quantity increased");
        updateCartItemQuantity(cartItem.id, quantity + 1);
    }
    const decrement = () => {
        if (quantity > 1) {
            toast.success("Quantity decreased");
            updateCartItemQuantity(cartItem.id, quantity - 1);
        }
    }

    return (
        <div className="w-full h-auto flex flex-col md:flex-row gap-4 justify-between items-center border border-cardBorder shadow-sm rounded-2xl p-4 text-primaryText hover-lift transition-all bg-cardBg">
            {/* Image */}
            <div className="h-32 w-32 shrink-0 bg-primaryBg rounded-xl p-2 flex items-center justify-center">
                <img className="max-h-full max-w-full object-contain object-center" src={cartItem.thumbnail} alt={cartItem.title} />
            </div>

            {/* Content */}
            <div className="flex flex-col w-full md:w-1/2 text-center md:text-left flex-1">
                <div className="mb-1 font-bold text-lg line-clamp-1">{cartItem.title}</div>
                <div className="mb-1 flex items-center justify-center md:justify-start gap-1 text-sm font-medium">
                    <FaStar className="fill-amber-400"/> {cartItem.rating}
                </div>
                {cartItem.brand && <div className="text-sm mb-2 text-primaryText/70">Brand: <span className="font-semibold text-primaryText">{cartItem.brand}</span></div>}
                <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="text-red font-bold text-xl">${cartItem.price}</div>
                    <div className="line-through text-sm text-text-dec">${((100 * cartItem.price)/(100-cartItem.discountPercentage)).toFixed(2)}</div>
                </div>
                <div className={`${cartItem.availabilityStatus === "In Stock" ? "text-greenish" : "text-red"} flex items-center justify-center md:justify-start gap-1 mt-1 font-semibold text-sm`}>
                    {cartItem.availabilityStatus === "In Stock" ? <FaCheckCircle /> : <IoIosCloseCircle className="fill-red-400 text-white"/> }
                    {cartItem.availabilityStatus === "In Stock" ? "In Stock" : "Out of Stock"}
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-row md:flex-col items-center justify-between w-full md:w-auto gap-4 md:gap-2">
                <div className="flex  items-center  mx-auto bg-primaryBg rounded-lg overflow-hidden border border-cardBorder/50 shadow-sm">
                    <button className="px-3 py-2 hover:bg-cardBorder/50 cursor-pointer transition-colors text-primaryText" onClick={increment}><FaPlus size={12} /></button>
                    <div className="px-3 font-semibold w-8 text-center">{quantity}</div>
                    <button className="px-3 py-2 hover:bg-cardBorder/50 cursor-pointer transition-colors text-primaryText" onClick={decrement}><FaMinus size={12} /></button>
                </div>
                {/* <button className="flex bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white transition-all duration-200 items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-pointer font-medium w-full md:w-auto" onClick={()=>deleteFromCart(cartItem.id)}>
                    <FaTrash size={14} /> <span>Remove</span>
                </button> */}
            </div>
            <button className="flex bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white transition-all duration-200 items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-pointer font-medium w-full md:w-auto" onClick={()=>deleteFromCart(cartItem.id)}>
                    <FaTrash size={14} /> <span>Remove</span>
                </button>

        </div>
    );
}

export default SingleCartItem;