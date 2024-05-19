import Banner from "../Componets/Banner";
import CallUs from "../Componets/CallUs";
import CheifRecomended from "../Componets/CheifRecomended";
import ChiefService from "../Componets/ChiefService";
import FeaturedMenu from "../Componets/FeaturedMenu";
import Footer from "../Componets/Footer";
import OrderOnline from "../Componets/OrderOnline";
import PopularMenu from "../Componets/PopularMenu";
import Reviews from "../Componets/Reviews";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <OrderOnline></OrderOnline>
           <ChiefService></ChiefService>
           <PopularMenu></PopularMenu>
           <CallUs></CallUs>
           <CheifRecomended></CheifRecomended>
           <FeaturedMenu></FeaturedMenu>
           <Reviews></Reviews>
           <Footer></Footer>
        </div>
    );
};

export default Home;