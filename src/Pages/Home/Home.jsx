import { Button } from "@material-tailwind/react";
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
        <div className="text-2xl font-medium">
            <h1>Bears You Like Most</h1>
        <Bear/>
        </div>
    );
};

export default Home;