// function Page_listeDeSouaits() {
//   return <div>Page liste de souaits</div>;
// }
// export default Page_listeDeSouaits;

import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
// import ChangeQuantiteToCart from "./ChangeQuantiteToCart";
// import fetchDeleteProductFromCart from "./fetchDeleteProductFromCart";
import fetchDeleteList from "./fetchDeleteList";
import fetchDeleteProductFromList from "./fetchDeleteProductFromList";
// import ChangeTotalPrice from "./ChangeTotalPrice";

function Page_listeDeSouaits() {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    fetch("https://insta-api-api.0vxq7h.easypanel.host/wishlist")
      .then((res) => res.json())
      .then((res) => setListProducts(res));
  }, []);

  // return <div>Page panier</div>;
  return (
    <>
      <div className="d-flex justify-content-around my-3">
        <h1>Liste de souhaits</h1>
        <div>
          <Button variant="danger" onClick={fetchDeleteList}>
            Clean Liste
          </Button>
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Image</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listProducts.map((listProduct) => (
            <tr key={listProduct.id}>
              <td>
                <h5>{listProduct.id}</h5>
              </td>
              <td>
                <h5>{listProduct.name}</h5>
              </td>
              <td>
                <img
                  style={{ height: "150px", objectFit: "cover" }}
                  src={listProduct.image}
                />
              </td>
              <td>
                <Button
                  className="mx-3"
                  variant="danger"
                  onClick={() => fetchDeleteProductFromList(listProduct.id)}
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
export default Page_listeDeSouaits;
