import { Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import fetchAddCommentaire from "./fetchAddCommentaire";

// eslint-disable-next-line react/prop-types
function AjouterCommentaire({ productId }) {
  return (
    <>
      {/* <h3 className="my-3">Ajouter le commentaire</h3> */}
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          formData.append("productId", productId);
          const serializedData = Object.fromEntries(formData.entries());
          fetchAddCommentaire(serializedData);
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label column sm="2">
            {/* <h6>Ajouter le commentaire</h6> */}
          </Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            name="content"
            placeholder="Enter your comment"
            required
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
}

export default AjouterCommentaire;
