import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Product({ id, name, price, image }) {
  return (
    <Link to={`/product-details/${id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{price} $</Card.Title>
          {/* <Card.Text>{description}</Card.Text> */}
          {/* <Button variant="danger">Supprimer</Button> */}
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Product;
