import { useEffect, useState } from "react";
import Title from "../Shared/Title";
import MenuItem from "../Shared/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu]=useState([])
    useEffect(()=>{
         fetch('Menu.json')
         .then(res=>res.json())
         .then(data=>{
             const popular = data.filter(item=> item.category === 'popular');
             console.log(popular) 
             setMenu(popular)
            
         })
    },[])
    return (
        <div className="max-w-7xl mx-auto my-6">
            <Title header='Check it out-' underheader='POPULAR MENU' ></Title>
              
            <div className="md:grid lg:grid grid-cols-2 gap-8 my-8">
             {
                menu.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
             }
            </div>
           <div className="text-center my-12">
           <button className="p-2 border-b-4  hover:bg-yellow-500 border-black rounded-xl text-black  text-xl font-semibold ">View Full Menu</button>
           </div>
        </div>
    );
};

export default PopularMenu;