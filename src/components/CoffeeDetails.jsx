import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchGetCoffee from "./fetchGetCoffee";
import { Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import supprimerCoffee from "./fetchDeleteCoffee";

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
    /////////////////////////////////////////////////////
    ///trouver Bootstrap
    <div>
      <h1>{coffee.name}</h1>
      <img src={coffee.pictureUrl} />
      <h3>Description: {coffee.description}</h3>
      <div className="d-flex justify-content-between">
        <Button variant="danger" onClick={() => supprimerCoffee(id)}>
          Supprimer
        </Button>
        <Link to="/">
          <Button variant="secondary">Arrière</Button>
        </Link>
      </div>
    </div>
  );
};

export default CoffeeDetails;
