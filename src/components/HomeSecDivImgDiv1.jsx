import React from 'react'
import HomeSecDivImgDiv1ImgDiv1 from './HomeSecDivImgDiv1ImgDiv1'
import HomeSecDivImgDiv1ImgDiv2 from './HomeSecDivImgDiv1ImgDiv2'

const HomeSecDivImgDiv1 = () => {
  return (
    <div className='w-full flex  items-center justify-center gap-4'>
      <div className='w-[50%] hidden lg:block'><HomeSecDivImgDiv1ImgDiv1/></div>
      <div className='w-full lg:w-[50%]'><HomeSecDivImgDiv1ImgDiv2/></div>
    </div>
  )
}

export default HomeSecDivImgDiv1