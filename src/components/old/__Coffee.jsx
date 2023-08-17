import { Card, Button } from "react-bootstrap";

function Coffee(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.pictureUrl} alt={props.name} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="danger">Supprimer</Button>
      </Card.Body>
    </Card>
  );
}

export default Coffee;
