import { useQuery } from "@tanstack/react-query";
import { Spinner } from "react-bootstrap";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

import fetchGetAllProductList from "./fetchGetAllProductList";
import AllProductColors from "./AllProductColors";

const Page_AllProducts = () => {
  const [colorId, setColorId] = useState(null);
  const results = useQuery([], fetchGetAllProductList);

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

  const products = results.data;

  return (
    <>
      <h1>All products</h1>
      <AllProductColors setColorId={setColorId} />
      <Row>
        {colorId == null
          ? products.map((product) => (
              <Col className="colonne my-3" key={product.id}>
                <Product key={product.id} {...product} />
              </Col>
            ))
          : products.map(
              (product) =>
                product.color.id == colorId && (
                  <Col className="colonne my-3" key={product.id}>
                    <Product key={product.id} {...product} />
                  </Col>
                )
            )}
      </Row>
    </>
  );
};

export default Page_AllProducts;
