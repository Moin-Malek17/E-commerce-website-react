import { useNavigate } from 'react-router'
const HomeExploreProductTag = () => {
    const navigate = useNavigate()
  return (
    <div className='text-dark'>
        <div className='flex items-center justify-center '><div className='font-semibold text-xl'>Explore Our All </div> <button className={`bg-dark text-primaryBg px-4 font-semibold py-1 rounded-md ms-2 cursor-pointer flex items-center justify-center gap-2`} onClick={()=>{navigate('/product');scrollTo(0,0)}}>Product </button></div>
    </div>
  )
}

export default HomeExploreProductTag