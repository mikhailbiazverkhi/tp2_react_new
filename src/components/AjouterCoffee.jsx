import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fetchAddCoffee from "./fetchAddCoffee";

function AjouterCoffee() {
  return (
    <>
      <h1 className="my-3">Ajouter du café</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const serializedData = Object.fromEntries(formData.entries());
          fetchAddCoffee(serializedData);
        }}
      >
        <Form.Group className="mt-5 mb-3">
          <Form.Label>Coffee name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter coffee name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Coffee description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Enter coffee description"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Coffee image Url</Form.Label>
          <Form.Control
            type="text"
            name="pictureUrl"
            placeholder="Enter coffee image Url"
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Submit
        </Button>

        <Link to="/">
          <Button variant="secondary">Arrière</Button>
        </Link>
      </Form>
    </>
  );
}

export default AjouterCoffee;
