import { useNavigate } from "react-router";
import { useDataContext } from "../context/dataContex"
const HomeImgDiv2 = () => {
    const {products}=useDataContext()
    const navigate =useNavigate()
    const Watch = products?.find((item) => item.id === 106);
    const Monopod = products?.find((item) => item.id === 109);
    const Charger = products?.find((item) => item.id === 102);
    const Mug = products?.find((item) => item.id === 49);
  return (
    <div className="flex flex-col  items-center justify-between w-full h-full gap-4 p-2">
        <div className="bg-primaryBg rounded-2xl hover:rounded-[5px] text-primaryText w-full h-full">
          <div className="flex p-2">
            <div className="min-size-[60%] aspect-square  relative flex flex-col items-center justify-center"><div className="w-full h-full object-center object-cover"><img className="w-full h-full" src={Watch?.thumbnail} alt={Watch?.thumbnail} /></div></div>
            <div className="relative  w-full">
              <div className="font-semibold text-lg my-3">{Watch?.brand}</div>
              <div className="text-xl font-semibold wrap-break-word mb-2">{Watch?.title}</div>
              <div><button className="hover:bg-dark  rounded-md lg:rounded-none hover:rounded-lg transition-all duration-300 hover:text-primaryBg px-3 py-1 border border-primaryText/50 " onClick={()=>navigate(`/${Watch?.id}`)}>Shop Now</button></div>
            </div>
          </div>
          <div className="w-full p-2">
            <div className="line-clamp-4 text-dark/80">{Watch?.description}</div>
          </div>
        </div>
        <div className="bg-primaryBg rounded-2xl hover:rounded-[5px] text-primaryText w-full h-full">
          <div className="flex p-2">
            <div className="min-w-[60%] aspect-square h-auto  relative flex flex-col items-center justify-center"><div className="w-full h-full object-center object-cover"><img className="w-full h-full" src={Mug?.thumbnail} alt={Watch?.thumbnail} /></div></div>
            <div className="relative  w-full">
              <div className="font-semibold text-lg my-3">{Mug?.brand}</div>
              <div className="text-xl font-semibold wrap-break-word mb-2">{Mug?.title}</div>
              <div><button className="hover:bg-dark rounded-md lg:rounded-none mt-4 lg:mt-0 hover:rounded-lg transition-all duration-100 hover:text-primaryBg px-3 py-1 border border-primaryText/50 " onClick={()=>navigate(`/${Mug?.id}`)}>Shop Now</button></div>
            </div>
          </div>
          <div className="w-full p-2">
            <div className="line-clamp-4 text-dark/80">{Mug?.description}</div>
          </div>
        </div>
    </div>
  )
}

export default HomeImgDiv2