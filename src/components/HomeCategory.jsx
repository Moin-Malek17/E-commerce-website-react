import React from 'react'
import { useDataContext } from '../context/dataContex'
import { useNavigate } from 'react-router'

const HomeCategory = () => {
    const {products}=useDataContext()
    const navigate = useNavigate()
    const Categories = [...new Set(products?.map((item)=>item.category))] 
  return (
    <div className='flex flex-col border rounded-xl border-text-dec/20 '>
        <div className='text-2xl font-semibold text-center my-2'>Categories</div>
        <div className='flex flex-col max-h-screen overflow-y-auto px-5' style={{scrollbarWidth : "none",msOverflowStyle: 'none'}}>{
            Categories.slice(0).map((category)=>(
                <div key={category}>
                    <div 
                        onClick={() => navigate(`/category/${category}`)}
                        className='text-dark/70 w-full uppercase hover:bg-greenish/10 hover:text-greenish cursor-pointer transition-all duration-300 font-semibold p-3 rounded-lg mb-1'
                    >
                        {category}
                    </div>
                </div>
            ))
        }</div>
    </div>
  )
}

export default HomeCategory