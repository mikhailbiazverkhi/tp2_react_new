import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import ChangeQuantiteToCart from "./ChangeQuantiteToCart";
import fetchDeleteProductFromCart from "./fetchDeleteProductFromCart";
import fetchDeleteCart from "./fetchDeleteCart";
import { Link } from "react-router-dom";

function Page_panier() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("https://insta-api-api.0vxq7h.easypanel.host/cart")
      .then((res) => res.json())
      .then((res) => setCartProducts(res));
  }, []);

  return (
    <>
      <div className="d-flex justify-content-around my-3">
        <h1>Panier</h1>
        {cartProducts.length > 1 && (
          <div>
            <Button className="my-3" variant="danger" onClick={fetchDeleteCart}>
              Clean Cart
            </Button>
          </div>
        )}
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Image</th>
            <th>Quantity / Total price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((cartProduct) => (
            <tr key={cartProduct.id}>
              <td>
                <h5>{cartProduct.id}</h5>
              </td>
              <td>
                <h5>{cartProduct.name}</h5>
              </td>
              <td>
                <img
                  style={{ height: "150px", objectFit: "cover" }}
                  src={cartProduct.image}
                />
              </td>
              <td>
                <ChangeQuantiteToCart
                  productPrice={cartProduct.price}
                  productId={cartProduct.id}
                  oldQuantity={cartProduct.quantity}
                />
              </td>
              <td>
                <div className="d-flex flex-column align-items-center">
                  <Button
                    className="my-3"
                    variant="danger"
                    onClick={() => fetchDeleteProductFromCart(cartProduct.id)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {cartProducts.length > 0 && (
        <div className="d-flex justify-content-end my-3 mx-4">
          <Link to="/checkout-form/">
            <Button className="my-3" variant="primary">
              Checkout
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
export default Page_panier;
