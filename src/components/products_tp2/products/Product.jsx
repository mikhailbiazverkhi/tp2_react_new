import { Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import fetchGetPromotions from "./fetchGetPromotions";
import { useQuery } from "@tanstack/react-query";

// eslint-disable-next-line react/prop-types
function Product({ id, name, price, image }) {
  const results = useQuery([{}], fetchGetPromotions);

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

  return (
    <Link title="Cliquez-moi" to={`/product-details/${id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>
            <div className="d-flex justify-content-between">
              {price} $
              {results.data.map(
                (promotion) =>
                  id == promotion.productId && (
                    <div key={id} style={{ background: "gold" }}>
                      <i className="fa-light fa-percent"></i>{" "}
                      {promotion.discountPercent * 100}
                    </div>
                  )
              )}
            </div>
          </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Product;
