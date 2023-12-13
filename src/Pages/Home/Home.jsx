import { useEffect } from "react";
import { useState } from "react";

import BearCard from "../../components/BearCard/BearCard";
import { Button, Input } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [allData, setAllData] = useState([]);
  const [search, setSearch] = useState("");
  const onChange = ({ target }) => setSearch(target.value);
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  const data =search ? allData.filter(data => {
    const testText = data.name.toLowerCase()
    return testText.includes(search.toLowerCase());
  }): allData;

  return (
    <div className=" container mx-auto">
      <h1 className="text-5xl mt-9 font-bold text-center mb-16">
        Bears You Like Most
      </h1>

      {/* search box */}
      <div className="relative flex w-full max-w-[24rem] mx-auto my-12">
      <Input
        type="search"
        label="Search here"
        
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={search ? "gray" : "blue-gray"}
        disabled={!search}
        variant="text"
        className="!absolute right-1 top-1 rounded"
      >
        <FaSearch className="text-xl"/>
      </Button>
    </div>

      {/* cards */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((bear) => (
          <BearCard key={bear.id} card={bear} />
        ))}
      </div>
    </div>
  );
};

export default Home;
