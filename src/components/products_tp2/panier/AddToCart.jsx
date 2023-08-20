import { Button } from "react-bootstrap";
import { useState } from "react";
import fetchAddToCart from "./fetchAddToCart";
import { useParams } from "react-router-dom";

function AddToCart() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <h3>Ajouter au panir: </h3>
      <div className="d-flex">
        <div style={{ padding: "0px 15px" }}>
          <h4>{quantity}</h4>
        </div>

        <Button variant="light" onClick={handleDecrement}>
          -
        </Button>
        <Button variant="light" onClick={handleIncrement}>
          +
        </Button>

        <Button
          className="mx-3"
          variant="primary"
          onClick={() => fetchAddToCart(id, quantity)}
        >
          Ajouter
        </Button>
      </div>
    </>
  );
}

export default AddToCart;
