import React, { useState } from 'react'
import { useDataContext } from '../context/dataContex'


const ProductCategory = () => {
  const {products, uniqueCategories ,category,setCategory,price,setPrice,stock,setStock,searchQuery,setSearchQuery} = useDataContext();
  const [showBtn,setShowBtn]=useState(false);
  const [numberOfCategories, setNumberOfCategories] = useState(10);
  const handleShowBtn = () => {
    setShowBtn(!showBtn);
    setNumberOfCategories(showBtn ? 10 : uniqueCategories.length);
  };
  const handleReset = () => {
    setCategory("all");
    setStock(false);
    setPrice([0, 40000]);
    setSearchQuery("");
  }  
  return (
    <div className='px-3 py-4 h-max w-full'>
        <div className='w-full'>
          <input type="text" placeholder='Search by title' className='w-full border border-cardBorder/40 border-dashed  px-2 py-1 mb-4 rounded-lg  focus:outline-0 bg-white placeholder:text-gray-400'  value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
        </div>
        <h2>Product Category</h2>
        <div>
          {uniqueCategories?.length>0 && uniqueCategories?.slice(0,numberOfCategories)?.map((acategory)=>(
          <div key={acategory}>
            <div className='mb-1'>
              <input type="checkbox" className={`accent-greenish`} id={acategory} value={acategory}  checked={acategory === category} onChange={(e)=> setCategory(e.target.value)}/>
              <label className='ms-3' htmlFor={acategory}>{acategory}</label>
            </div>
          </div>
          ))}
        </div>
        <div>
          <button className='text-greenish px-1  hover:text-white hover:bg-greenish  font-extralight rounded-xl' onClick={()=>handleShowBtn()}>
            {showBtn ? "Show Less" : "Show More"}
          </button>
        </div>
        <h2 className='my-2'>Products Availibilty</h2>
        <div>
          <input className='accent-greenish me-3' type="checkbox" name="available" id="available" checked={stock} onChange={()=>setStock(!stock)}/>
          <label htmlFor="available">In stock</label>
        </div>
        {/* price range */}
        <div>
          <div>Price range : ${price[0]} - ${price[1]}</div>
          <input className='accent-greenish' type="range" min={price[0]} max={40000} value={price[1]}  onChange={(e)=>setPrice([price[0], Number(e.target.value)])} />
        </div>
        {/* reset btn */}
        <div className='w-full'>
          <button className='w-full bg-primaryBg shadow  py-1 font-semibold rounded-lg cursor-pointer' onClick={handleReset}>Reset All</button>
        </div>
    </div>
  )
}

export default ProductCategory