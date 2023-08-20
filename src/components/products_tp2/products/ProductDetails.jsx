import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fetchGetProduct from "../js_fetchProductsFuncs/fetchGetProduct";

const ProductDetails = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchGetProduct);

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

  const product = results.data;

  return (
    /////////////////////////////////////////////////////
    ///trouver Bootstrap
    <div className="product-details">
      <h1>{product.name}</h1>
      <h3>{product.category.name}</h3>

      <div className="d-flex" style={{ gap: "10px" }}>
        <img className="image-product" src={product.image} />
        <div>
          <h3>Couleur: </h3>
          <div
            className="product-color"
            style={{ backgroundColor: product.color.hexCode }}
          ></div>
          <h3>Description: </h3>
          <h4>{product.description}</h4>
        </div>
      </div>
      {/* <div
        className="product-color"
        style={{ backgroundColor: product.color.hexCode }}
      ></div>
      <h4>{product.description}</h4> */}

      <div className="d-flex justify-content-center">
        <Link to={`/category-details/${product.category.id}`}>
          <Button variant="secondary">Arrière</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
