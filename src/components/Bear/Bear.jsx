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
import PropTypes from "prop-types";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const Bear = ({ bear }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Card className="w-full h-fit md:max-w-[48rem] flex-row mx-auto shadow-lg">
      {/* card image */}
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-1/4 flex items-center justify-center   shrink-0 rounded-r-none"
      >
        <img
          src={bear.image_url}
          alt="bear-image"
          className="w-1/3  object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {bear.name}
        </Typography>

        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {bear.tagline}
        </Typography>

        <Typography color="gray" className="mb-8 font-normal">
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
        <div className="flex items-center gap-3 mt-4">
          <p className="text-sm">
            <span className="font-bold">Volume:</span> {bear.volume.value}{" "}
            {bear.volume.unit}
          </p>
          <p className="text-sm">
            <span className="font-bold">Boil volume:</span>{" "}
            {bear.boil_volume.value} {bear.boil_volume.unit}
          </p>
          <Menu>
            <MenuHandler>
              <Button
                variant="text"
                className="flex items-center gap-1 text-gray-700"
              >
                Method <MdArrowDropDown className="text-xl" />
              </Button>
            </MenuHandler>
            <MenuList>
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
                {bear.method.fermentation.temp.value} {bear.method.fermentation.temp.unit}
              </MenuItem>
              <MenuItem>Twist</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </CardBody>
    </Card>
  );
};

Bear.propTypes = {
  bear: PropTypes.object.isRequired,
};

export default Bear;
