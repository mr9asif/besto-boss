import Banner from "../Componets/Banner";
import ChiefService from "../Componets/ChiefService";
import OrderOnline from "../Componets/OrderOnline";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <OrderOnline></OrderOnline>
           <ChiefService></ChiefService>
        </div>
    );
};

export default Home;