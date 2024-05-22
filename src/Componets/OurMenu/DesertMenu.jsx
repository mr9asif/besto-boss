import { Link } from "react-router-dom";
import useMenu from "../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem";



const DesertMenu = () => {
    const [menu, loading] = useMenu();
        const deserts = menu.filter(item=> item.category === 'dessert');

        if(loading){
            return <h1>Loading........</h1>
        }
    return (
        <div>
        <div className="max-w-7xl mx-auto my-6">
       
          
        <div className="md:grid lg:grid grid-cols-2 gap-8 my-8">
         {
            deserts.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
        }
        </div>
        <div className="text-center my-12">
        <Link to={`/shop/dessert`} className="p-2 border-b-4  hover:bg-yellow-500 border-black rounded-xl text-black  text-xl font-semibold ">ORDER YOUR FAVOURITE FOOD</Link>
       </div>
    </div>
        </div>
    );
};

export default DesertMenu;