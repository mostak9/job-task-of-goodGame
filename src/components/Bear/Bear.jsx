import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

const Bear = ({ bear }) => {
  return (
    <Card className="w-full h-fit md:max-w-[48rem] flex-row mx-auto shadow-lg">
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
        <div className="flex items-center gap-3 mt-4">
          <p className="text-sm">
            <span className="font-bold">Volume:</span> {bear.volume.value}{" "}
            {bear.volume.unit}
          </p>
          <p className="text-sm">
            <span className="font-bold">Boil volume:</span>{" "}
            {bear.boil_volume.value} {bear.boil_volume.unit}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

Bear.propTypes = {
  bear: PropTypes.object.isRequired,
};

export default Bear;
