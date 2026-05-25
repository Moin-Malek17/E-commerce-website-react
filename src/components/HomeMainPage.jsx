import { useDataContext } from "../context/dataContex"
import HomeCategory from "./HomeCategory"
import HomeImgDiv1 from "./HomeImgDiv1"
import HomeImgDiv2 from "./HomeImgDiv2"
import HomeMensCategory from "./HomeMensCategory"
import HomeWomenCategory from "./HomeWomenCategory"
import HomeSecDivImgDiv1 from "./HomeSecDivImgDiv1"
import HomeExploreProductTag from "./HomeExploreProductTag"
const HomeMainPage = () => {
    const { isLoading } = useDataContext()

    if (isLoading) {
      return (
        <div className="w-full xl:max-w-7xl md:px-6 px-4 py-6 mx-auto space-y-6">
          <div className="flex flex-col lg:flex-row justify-center gap-6">
            <div className="flex-1 rounded-2xl border border-cardBorder bg-white/70 p-4 shadow-sm animate-pulse h-64"></div>
            <div className="lg:flex-[2] flex-1 rounded-2xl border border-cardBorder bg-white/70 p-4 shadow-sm animate-pulse h-64"></div>
            <div className="flex-1 rounded-2xl border border-cardBorder bg-white/70 p-4 shadow-sm animate-pulse h-64"></div>
          </div>

          <div className="bg-cardBg shadow-sm border border-cardBorder w-full p-4 rounded-2xl animate-pulse">
            <div className="h-40 bg-white/70 rounded-2xl"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cardBg shadow-sm border border-cardBorder w-full p-6 rounded-2xl animate-pulse h-48"></div>
            <div className="bg-cardBg shadow-sm border border-cardBorder w-full p-6 rounded-2xl animate-pulse h-48"></div>
          </div>

          <div className="bg-cardBg shadow-sm border border-cardBorder w-full p-6 rounded-2xl animate-pulse h-32"></div>
        </div>
      )
    }

  return (
    <div className="w-full xl:max-w-7xl md:px-6 px-4 py-6 mx-auto space-y-6">
        {/* first div */}
        <div className="flex flex-col lg:flex-row justify-center gap-6">
            {/* catergory sec */}
            <div className="hidden lg:block flex-1 hover-lift bg-cardBg rounded-2xl border border-cardBorder p-4 shadow-sm" ><HomeCategory/></div>
            {/* imge div 1 */}
            <div className="lg:flex-[2] flex-1 hover-lift rounded-2xl overflow-hidden shadow-sm border border-cardBorder"><HomeImgDiv1/></div>
            {/* img div 2 */}
            <div className="flex-1 hover-lift rounded-2xl overflow-hidden shadow-sm border border-cardBorder"><HomeImgDiv2/></div>
        </div>
        
        {/* sec div  */}
        <div className="bg-cardBg shadow-sm border border-cardBorder w-full p-4 rounded-2xl hover-lift"><HomeSecDivImgDiv1/></div>

        {/* man category */}
        <div className="bg-cardBg shadow-sm border border-cardBorder w-full p-6 rounded-2xl"><HomeMensCategory/></div>
        
        {/* women category */}
        <div className="bg-cardBg shadow-sm border border-cardBorder w-full p-6 rounded-2xl"><HomeWomenCategory/></div>
        
        {/* explore product tag */}
        <div className="bg-cardBg shadow-sm border border-cardBorder w-full p-3 md:p-4 lg:p-6 rounded-2xl -mb-10 lg:mb-0"><HomeExploreProductTag/></div>

    </div>
  )
}

export default HomeMainPage