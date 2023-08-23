import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fetchGetProduct from "../js_fetchProductsFuncs/fetchGetProduct";
import AddToCart from "../panier/addToCart";
import AddToList from "../liste-de-souhaits/AddToList";
import GetProductComments from "../commentaire/GetProductComments";
import AjouterCommentaire from "../commentaire/AjouterCommentaire";

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
    <>
      <div className="product-details">
        <h1>{product.name}</h1>
        <h3>{product.category.name}</h3>

        <div className="d-flex flex-wrap" style={{ gap: "10px" }}>
          <img className="image-product" src={product.image} />
          <div
            className="d-flex flex-column"
            style={{ gap: "10px", maxWidth: "800px" }}
          >
            <h3>Couleur: </h3>
            <div
              className="product-color"
              style={{ backgroundColor: product.color.hexCode }}
            ></div>
            <h3>Price: {product.price} $</h3>
            <h3>Description: </h3>
            <h4>{product.description}</h4>
            <AddToCart />
            <AddToList />
          </div>
        </div>

        <div className="d-flex justify-content-end" style={{ width: "100%" }}>
          <Link to={`/category-details/${product.category.id}`}>
            <Button variant="secondary">Arrière</Button>
          </Link>
        </div>
      </div>
      <h3 style={{ textAlign: "start" }}>Ajouter le commentaire</h3>
      <AjouterCommentaire productId={id} />
      <h3 style={{ textAlign: "start" }}>Commentaires</h3>
      <GetProductComments productId={id} />
    </>
  );
};

export default ProductDetails;
