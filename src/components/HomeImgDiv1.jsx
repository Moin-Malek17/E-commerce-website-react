import { useNavigate } from "react-router";
import { useDataContext } from "../context/dataContex"


const HomeImgDiv1 = () => {
    const navigate= useNavigate()
    const { products } = useDataContext();
    const Headphone = products?.find((item) => item.id === 101);
    const Mackbook = products?.find((item) => item.id === 78);
    const Tshirt = products?.find((item) => item.id === 84);

    const headphoneBgStyle = Headphone?.images?.[0]
      ? {
          backgroundImage: `url(${Headphone.images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }
      : {};
       const tshirtBgStyle = Tshirt?.images?.[0]
      ? {
          backgroundImage: `url(${Tshirt.images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }
      : {};
      const mackbookBgStyle = Mackbook?.images?.[0]
      ? {
          backgroundImage: `url(${Mackbook.images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }
      : {};

  return (
    <div className="flex flex-col items-center  justify-between gap-4 h-full bg-primaryBg">
      <div className=" flex flex-col p-4 rounded-2xl w-full h-[60%] text-white bg-black" style={headphoneBgStyle}>
        <div className="ps-8 border rounded border-white/80 mt-12">
          <div className="text-3xl mb-2 font-semibold line-clamp-1 tracking-wide">{Headphone?.title}</div>
          <div className="mb-4 text-xl font-semibold">{Headphone?.category}</div>
          <div className="line-clamp-4 w-[60%] mb-8">{Headphone?.description}</div>
          <div className="" ><button className="w-fit py-2 px-8 bg-white text-black cursor-pointer mb-3 font-semibold text-lg rounded-lg hover:rounded-3xl transition-all duration-150" onClick={()=>navigate(`/${Headphone.id}`)}>Buy now</button></div>
        </div>
      </div>
      <div className="flex bg-primaryBg items-center justify-center gap-4 h-[40%] xl:p-4  md:p-3 p-2 w-full ">
        <div className="bg-primaryBg  h-full w-[50%] flex flex-col rounded-2xl" style={tshirtBgStyle}>
          <div className="border border-dark/50 rounded-2xl m-2 px-2 h-full flex flex-col hover:rounded-none transition-all duration-75">
            <div className="text-2xl ">{Tshirt?.title}</div>
            <div className="text-lg mb-3"><span>from</span> <span className="text-greenish font-semibold">${Tshirt?.price}</span></div>
            <div className="uppercase mt-8 md:mt-14 border-b w-fit hover:bg-dark  hover:text-primaryBg px-3 py-1 transition-all duration-75 cursor-pointer" onClick={()=>navigate(`/${Mackbook.id}`)}>Discover now</div>
          </div>
        </div>
        <div className="bg-dark text-white h-full w-[50%] flex flex-col rounded-2xl" style={mackbookBgStyle}>
          <div className="border border-white/50 m-2 rounded-2xl px-2 h-full flex flex-col hover:rounded-none transition-all duration-75">
            <div className="text-2xl ">{Mackbook?.title}</div>
            <div className="text-lg mb-3"><span>from</span> <span className="text-greenish font-semibold">${Mackbook?.price}</span></div>
            <div className="uppercase mt-8 md:mt-14 border-b w-fit hover:bg-white  hover:text-dark px-3 py-1 transition-all duration-75 cursor-pointer" onClick={()=>navigate(`/${Tshirt.id}`)}>Discover now</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeImgDiv1