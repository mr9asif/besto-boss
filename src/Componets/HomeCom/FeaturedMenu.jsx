import Title from "../../Shared/Title";
import featured from '/src/assets/assets/home/featured.jpg'

const FeaturedMenu = () => {
    return (
        <div className="featured max-w-8xl mx-auto p-8 h-[600px] my-8">
            <Title header='check it out' underheader='FEATURED MENU'></Title>
             <div className="flex justify-center items-center my-8 gap-5 max-w-6xl mx-auto">
                <div className=" w-[50%]">
                  <img src={featured} alt="" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-white">March 20, 2024</h1>
                  <h1 className="text-xl font-semibold text-white">WHERE CAN I GET SOME?</h1>
                  <p className="text-[13px] font-semibold text-white">BestroBoss Restaurant serves mouth-watering, gourmet dishes made from fresh, local ingredients, ensuring an unforgettable culinary experience every visit</p>
                </div>
             </div>
            
        </div>
    );
};

export default FeaturedMenu;