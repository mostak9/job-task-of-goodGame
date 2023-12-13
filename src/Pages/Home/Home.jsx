import { useEffect } from "react";
import { useState } from "react";
import Bear from "../../components/Bear/Bear";
import BearCard from "../../components/BearCard/BearCard";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className=" container mx-auto">
      <h1 className="text-5xl mt-9 font-bold text-center mb-16">
        Bears You Like Most
      </h1>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((bear) => (
          <BearCard key={bear.id} card={bear} />
        ))}
      </div>
    </div>
  );
};

export default Home;
