import { useEffect, useState } from "react";
import Title from "../Shared/Title";
import CheifItem from "./CheifItem";


const CheifRecomended = () => {
    const [cheif, setCheif]=useState([]);
    useEffect(()=>{
        fetch('Cheif.json')
        .then(res=>res.json())
        .then(data=>{
             setCheif(data)
             console.log(data)
        })
    },[])
    return (
        <div className="max-w-7xl mx-auto my-10 ">
            <Title header='should Try' underheader='CHEIF RECOMENDED'></Title>

            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
             
             {
                cheif.map(item=><CheifItem key={item._id} item={item}></CheifItem>)
             }
            </div>
        </div>
    );
};

export default CheifRecomended;