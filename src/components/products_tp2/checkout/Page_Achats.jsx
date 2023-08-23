import { Spinner, Table } from "react-bootstrap";
import fetchGetAllAchats from "./fetchGetAllAchats";
import { useQuery } from "@tanstack/react-query";

function Page_Achats() {
  const results = useQuery([], fetchGetAllAchats);

  if (results.isError) {
    return <h1>Error! Coffee details are not found</h1>;
  }

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  const cartId = results.data.cartId;
  const achats = results.data.products;

  return (
    <>
      <div className="d-flex justify-content-around my-3">
        <h1>Achats</h1>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Image</th>
            <th>Panier #</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {achats.map((checkoutProduct) => (
            <tr key={checkoutProduct.id}>
              <td>
                <h5>{checkoutProduct.id}</h5>
              </td>
              <td>
                <h5>{checkoutProduct.name}</h5>
              </td>
              <td>
                <img
                  style={{ height: "150px", objectFit: "cover" }}
                  src={checkoutProduct.image}
                />
              </td>
              <td>
                <h5>{cartId}</h5>
              </td>
              <td>
                <h5>{checkoutProduct.quantity}</h5>
              </td>
              <td>
                <h5>{checkoutProduct.price}</h5>
              </td>
              <td>
                <h5>{checkoutProduct.quantity * checkoutProduct.price}</h5>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
export default Page_Achats;
