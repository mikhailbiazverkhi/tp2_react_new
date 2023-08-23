import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Product({ id, name, price, image }) {
  return (
    <Link title="Cliquez-moi" to={`/product-details/${id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{price} $</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Product;
