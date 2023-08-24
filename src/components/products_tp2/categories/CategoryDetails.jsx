import { useParams } from "react-router-dom";
import Product from "../products/Product";
import { Row, Col } from "react-bootstrap";
import AllProductColors from "../products/AllProductColors";
import { useState, useEffect, useContext } from "react";
import SearchProductContext from "../SearchProductContext";
import ProductPrixFiltre from "../products/ProductPrixFiltre";

const CategoryDetails = () => {
  const { id } = useParams();
  const [colorId, setColorId] = useState(null);
  const [categoryName, setCategoryName] = useState("");

  const [products, setProducts] = useState([]);

  const [minPrix, setMinPrix] = useState(0);
  const [maxPrix, setMaxPrix] = useState(1000000);

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
      <h1 className="my-3">{categoryName}</h1>
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
                product.category.id == id &&
                minPrix <= product.price &&
                maxPrix >= product.price && (
                  <Col className="colonne my-3" key={product.id}>
                    <Product key={product.id} {...product} />
                  </Col>
                )
            )
          : products.map(
              (product) =>
                product.category.id == id &&
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

export default CategoryDetails;
