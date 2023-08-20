import { useQuery } from "@tanstack/react-query";
import { Spinner } from "react-bootstrap";
import Product from "./products_tp2/products/Product";
import { Row, Col } from "react-bootstrap";
import { useState, useContext } from "react";
import SearchProductContext from "./products_tp2/SearchProductContext";

import fetchGetAllProductList from "./products_tp2/js_fetchProductsFuncs/fetchGetAllProductList";
import AllProductColors from "./products_tp2/products/AllProductColors";

const Page_AllProducts = () => {
  const [colorId, setColorId] = useState(null);
  const { searchProduct } = useContext(SearchProductContext);
  const results = useQuery(["search", searchProduct], fetchGetAllProductList);

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
