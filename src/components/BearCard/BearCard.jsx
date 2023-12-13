import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const BearCard = ({ card }) => {
  return (
    <div>
      <Card className="hover:shadow-2xl border-2">
        <CardHeader shadow={false} floated={false} className="h-64">
          <img
            src={card.image_url}
            alt="card-image"
            className="h-full mx-auto"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2">
            <Typography color="blue-gray" variant="h5" className="font-medium">
              {card.name}
            </Typography>
            
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {card.tagline}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={`/details/${card.id}`}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/30 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            See Details
          </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BearCard;
