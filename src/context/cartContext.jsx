import { createContext ,useContext , useState,useEffect, useMemo } from "react"; 
import { toast } from "react-toastify";

export const CartContext = createContext();

// custom hook 
export const useCartContext = () => {
    return useContext(CartContext);
}
// provider
export const CartContextProvider = ({children})=> {
    const [totalPrice,setTotalPrice]=useState(0)
    const [totalItemQuantity,setTotalItemQuantity]=useState()
    const [cartData,setCartData]= useState(() => {
        try {
            const raw = localStorage.getItem('cart');
            const parsed = raw ? JSON.parse(raw) : [];
            return parsed.map(item =>
                item?.data
                    ? { ...item.data, quantity: item.quantity ?? 1 }
                    : item
            );
        } catch (err) {
            return [];
        }
    })

    // Calculate total price and total quantity automatically
    const calcTotals = useMemo(() => {
        const total = cartData.reduce((sum, item) => sum + (item.price * (item.quantity ?? 1)), 0);
        const qty = cartData.reduce((sum, item) => sum + (item.quantity ?? 1), 0);
        return { total: total.toFixed(2), quantity: qty };
    }, [cartData])

    useEffect(() => {
        setTotalPrice(parseFloat(calcTotals.total));
        setTotalItemQuantity(calcTotals.quantity);
    }, [calcTotals])

    // persist cart to localStorage
    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cartData));
        } catch (err) {
            // ignore storage errors
        }
    }, [cartData])

    // addToCart: if item exists increment quantity, otherwise add new
    const addToCart = (id, data) => {
        setCartData(prev => {
            const exists = prev.find(item => item.id === id || item._id === id);
            if (exists) {
                toast.success("Product quantity increase by one");
                return prev.map(item => {
                    const match = item.id === id || item._id === id;
                    return match ? { ...item, quantity: (item.quantity ?? 1) + 1 } : item;
                })
            }
            toast.success("Product added to cart");
            return [...prev, { ...data, quantity: 1 }]
        })
    }
// update cart quantity
    const updateCartItemQuantity = (id, quantity) => {
        setCartData(prev => prev.map(item => {
            const match = item.id === id || item._id === id;
            if (!match) return item;
            return {
                ...item,
                quantity: Math.max(1, quantity)
            };
        }))
    }
// delete from cart
    const deleteFromCart = (id) => {
        toast.error("Product removed from cart");
        setCartData(cartData.filter(item=> item.id !==id))
    }

    const value = {
        cartData,
        setCartData,
        addToCart,
        updateCartItemQuantity,
        deleteFromCart,
        totalPrice,
        setTotalPrice,
        totalItemQuantity,
        setTotalItemQuantity
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}