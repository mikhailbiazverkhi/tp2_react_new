import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import fetchChangeProductQuality from "./fetchChangeProductQuality";

// eslint-disable-next-line react/prop-types
function ChangeQuantiteToCart({ productPrice, productId, oldQuantity }) {
  const [quantity, setQuantity] = useState(oldQuantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    fetchChangeProductQuality(productId, quantity);
  }, [productId, quantity]);

  return (
    <>
      <div className="d-flex">
        <div style={{ padding: "0px 15px" }}>
          <h5>Quantity: </h5>
          <h4>{quantity}</h4>
        </div>

        <Button variant="light" onClick={handleDecrement}>
          -
        </Button>
        <Button variant="light" onClick={handleIncrement}>
          +
        </Button>

        {/* <Button
          className="mx-3"
          variant="primary"
          onClick={() => fetchChangeProductQuality(productId, quantity)}
        >
          Corriger
        </Button> */}
      </div>
      <div className="mt-5">
        <h5 style={{ padding: "0px 15px" }}>
          Total price: {productPrice * quantity} $
        </h5>
      </div>
    </>
  );
}

export default ChangeQuantiteToCart;
