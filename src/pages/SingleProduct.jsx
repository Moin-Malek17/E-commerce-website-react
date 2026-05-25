import { useNavigate, useParams } from "react-router"
import { useDataContext } from "../context/dataContex"
import { LuShare } from "react-icons/lu";

import {FaStar} from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import { useCartContext } from "../context/cartContext";
const SingleProduct = () => {
  const {id}=useParams()
  const navigate=useNavigate()
  const {products,color}=useDataContext()
  const {addToCart}=useCartContext()
  const product = products.find(item=>item.id===Number(id))
  const [images,setImages]=useState(product?.images)
  const swapImg=(clickedIndex)=>{
    const updateImages=[...images];
    // swap
    [updateImages[0],updateImages[clickedIndex]]=[updateImages[clickedIndex],updateImages[0]]
    setImages(updateImages)
  }
  const prevImg = () => {
    if (!images || images.length < 2) return;
    const updated = [...images];
    const last = updated.pop();
    updated.unshift(last);
    setImages(updated);
  }
  const nextImg = () => {
    if (!images || images.length < 2) return;
    const updated = [...images];
    const first = updated.shift();
    updated.push(first);
    setImages(updated);
  }

  return (
    <div className="text-dark ">
      <div className="text-dark/60 px-6 my-1"><span className="cursor-pointer me-2 " onClick={()=>navigate(`/`)}>Home &gt;</span><span className="cursor-pointer me-2" onClick={()=>navigate(`/product`)}>Products &gt;</span><span className="text-dark cursor-pointer">{product?.title}</span></div>
      <div className="min-h-[calc(100vh-160px)] grid grid-cols-1 lg:grid-cols-[40%_55%] justify-center gap-4 lg:gap-6 px-4 lg:px-0">
        {/* left side  / imgs div*/}
        <div className="bg-category p-4 w-full rounded-xl">
          {/* main img div */}
          <div className="w-full flex flex-col  mt-4 md:mt-6 lg:mt-8 ">
            <div className="w-full flex  justify-center  shadow">
              <div className={`w-[65%] aspect-square   ${images?.length < 2 ?"w-full h-full " : ""}`}><img className="w-full" src={images?.[0]} alt={product?.images} /></div>
              <div className="w-[20%] bg-category border border-dark/10 flex flex-col justify-between items-center px-2">
                <div className="flex flex-col items-center justify-between gap-2 py-4">
                  {/* sharing is not working bcz i dont have anyfunctinality for it */}
                  <div className="bg-category p-2 rounded-lg "><LuShare className="w-5 h-5 cursor-pointer"/></div>
                </div>
                
                    {
                      images?.length > 1 && 
                    <div className="flex flex-col items-center justify-between gap-2 py-4">  
                      <div role="button" aria-label="previous image" onClick={prevImg} className="bg-category p-2 rounded-lg size-10 text-3xl flex items-center justify-center pt-2 cursor-pointer select-none hover:bg-category/80 hover:shadow-md">&lt;</div>
                      <div role="button" aria-label="next image" onClick={nextImg} className="bg-category p-2 rounded-lg size-10 text-3xl flex items-center justify-center pt-2 cursor-pointer select-none hover:bg-category/80 hover:shadow-md">&gt;
                      </div>
                    </div>
                    }
                    
              </div>
            </div>
            {
              product?.images?.length >1 && 
              <div className="flex  justify-center w-full  gap-3  h-32.5 aspect-square mt-3">
                {images?.slice(1).map((img,index)=>(<img key={index} className="h-full shadow cursor-pointer  aspect-square" onClick={()=>swapImg(index+1)} src={img}></img>))}
              </div>
            }
          </div>
        </div>
        {/* right side */}
        <div className="bg-category rounded-xl w-full">
          <div className="w-full lg:w-[80%] mx-auto px-4 lg:px-0">
              <div className="text-xl font-semibold my-4">{product?.title}</div>
              <div className="mb-2">
                <h3 className="font-semibold mb-2">Description:</h3>
                <p className="line-clamp-3 font-light leading-5 px-3">{product?.description}</p>
              </div>
              {/* hr */}
              <hr className="border-t-2 border-gray-400 my-4" />
              {/* hr end */}
              <div className="flex items-center justify-center mb-2">({product?.reviews?.length} Review)</div>
              {/* brand and other stuff table type data */}
              <div className="flex flex-col">
                <div className="flex gap-3 mb-1"><div className="font-semibold">Brand :</div>{product?.brand}</div>
                <div className="flex gap-3 mb-1"><div className="font-semibold">Category :</div>{product?.category}</div>
                <div className="flex gap-3 mb-1"><div className="font-semibold">Weight :</div>{product?.weight} gm</div>
                <div className="flex gap-3 mb-1"><div className="font-semibold">Dimentions :</div>
                                            <div className="flex gap-3 ">
                                              <div><span className="me-2 font-semibold text-dark/50">Width :</span>{product?.dimensions?.width}</div>
                                              <div><span className="me-2 font-semibold text-dark/50">Height :</span>{product?.dimensions?.height}</div>
                                              <div><span className="me-2 font-semibold text-dark/50">Depth :</span>{product?.dimensions?.depth}</div>
                                           </div>
                </div>
              </div>
              {/*end brand and other stuff table type data */}
              <div className="flex gap-3 mb-1"><div className="font-semibold">Return Policy :</div><div>{product?.returnPolicy}</div></div>
              <div className="flex gap-3 mb-1"><div className="font-semibold">Warrany :</div><div>{product?.warrantyInformation}</div></div>
              <div className="mb-2 flex items-center" ><div className="font-semibold">Rating :</div> <span className="ms-2  flex items-center justify-center gap-1"><FaStar className="fill-amber-300 -mt-0.5"/>{product?.rating}</span> </div>
              <div className="flex items-center justify-between my-2">
                <div className="flex items-center gap-3">
                  <div style={{color : color.red,fontSize : "20px"}}>${product?.price}</div>
                  <div className="line-through" style={{fontSize : "15px"}}>${((100 * product?.price)/(100-product?.discountPercentage)).toFixed(3)}</div>
                </div>
              </div>
              <button className="bg-greenish px-8 py-2 rounded-lg text-xl cursor-pointer hover:bg-greenish/80 hover:shadow hover:border hover:border-white transition-all duration-35 font-semibold uppercase text-white flex items-center justify-center my-4" onClick={()=>addToCart(product?.id,product)}><MdOutlineShoppingCart className="me-2" />Add to Cart</button>
          </div>
        </div>
      </div>
      {/* review */}
      <div className="w-full px-4 py-6 flex flex-col items-center justify-center gap-5">
        <div className="text-2xl font-semibold mt-3">Reviews</div>
        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-center">
          {product?.reviews && product?.reviews.map((review,index)=>(
          <div key={index} className="flex flex-col border-2 border-dashed border-gray-300 px-4 py-4 rounded-2xl w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
            <div className="mb-1"><span className="me-3 font-semibold">Name :</span>{review?.reviewerName}</div>
            <div className="mb-1"><span className="me-3 font-semibold">Date :</span>{review?.date}</div>
            <div className="mb-1"><span className="me-3 font-semibold">Rating :</span>{review?.rating}</div>
            <div className="mb-1"><span className="me-3 font-semibold">Comment :</span>{review?.comment}</div>
            <div className="mb-1"><span className="me-3 font-semibold text-xs overflow-hidden text-ellipsis">Email :</span>{review?.reviewerEmail}</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default SingleProduct