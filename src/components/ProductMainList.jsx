import { useEffect, useState } from "react";
import { useDataContext } from "../context/dataContex";
import ProductMainListCard from "./ProductMainListCard";
const ProductMainList = () => {
  const { products, uniqueCategories, category, setCategory, currentPage, setCurrentPage, price, stock, sortByPrice, setSortByPrice, searchQuery } = useDataContext();


  // reset pagination when filter criteria change
  useEffect(() => {
    setCurrentPage(1);
  }, [category, price, stock, searchQuery]);
  useEffect(()=>{
    scrollTo(0,0)
  },[currentPage])

  // filtering products based on category and price and stock
  let filterProducts = [...products].filter(
    (product) =>
      (category === "all" || product.category === category) &&
      product.price <= price[1] &&
      (stock ? product.stock > 0 : true) &&
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (sortByPrice === "low-high") {
    filterProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortByPrice === "high-low") {
    filterProducts.sort(
      (a, b) => Number(b.price) - Number(a.price)
    );
  } // pagination 
  const productsPerPage = 12;
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filterProducts.slice(startIndex, startIndex + productsPerPage);
  const totalPages = Math.ceil(filterProducts.length / productsPerPage);
  const hasResults = filterProducts.length > 0;

  return (
    <div className="flex flex-col gap-4  p-4 ">
      <div className="flex bg-primaryBg shadow   items-center justify-between w-full px-4 py-2 rounded-md">
        <div className="hidden lg:flex items-center justify-center text-dark/60">We Found <span className="font-semibold px-3 text-dark">{filterProducts.length}</span> Items For You!</div>
        <div className="lg:hidden flex items-center justify-center text-dark/60">Found <span className="font-semibold px-3 text-dark">{filterProducts.length}</span></div>
        <div className="flex border border-gray-300 rounded-md px-2 py-1">
          <span className="hidden md:block">Sort By :</span> <select className="border-gray-100 cursor-pointer" onChange={(e) => setSortByPrice(e.target.value)}>
            <option value="">Featured</option>
            <option value="low-high">Price : Low to High</option>
            <option value="high-low">Price : High to Low</option>
          </select>

        </div>
      </div>

      {hasResults ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {paginatedProducts.map((product) => (
            <div key={product.id} className=""><ProductMainListCard item={product} /></div>
          ))}
        </div>
      ) : (
        <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white/80 p-8 text-center">
          <div>
            <p className="text-lg font-semibold text-dark">No items available</p>
            <p className="mt-2 text-sm text-dark/70">Try clearing your search or filters to see more products.</p>
          </div>
        </div>
      )}

      {hasResults && (
        <div className="flex items-center gap-5 mx-auto">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`disabled:opacity-50 cursor-pointer disabled:cursor-auto`}
          >
            Prev
          </button>

          <div><span className="text-greenish font-semibold ">{currentPage} </span> of {totalPages}</div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`disabled:opacity-50 cursor-pointer  disabled:cursor-auto`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductMainList;
