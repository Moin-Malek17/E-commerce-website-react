import { createContext ,useContext , useState,useEffect, useMemo } from "react"; 

export const DataContext = createContext();

// custom hook 
export const useDataContext = () => {
    return useContext(DataContext);
}

// provider
export const DataProvider = ({children}) =>{
    const [products,setProducts]=useState([]);
    // theme 
    const [theme,setTheme]=useState(
        localStorage.getItem("theme") || "light"
    )
    // theme onclick handler
    const handlerTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    // pagination
    const [currentPage,setCurrentPage]=useState(1);
    const color = {
        "primary": "#1ABA1A",
        "red" : "red",
        "card" :  "#EDEFF6",
        "grayBg" : "#222222",
        "white" : "#FFFFFF"
    }
    // apply theme class and persist it whenever `theme` changes
    useEffect(()=>{
        document.documentElement.className = theme;
        localStorage.setItem("theme", theme);
    },[theme])

    const [isLoading,setIsLoading]=useState(true)

    // fetch products once on mount
    useEffect(()=>{
        fetch('https://dummyjson.com/products?limit=0')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data.products)
            setIsLoading(false)
        })
        .catch(err=>{
            console.log("Error aai hai bhai",err)
            setIsLoading(false)
        })
    },[])

    // top category products with one single img
    const topCategoryProducts = Object.values(
        products.reduce((acc, item) => {
          if (!acc[item.category]) {
            acc[item.category] = item;
          }
          return acc;
        }, {})
    );
    // women category products
    const womensCategoryProducts = useMemo(
          () => products.filter((item) => item.category === "womens-bags" || item.category === "womens-dresses" || item.category === "womens-jewellery" || item.category === "womens-shoes" || item.category === "womens-watches"),
          [products]
        )
     // mens category products
        const mensCategoryProducts = useMemo(
      () => products.filter((item) => item.category === "mens-shirts" || item.category === "mens-shoes" || item.category === "mens-watches"),
      [products]
    )
    // unique category products
    const uniqueCategories = ["all",...new Set(products.map(product => product.category))];
    // category for filtring 
    const [category,setCategory]=useState("all")
    // price filtering
    const [price,setPrice]=useState([0,40000])
    // stock filtering
    const [stock,setStock]=useState(false)
    // filter by price high to low and low to high
    const [sortByPrice,setSortByPrice]=useState("");
    // filter search
    const [searchQuery,setSearchQuery]=useState('');
    // single product 
    

    // value obj for provider
    const value = {
        theme,setTheme,handlerTheme,
        products,
        setProducts,
        color,
        topCategoryProducts,
        womensCategoryProducts,
        mensCategoryProducts,
        uniqueCategories,
        category,
        setCategory,
        price,
        setPrice,
        stock,
        setStock,
        sortByPrice,
        setSortByPrice,
        searchQuery,
        setSearchQuery,
        currentPage,
        setCurrentPage,
        isLoading
    }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}