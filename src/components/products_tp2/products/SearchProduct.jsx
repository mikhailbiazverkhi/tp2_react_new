import { Row, Col, Form, Button } from "react-bootstrap";
import { useContext } from "react";
import SearchProductContext from "../SearchProductContext";

function SearchProduct() {
  // eslint-disable-next-line no-unused-vars
  const { setSearchProduct } = useContext(SearchProductContext);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const productName = formData.get("productName") ?? "";
        setSearchProduct(productName);
      }}
    >
      <Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            name="productName"
            placeholder="Search"
            className=" mr-sm-2"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchProduct;
