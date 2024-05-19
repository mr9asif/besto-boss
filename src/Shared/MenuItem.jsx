

const MenuItem = ({item}) => {
    const {image, recipe , price, name}= item
    return (
        <div className="flex justify-center items-center gap-5">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[90px] rounded-t-0" src={image} alt="" />
            <div>
               <h1 className="text-xl font-bold text-black">{name}</h1>
               <h1 className="text-gray-500 font-semibold text-[13px]">{recipe}</h1>
            </div>
            <div>
             <h1 className="text-xl font-bold">${price}</h1>
            </div>
        </div>
    );
};

export default MenuItem;