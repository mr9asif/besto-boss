import { Helmet } from "react-helmet-async";
import { Parallax } from "react-parallax";
import MenuCover from "../Shared/MenuCover";

import shop  from '/src/assets/assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../Hooks/useMenu";
import CheifItem from "../Componets/HomeCom/CheifItem";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Shop = () => {
  window.scrollTo(0, 0)
     const [menu, loading] = useMenu();
    
     const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink'];
     
     const {category}= useParams();
     const initialIndex =categories.indexOf(category) 
     console.log(category)
     const [tabIndex, setTabIndex]= useState(initialIndex)
    const offered = menu.filter(item=> item.category === 'offered');
    const pizza = menu.filter(item=> item.category === 'pizza');
    const soup = menu.filter(item=> item.category === 'soup');
    const desserts = menu.filter(item=> item.category === 'dessert');
    const drinks = menu.filter(item=> item.category === 'drinks');
    
    return (
        <div>
        <Helmet>
        <title>Bestro Boss | Our Shop</title>
       
      </Helmet>
      <div>
                
      <div>
      <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={shop}
      bgImageAlt="the dog"
      strength={-200}
    
    
  >
     
      <MenuCover   title={'OUR SHOP'} details={'Would you like to try dish'}></MenuCover>
  </Parallax>
     
      </div>
      </div>

           <div className="max-w-7xl mx-auto my-4">
           <Tabs defaultIndex={tabIndex} onSelect={(Index)=> setTabIndex(Index)}>
           <TabList className={`flex justify-center items-center gap-7`}>
             <Tab className='text-yellow-400 font-bold cursor-pointer'>SALADS</Tab>
             <Tab className='text-yellow-400 font-bold cursor-pointer'>PIZZA</Tab>
             <Tab className='text-yellow-400 font-bold cursor-pointer'>SOUPS</Tab>
             <Tab className='text-yellow-400 font-bold cursor-pointer'>DESERTS</Tab>
             <Tab className='text-yellow-400 font-bold cursor-pointer'>DRINKS</Tab>
           </TabList>
       
           <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
            {
                offered.map(item=><CheifItem key={item._id} item={item}></CheifItem>)
             }
             </div>
           </TabPanel>
           <TabPanel>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
            {
                pizza.map(item=><CheifItem key={item._id} item={item}></CheifItem>)
             }
             </div>
           </TabPanel>
           <TabPanel>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
            {
                soup.map(item=><CheifItem key={item._id} item={item}></CheifItem>)
             }
             </div>
           </TabPanel>
           <TabPanel>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
            {
                desserts.map(item=><CheifItem key={item._id} item={item}></CheifItem>)
             }
             </div>
           </TabPanel>
           <TabPanel>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
            {
                drinks.map(item=><CheifItem key={item._id} item={item}></CheifItem>)
             }
             </div>
           </TabPanel>
         </Tabs>
         </div>

        </div>
        
    );
};

export default Shop;