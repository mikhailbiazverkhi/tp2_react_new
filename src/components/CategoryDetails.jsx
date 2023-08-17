import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import fetchGetAllProductList from "./fetchGetAllProductList";
// import { Spinner } from "react-bootstrap";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";
import AllProductColors from "./AllProductColors";
import { useState, useEffect } from "react";

const CategoryDetails = () => {
  const { id } = useParams();
  const [colorId, setColorId] = useState(null);
  const [categoryName, setCategoryName] = useState("");

  // const results = useQuery([], fetchGetAllProductList);

  // if (results.isError) {
  //   return <h1>Error! Coffee details are not found</h1>;
  // }

  // if (results.isLoading) {
  //   return (
  //     <div className="loading-pane">
  //       <Spinner animation="border" variant="primary" />
  //     </div>
  //   );
  // }

  // const products = results.data;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://insta-api-api.0vxq7h.easypanel.host/products`)
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, [colorId]);

  useEffect(() => {
    fetch(`https://insta-api-api.0vxq7h.easypanel.host/product-categories`)
      .then((res) => res.json())
      .then((categories) =>
        categories.map(
          (category) => category.id == id && setCategoryName(category.name)
        )
      );
  });

  // console.log(colorId);

  return (
    <>
      <h1>{categoryName}</h1>
      <AllProductColors setColorId={setColorId} />
      <Row>
        {colorId == null
          ? products.map(
              (product) =>
                product.category.id == id && (
                  <Col className="colonne my-3" key={product.id}>
                    <Product key={product.id} {...product} />
                  </Col>
                )
            )
          : products.map(
              (product) =>
                product.category.id == id &&
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

export default CategoryDetails;
