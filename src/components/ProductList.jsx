import ProductMainList from "./ProductMainList"
import ProductCategory from "./ProductCategory"


const ProductList = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 max-w-7xl xl:px-6 md:px-3 px-4 py-4 mx-auto">
        <div className="w-full md:w-1/4 bg-category/80 rounded-2xl shadow-lg shadow-category h-max mb-6 md:mb-0"><ProductCategory/></div>
        <div className="w-full md:w-3/4 rounded-2xl border border-cardBorder/20"><ProductMainList/></div>
    </div>
  )
}

export default ProductList