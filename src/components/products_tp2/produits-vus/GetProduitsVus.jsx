import { useState, useEffect } from "react";
import Product from "../products/Product";
import { Row, Col, CloseButton } from "react-bootstrap";
import fetchDeleteProductVus from "./fetchDeleteProductVus";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

function GetProduitsVus() {
  const [produitsVus, setProduitsVus] = useState([]);

  useEffect(() => {
    fetch(
      `https://insta-api-api.0vxq7h.easypanel.host/suggestions/recently-viewed-products`
    )
      .then((res) => res.json())
      .then((produitsVus) => setProduitsVus(produitsVus));
  }, []);

  return (
    <>
      {produitsVus.length !== 0 && (
        <h2 className="my-5 text-center">
          Liste des produits vus précédemment
        </h2>
      )}
      <Row>
        {produitsVus.map((product) => (
          <Col className="colonne my-3" key={product.id}>
            <div key={product.id}>
              <Product key={product.id} {...product} />
              <div className="d-flex justify-content-center my-3">
                <CloseButton
                  title="Supprimer"
                  onClick={() => fetchDeleteProductVus(product.id)}
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default GetProduitsVus;
