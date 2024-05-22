

const MenuCover = ({img, title, details}) => {
    return (
        <div className="">
        <div className="hero h-[600px]" style={{backgroundImage: `url("${img}")`}}>
        <div className="hero-overlay w-[60%] h-[45%]  bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" ">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{details}</p>
           
          </div>
        </div>
      </div>
        </div>
    );
};

export default MenuCover;