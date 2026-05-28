import { useDataContext } from "../context/dataContex"
import { useNavigate } from 'react-router'

const HomeSecDivImgDiv1ImgDiv2 = () => {
  const { products, topCategoryProducts } = useDataContext()
  const navigate = useNavigate()
    
  return (
    <section className='w-full bg-primaryBg  py-8 text-dark'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='mb-6'>
          <h2 className='text-2xl font-semibold text-primaryText sm:text-3xl'>Top categories</h2>
          <p className='mt-2 text-sm text-dark/80'>Browse the best product categories in your store.</p>
        </div>

        <div
          className='flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory'
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {topCategoryProducts.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className='snap-start shrink-0 w-28 sm:w-32 rounded-2xl border border-cardBorder bg-primaryBg p-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md cursor-pointer  '
              onClick={() => {
                navigate(`/category/${item.category}`)
                window.scrollTo(0, 0)
              }}
            >
              <div className='mb-2 h-20 overflow-hidden rounded-2xl bg-cardBgImg flex items-center justify-center'>
                <img
                  className='h-full w-full object-contain'
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
              <p className='text-[11px] font-medium text-dark text-center'>
                {item.title.length > 10 ? `${item.title.substring(0, 10)}...` : item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeSecDivImgDiv1ImgDiv2