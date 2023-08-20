import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchGetCoffee from "./js_fetchCoffeesFuncs/fetchGetCoffee";
import { Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import supprimerCoffee from "./js_fetchCoffeesFuncs/fetchDeleteCoffee";

const CoffeeDetails = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchGetCoffee);

  if (results.isError) {
    return <h1>Error! Coffee details are not found</h1>;
  }

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  const coffee = results.data;

  return (
    <div className="coffee-details">
      <h1>{coffee.name}</h1>

      <div className="d-flex flex-wrap" style={{ gap: "30px" }}>
        <img className="image-coffee" src={coffee.pictureUrl} />
        <div>
          <h3>Description: </h3>
          <h4>{coffee.description}</h4>
        </div>
      </div>

      <div className="d-flex" style={{ gap: "50px" }}>
        <Button variant="danger" onClick={() => supprimerCoffee(id)}>
          Supprimer
        </Button>
        <Link to="/coffees/">
          <Button variant="secondary">Arrière</Button>
        </Link>
      </div>
    </div>
  );
};

export default CoffeeDetails;
