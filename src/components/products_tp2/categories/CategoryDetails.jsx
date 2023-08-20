import { useParams } from "react-router-dom";
import Product from "../products/Product";
import { Row, Col } from "react-bootstrap";
import AllProductColors from "../products/AllProductColors";
import { useState, useEffect, useContext } from "react";
import SearchProductContext from "../SearchProductContext";

const CategoryDetails = () => {
  const { id } = useParams();
  const [colorId, setColorId] = useState(null);
  const [categoryName, setCategoryName] = useState("");

  const [products, setProducts] = useState([]);

  const { searchProduct } = useContext(SearchProductContext);

  useEffect(() => {
    fetch(
      `https://insta-api-api.0vxq7h.easypanel.host/products?search=${searchProduct}`
    )
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, [colorId, searchProduct]);

  useEffect(() => {
    fetch(`https://insta-api-api.0vxq7h.easypanel.host/product-categories`)
      .then((res) => res.json())
      .then((categories) =>
        categories.map(
          (category) => category.id == id && setCategoryName(category.name)
        )
      );
  });

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
