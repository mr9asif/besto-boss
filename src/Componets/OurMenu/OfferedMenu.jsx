
import { Link } from 'react-router-dom';
import useMenu from '../../Hooks/useMenu';
import MenuItem from '../../Shared/MenuItem';
import Title from '../../Shared/Title';

const OfferedMenu = () => {
    const [menu, loading] = useMenu();
    const offered = menu.filter(item=> item.category === 'offered');

    if(loading){
        return <h1>Loading........</h1>
    }
    return (
        <div>
        <div className="max-w-7xl mx-auto my-6">
        <Title header="Don't miss" underheader="TODAY'S OFFER" ></Title>
          
        <div className="md:grid lg:grid grid-cols-2 gap-8 my-8">
         {
            offered.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
         }
        </div>
       <div className="text-center my-12">
       <Link to='/shop/offered' className="p-2 border-b-4  hover:bg-yellow-500 border-black rounded-xl text-black  text-xl font-semibold ">ORDER YOUR FAVOURITE FOOD</Link>
       </div>
    </div>
        </div>
    );
};

export default OfferedMenu;