import { Helmet } from "react-helmet-async";
import MenuCover from "../Shared/MenuCover";
import PopularMenu from "../Componets/HomeCom/PopularMenu";
import { Parallax } from "react-parallax";

import menu from '/src/assets/assets/menu/banner3.jpg'
import desert from '/src/assets/assets/menu/dessert-bg.jpeg'
import pizza from '/src/assets/assets/menu/pizza-bg.jpg'
import salads from '/src/assets/assets/menu/salad-bg.jpg'
import soups from '/src/assets/assets/menu/soup-bg.jpg'
import DesertMenu from "../Componets/OurMenu/DesertMenu";
import OfferedMenu from "../Componets/OurMenu/OfferedMenu";
import PizzaMenu from "../Componets/OurMenu/PizzaMenu";
import SaladsMenu from "../Componets/OurMenu/SaladsMenu";
import SoupMenu from "../Componets/OurMenu/SoupMenu";

const Menu = () => {
    return (
        <div>
        <Helmet>
        <title>Bestro Boss | Our Menu</title>
       
      </Helmet>

            <div className="">
               <div>
                
               <div>
               <Parallax
               blur={{ min: -15, max: 15 }}
               bgImage={menu}
               bgImageAlt="the dog"
               strength={-200}
             
             
           >
              
               <MenuCover   title={'OUR MENU'} details={'Would you like to try dish'}></MenuCover>
           </Parallax>
              
               </div>
               </div>
               <div>
                <OfferedMenu></OfferedMenu>
               </div>
               <div>
               <Parallax
               blur={{ min: -15, max: 15 }}
               bgImage={desert}
               bgImageAlt="the dog"
               strength={-200}
             
             
           >
              
               <MenuCover   title={'DESERT'} details={'Indulge in our heavenly desserts, crafted to perfection, offering a delightful finale to your dining experience.'}></MenuCover>
           </Parallax>
              
               </div>
               <div>
                 <DesertMenu></DesertMenu>
                 
               </div>
               <div>
               <Parallax
               blur={{ min: -15, max: 15 }}
               bgImage={pizza}
               bgImageAlt="the dog"
               strength={-200}
             
             
           >
              
               <MenuCover   title={'PIZZA'} details={'Savor our artisan pizzas, baked to perfection with fresh ingredients and authentic flavors that delight every palate.'}></MenuCover>
           </Parallax>
              
               </div>
               <div>
                 <PizzaMenu></PizzaMenu>
               </div>
               <div>
               <Parallax
               blur={{ min: -15, max: 15 }}
               bgImage={salads}
               bgImageAlt="the dog"
               strength={-200}
             
             
           >
              
               <MenuCover   title={'SALADS'} details={'Enjoy our fresh, vibrant salads, crafted with crisp vegetables and gourmet dressings for a healthy and delicious meal.'}></MenuCover>
           </Parallax>
              
               </div>
               <div>
                 <SaladsMenu></SaladsMenu>
               </div>
               <div>
               <Parallax
               blur={{ min: -15, max: 15 }}
               bgImage={soups}
               bgImageAlt="the dog"
               strength={-200}
             
             
           >
              
               <MenuCover   title={'SOUPS'} details={'Warm up with our hearty soups, simmered to perfection and bursting with rich, comforting flavors for every season.'}></MenuCover>
           </Parallax>
              
               </div>
               <div>
                 <SoupMenu></SoupMenu>
               </div>
            </div>
        </div>
    );
};

export default Menu;