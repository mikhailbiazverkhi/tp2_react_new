import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import fetchAddCheckout from "./fetchAddCheckout";

function CheckoutForm() {
  const [validated, setValidated] = useState(false);
  // const { productId } = useParams();

  return (
    <>
      <h1 className="my-3">Checkout</h1>
      <Form
        noValidate
        validated={validated}
        onSubmit={(e) => {
          const form = e.target;
          const formData = new FormData(form);
          if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            formData.append("total", 1);
            const serializedData = Object.fromEntries(formData.entries());
            fetchAddCheckout(serializedData);
          }
          setValidated(true);
        }}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Contact Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="contactName"
              placeholder="Contact Name"
              defaultValue="Mikhail"
            />
            <Form.Control.Feedback type="invalid">
              Entrez Contact Name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Courriel</Form.Label>
            <Form.Control
              required
              type="text"
              name="contactEmail"
              placeholder="Courriel"
              defaultValue="2197783@cstjean.qc.ca"
            />
            <Form.Control.Feedback type="invalid">
              Entrez Courriel
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="contactFirstName"
              placeholder="First Name"
              defaultValue="Mikhail"
            />
            <Form.Control.Feedback type="invalid">
              Entrez First Name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              name="contactLastName"
              placeholder="Last name"
              defaultValue="Biazverkhi"
            />
            <Form.Control.Feedback type="invalid">
              Entrez Last Name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Address Line1</Form.Label>
            <Form.Control
              required
              type="text"
              name="addressLine1"
              placeholder="Address Line1"
              defaultValue="string"
            />
            <Form.Control.Feedback type="invalid">
              Entrez Address Line
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Address Line2</Form.Label>
            <Form.Control
              required
              type="text"
              name="addressLine2"
              placeholder="Address Line2"
              defaultValue="string"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              placeholder="City"
              defaultValue="Brossard"
              required
            />
            <Form.Control.Feedback type="invalid">
              Entrez Ville
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Province</Form.Label>
            <Form.Control
              type="text"
              name="province"
              placeholder="Province"
              defaultValue="Québec"
              required
            />
            <Form.Control.Feedback type="invalid">
              Entrez Province
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              defaultValue="Y3H 4T4"
              required
            />
            <Form.Control.Feedback type="invalid">
              Entrez Code postal
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="text"
              name="contactPhone"
              placeholder="Phone number"
              defaultValue="+1 (514) 555-5555"
              required
            />
            <Form.Control.Feedback type="invalid">
              Entrez Phone number
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Credit Card Number</Form.Label>
            <Form.Control
              required
              type="text"
              name="creditCardNumber"
              placeholder="xxxxyyyyzzzzhhhh"
              defaultValue="4242424242424242"
            />
            <Form.Control.Feedback type="invalid">
              Entrez Credit Card Number
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Expiration Month</Form.Label>
            <Form.Control
              required
              type="number"
              min="1"
              max="12"
              name="creditCardExpirationMonth"
              placeholder="Expiration Month"
              defaultValue="5"
            />
            <Form.Control.Feedback type="invalid">
              Entrez Expiration Month
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="2">
            <Form.Label>Expiration Year</Form.Label>
            <Form.Control
              required
              type="number"
              min="2023"
              max="2030"
              name="creditCardExpirationYear"
              placeholder="Expiration Year"
              defaultValue="2024"
            />
            <Form.Control.Feedback type="invalid">
              Entrez Expiration Year
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="2">
            <Form.Label>CVV</Form.Label>
            <Form.Control
              required
              type="number"
              min="100"
              max="999"
              name="creditCardCvv"
              placeholder="CVV"
              defaultValue="555"
            />
            <Form.Control.Feedback type="invalid">
              Entrez CVV
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="2">
            <Form.Label>Shipping Mode</Form.Label>
            <Form.Control
              type="text"
              name="shippingMode"
              placeholder="Shipping Mode"
              defaultValue="standard"
              required
            />
            <Form.Control.Feedback type="invalid">
              Entrez Shipping Mode
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <Link to="/achats/">
            <Button className="mt-3" type="submit">
              Payer
            </Button>
          </Link>
          <Link to="/panier/">
            <Button className="mt-3" variant="secondary">
              Arrière
            </Button>
          </Link>
        </div>
      </Form>
    </>
  );
}

export default CheckoutForm;
