import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Bear = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openTwist, setOpenTwist] = useState(false);
  const [bear] = useLoaderData();
  const navigate = useNavigate();
   
  return (
   <div className="container mx-auto ">
    
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen">
    <Button variant="text" onClick={() => navigate(-1)} className="flex items-center gap-1"><FaArrowLeftLong className="text-xl"/>Back</Button>
     <Card className="w-full h-fit md:max-w-[48rem] flex-row mx-auto shadow-lg border-2">
      {/* card image */}
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-1/4 flex items-center justify-center   shrink-0 rounded-r-none"
      >
        <img
          src={bear.image_url}
          alt="bear-image"
          className="w-2/3  object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {bear.name}
        </Typography>

        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {bear.tagline}
        </Typography>

        <Typography color="gray" className="mb-8 text-sm font-normal">
          {bear.description}
        </Typography>

        {/* specifications  */}
        <div className="flex items-center gap-3">
          <p className="text-sm">
            <span className="font-bold">ABV:</span> {bear.abv}
          </p>
          <p className="text-sm">
            <span className="font-bold">IBU:</span> {bear.ibu}
          </p>
          <p className="text-sm">
            <span className="font-bold">EBC:</span> {bear.ebc}
          </p>
          <p className="text-sm">
            <span className="font-bold">SRM:</span> {bear.srm}
          </p>
          <p className="text-sm">
            <span className="font-bold">pH:</span> {bear.ph}
          </p>
          <p className="text-sm">
            <span className="font-bold">Attenuation level:</span>{" "}
            {bear.attenuation_level}
          </p>
        </div>

        {/* methods */}
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          <p className="text-sm">
            <span className="font-bold">Volume:</span> {bear?.volume?.value}{" "}
            {bear.volume.unit}
          </p>
          <p className="text-sm">
            <span className="font-bold">Boil volume:</span>{" "}
            {bear.boil_volume.value} {bear.boil_volume.unit}
          </p>
          {/* menu for methods */}
          <Menu>
            <MenuHandler>
              <Button
                variant="text"
                size="sm"
                className="flex items-center gap-1 text-gray-700"
              >
                Method <MdArrowDropDown className="text-xl" />
              </Button>
            </MenuHandler>
            <MenuList>
              {/* Mash Temperature */}
              <Menu
                placement="right-start"
                open={openMenu}
                handler={setOpenMenu}
                allowHover
                offset={15}
              >
                <MenuHandler className="flex items-center justify-between">
                  <MenuItem>
                    Mash Temperature
                    <MdArrowDropDown
                      className={`h-3.5 w-3.5 text-xl transition-transform ${
                        openMenu ? "-rotate-90" : ""
                      }`}
                    />
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  {bear.method.mash_temp.map((mash, idx) => (
                    <MenuItem key={idx}>
                      {mash.temp.value} {mash.temp.unit}
                      {mash.duration !== null && `, ${mash.duration} min`}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>

              <MenuItem>
                <span className="font-bold">Fermentation:</span>{" "}
                {bear.method.fermentation.temp.value}{" "}
                {bear.method.fermentation.temp.unit}
              </MenuItem>

              {/* twist menu */}
              {bear.method.twist && (
                <Menu
                  placement="right-start"
                  open={openTwist}
                  handler={setOpenTwist}
                  allowHover
                  offset={15}
                >
                  <MenuHandler className="flex items-center justify-between">
                    <MenuItem>
                      Twist
                      <MdArrowDropDown
                        className={`h-3.5 w-3.5 text-xl transition-transform ${
                          openTwist ? "-rotate-90" : ""
                        }`}
                      />
                    </MenuItem>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem>{bear.method.twist}</MenuItem>
                  </MenuList>
                </Menu>
              )}
            </MenuList>
          </Menu>

          {/* menu for ingredients */}
          <Menu>
            <MenuHandler>
              <Button
                variant="text"
                size="sm"
                className="flex items-center gap-1 text-gray-700"
              >
                Ingredients <MdArrowDropDown className="text-xl" />
              </Button>
            </MenuHandler>
            <MenuList>
              {/* Menu for malt */}
              <Menu
                placement="right-start"
                open={openMenu}
                handler={setOpenMenu}
                allowHover
                offset={15}
              >
                <MenuHandler className="flex items-center justify-between">
                  <MenuItem>
                    Malt
                    <MdArrowDropDown
                      className={`h-3.5 w-3.5 text-xl transition-transform ${
                        openMenu ? "-rotate-90" : ""
                      }`}
                    />
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  {bear.ingredients.malt.map((data, idx) => (
                    <MenuItem key={idx}>
                      {data.name}, {data.amount.value} {data.amount.unit}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              {/* menu for hops */}
              <Menu
                placement="right-start"
                open={openTwist}
                handler={setOpenTwist}
                allowHover
                offset={15}
              >
                <MenuHandler className="flex items-center justify-between">
                  <MenuItem>
                    Hops
                    <MdArrowDropDown
                      className={`h-3.5 w-3.5 text-xl transition-transform ${
                        openTwist ? "-rotate-90" : ""
                      }`}
                    />
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  {bear.ingredients.hops.map((data, idx) => (
                    <MenuItem key={idx}>
                      {data.name}, {data.amount.value} {data.amount.unit},{" "}
                      {data.add}
                      {`(${data.attribute})`}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <MenuItem>
                <span className="font-bold">Yeast:</span>{" "}
                {bear.ingredients.yeast}
              </MenuItem>
            </MenuList>
          </Menu>
        </div>

        {/* food_pairing */}
        <div className="mt-4">
            <h1 className="text-xl font-medium">Food Pairing: </h1>
            <ol className="ml-2 text-sm">
                {
                    bear.food_pairing.map((data, idx) => <li key={idx}>{idx+1}. {data}</li>)
                }
            </ol>
        </div>

        {/* brewers tips */}
        <div className="mt-4">
            <h1 className="text-xl font-medium">Brewers Tips</h1>
            <p className="mt-1 text-sm">{bear.brewers_tips}</p>
        </div>

        <p className="mt-4">
            <span className="font-bold">Contributed By:</span> {bear.contributed_by}
          </p>
        
      </CardBody>
    </Card>
    </div>
   </div>
  );
};



export default Bear;
