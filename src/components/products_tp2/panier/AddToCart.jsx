import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import fetchAddToCart from "./fetchAddToCart";
import { useParams } from "react-router-dom";

function AddToCart() {
  const [quantity, setQuantity] = useState(1);
  const [clicked, setClicked] = useState(false);
  const { id } = useParams();

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    fetch("https://insta-api-api.0vxq7h.easypanel.host/cart")
      .then((res) => res.json())
      .then((products) => {
        products.map((product) => {
          if (id == product.id) setClicked(true);
        });
      });
  }, [clicked, id]);

  return (
    <>
      <div className="d-flex">
        <h3>Ajouter au panier: </h3>
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
          variant="light"
          onClick={() => {
            if (!clicked) {
              fetchAddToCart(id, quantity);
              setClicked(true);
            }
          }}
        >
          {clicked ? (
            <i className="fa-solid fa-cart-shopping"></i>
          ) : (
            <i className="fa-regular fa-cart-shopping"></i>
          )}
        </Button>
      </div>
    </>
  );
}

export default AddToCart;
