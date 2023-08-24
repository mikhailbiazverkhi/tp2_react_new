import { useQuery } from "@tanstack/react-query";
import { Spinner } from "react-bootstrap";
import Product from "./products_tp2/products/Product";
import { Row, Col } from "react-bootstrap";
import { useState, useContext } from "react";
import SearchProductContext from "./products_tp2/SearchProductContext";

import fetchGetAllProductList from "./products_tp2/js_fetchProductsFuncs/fetchGetAllProductList";
import AllProductColors from "./products_tp2/products/AllProductColors";
import ProductPrixFiltre from "./products_tp2/products/ProductPrixFiltre";

const Page_AllProducts = () => {
  const [colorId, setColorId] = useState(null);
  const { searchProduct } = useContext(SearchProductContext);
  const results = useQuery(["search", searchProduct], fetchGetAllProductList);

  const [minPrix, setMinPrix] = useState(0);
  const [maxPrix, setMaxPrix] = useState(1000000);

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

  console.log(minPrix);
  console.log(maxPrix);

  const products = results.data;

  return (
    <>
      <h1 className="my-3">All products</h1>
      <div className="d-flex justify-content-center" style={{ gap: "15px" }}>
        <h5>Filtrer par prix: </h5>
        <ProductPrixFiltre setMinPrix={setMinPrix} setMaxPrix={setMaxPrix} />
        <h5>Filtrer par couleur: </h5>
        <AllProductColors setColorId={setColorId} />
      </div>
      <Row>
        {colorId == null
          ? products.map(
              (product) =>
                minPrix <= product.price &&
                maxPrix >= product.price && (
                  <Col className="colonne my-3" key={product.id}>
                    <Product key={product.id} {...product} />
                  </Col>
                )
            )
          : products.map(
              (product) =>
                minPrix <= product.price &&
                maxPrix >= product.price &&
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
