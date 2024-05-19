

const CheifItem = ({item}) => {
    const {image, name, recipe} = item;
    return (
        <div className="bg-gray-300 p-4 gap-3 flex flex-col justify-center items-center rounded-md">
            <img className="rounded-xl w-full h-[200px]" src={image} alt="" />
            <h1 className="tex-xl font-bold text-black">{name}</h1>
            <h1 className="text-[13px] text-gray-500 font-semibold">{recipe}</h1>
            <button className="p-2 border-b-4  hover:bg-yellow-500 border-black rounded-xl text-black  text-[12px] border font-semibold ">ADD TO CART</button>
        </div>
    );
};

export default CheifItem;