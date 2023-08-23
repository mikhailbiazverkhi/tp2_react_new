import { Spinner, Table } from "react-bootstrap";
import fetchGetAllAchats from "./fetchGetAllAchats";
import { useQuery } from "@tanstack/react-query";
import fetchGetPromotions from "../products/fetchGetPromotions";

function Page_Achats() {
  const results = useQuery([], fetchGetAllAchats);
  const promotions = useQuery([{}], fetchGetPromotions);

  //
  if (results.isError || promotions.isError) {
    return <h1>Error! Datas are not found</h1>;
  }

  if (results.isLoading || promotions.isLoading) {
    return (
      <div className="loading-pane">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  const cartId = results.data.cartId;
  const achats = results.data.products;

  // livraison options
  // const shippingOptions = {
  //   standard: 10,
  //   express: 20,
  //   pickup: 0,
  // };

  const promoArr = [];

  promotions.data.map(
    (promotion) => (promoArr[promotion.productId] = promotion.discountPercent)
  );

  const totalPrice = achats.reduce((total, element) => {
    return total + element.price;
  }, 0);

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
            <th>Livraison</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Promotion</th>
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
              <td>{totalPrice > 100 && <h5>Free </h5>}</td>
              <td>
                <h5>{checkoutProduct.quantity}</h5>
              </td>
              <td>
                <h5>{checkoutProduct.price}</h5>
              </td>
              <td>
                {promoArr[checkoutProduct.id] ? (
                  <h5>{promoArr[checkoutProduct.id] * 100} %</h5>
                ) : (
                  <h5>0 %</h5>
                )}
              </td>
              <td>
                {promoArr[checkoutProduct.id] ? (
                  <h5>
                    {checkoutProduct.quantity *
                      checkoutProduct.price *
                      (1 - promoArr[checkoutProduct.id])}{" "}
                  </h5>
                ) : (
                  <h5>{checkoutProduct.quantity * checkoutProduct.price}</h5>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
export default Page_Achats;
