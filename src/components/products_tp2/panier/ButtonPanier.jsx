// import { useState } from "react";
import { Button } from "react-bootstrap";

function ButtonPanier() {
  // const [productQuantity, setProductQuantity] = useState(0)
  return (
    <>
      <Button variant="light">
        <i className="fa-regular fa-cart-shopping"></i>
        {/* ({productQuantity}) */}
      </Button>

      {/* <i className="fa-solid fa-cart-shopping"></i> */}
    </>
  );
}
export default ButtonPanier;
