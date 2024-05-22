import { Helmet } from "react-helmet-async";
import Banner from "../Componets/HomeCom/Banner";
import CallUs from "../Componets/HomeCom/CallUs";
import CheifRecomended from "../Componets/HomeCom/CheifRecomended";
import ChiefService from "../Componets/HomeCom/ChiefService";
import FeaturedMenu from "../Componets/HomeCom/FeaturedMenu";
import Footer from "../Componets/Footer";
import OrderOnline from "../Componets/HomeCom/OrderOnline";
import PopularMenu from "../Componets/HomeCom/PopularMenu";
import Reviews from "../Componets/HomeCom/Reviews";



const Home = () => {
    return (
        <div>
        <Helmet>
        <title>Bestro Boss </title>
       
      </Helmet>
           <Banner></Banner>
           <OrderOnline></OrderOnline>
           <ChiefService></ChiefService>
           <PopularMenu></PopularMenu>
           <CallUs></CallUs>
           <CheifRecomended></CheifRecomended>
           <FeaturedMenu></FeaturedMenu>
           <Reviews></Reviews>
           
        </div>
    );
};

export default Home;