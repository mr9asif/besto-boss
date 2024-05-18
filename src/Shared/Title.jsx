

const Title = ({header, underheader}) => {
    return (
        <div className="mx-auto w-4/12 ">
            <h1 className="text-orange-600 text-center   font-bold text-xl">...{header}...</h1>
            <h1 className="text-gray-800 mt-4  border-y-4 py-3   font-bold my-4 text-center text-2xl">{underheader}</h1>
        </div>
    );
};

export default Title;