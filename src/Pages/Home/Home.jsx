
import { useEffect } from "react";
import { useState } from "react";
import Bear from "../../components/Bear/Bear";



const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    console.log(data)
    return (
        <div className=" container mx-auto">
            <h1 className="text-5xl mt-9 font-bold text-center mb-16">Bears You Like Most</h1>
        <div className="mx-auto grid grid-cols-1 gap-6">
        {
            data?.map(bear => <Bear key={bear.id} bear={bear}/>)
        }
        </div>
        
        </div>
    );
};

export default Home;