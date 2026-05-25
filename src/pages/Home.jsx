import HomeMainPage from "../components/HomeMainPage";
import { useEffect } from "react";
const Home = () => {
  useEffect(()=>{
      scrollTo(0,0)
    },[])
  return (
    <div className="flex items-center justify-center">
      <HomeMainPage />
    </div>
  );
};

export default Home;
