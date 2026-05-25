import { useDataContext } from '../context/dataContex'
import { useNavigate } from 'react-router'

const CategoryNav = () => {
    const { searchQuery, setSearchQuery } = useDataContext()
    const navigate = useNavigate()

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        navigate('/product')
      }
    }
  return (
    <div className='flex items-center justify-around py-3 bg-greenish'>
        {/* cate + search */}
        <div className='flex bg-white rounded-xl px-5 py-1 gap-6 w-[95%] lg:w-full max-w-2xl'>
          <div className='flex flex-1'>
            <input
              type="text"
              className='py-1 outline-0 px-1 w-full '
              placeholder='Search anything...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <div className='hidden lg:block font-semibold text-white uppercase'>free shipping over $199</div>
        <div className='hidden lg:block font-semibold text-white uppercase'>30 days money back</div>
        <div className='hidden lg:block font-semibold text-white uppercase md:hidden'>100% secure payment</div>
    </div>
  )
}

export default CategoryNav