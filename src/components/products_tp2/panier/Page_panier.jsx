import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import ChangeQuantiteToCart from "./ChangeQuantiteToCart";
import fetchDeleteProductFromCart from "./fetchDeleteProductFromCart";
import fetchDeleteCart from "./fetchDeleteCart";

function Page_panier() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("https://insta-api-api.0vxq7h.easypanel.host/cart")
      .then((res) => res.json())
      .then((res) => setCartProducts(res));
  }, []);

  // return <div>Page panier</div>;
  return (
    <>
      <div className="d-flex justify-content-around my-3">
        <h1>Panier</h1>
        <div>
          <Button variant="danger" onClick={fetchDeleteCart}>
            Clean Cart
          </Button>
        </div>
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
                <Button
                  className="mx-3"
                  variant="danger"
                  onClick={() => fetchDeleteProductFromCart(cartProduct.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
export default Page_panier;
