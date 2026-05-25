import React from 'react'
import { useDataContext } from '../context/dataContex'
// brand container
const HomeSecDivImgDiv1ImgDiv1 = () => {
  const {products} = useDataContext()
  const Brand = [...new Set(products?.map((item)=>item.brand))]
  return (
    <div className='bg-primaryBg  border border-dark/20 p-6 lg:p-8  border-dashed  w-full h-full'>
      <div className='flex p-1 text-primaryText'><div className={`uppercase text-2xl font-bold `}>Top Featured Tech Brands</div></div>
      <div className='flex flex-wrap '>
        {Brand.slice(15,20).map((brand)=>(
          <div key={brand} className='w-1/3 p-px '><div className='w-full hoverText uppercase font-semibold  text-center flex items-center justify-center line-clamp-1 wrap-break-word'>{brand}</div></div>
        ))
        }
      </div>
    </div>
  )
}

export default HomeSecDivImgDiv1ImgDiv1