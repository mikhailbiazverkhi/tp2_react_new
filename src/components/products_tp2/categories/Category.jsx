import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Category({ id, name, description }) {
  return (
    <Link to={`/category-details/${id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {/* <Button variant="danger">Supprimer</Button> */}
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Category;
