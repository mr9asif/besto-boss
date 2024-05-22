
import Title from "../../Shared/Title";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../Hooks/useMenu";


const PopularMenu = () => {
        const [menu, loading] = useMenu();
        const popular = menu.filter(item=> item.category === 'popular');

        if(loading){
            return <h1>Loading........</h1>
        }
    return (
        <div className="max-w-7xl mx-auto my-6">
            <Title header='Check it out-' underheader='POPULAR MENU' ></Title>
              
            <div className="md:grid lg:grid grid-cols-2 gap-8 my-8">
             {
                popular.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
             }
            </div>
           <div className="text-center my-12">
           <button className="p-2 border-b-4  hover:bg-yellow-500 border-black rounded-xl text-black  text-xl font-semibold ">View Full Menu</button>
           </div>
        </div>
    );
};

export default PopularMenu;