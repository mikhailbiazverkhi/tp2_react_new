/* eslint-disable react/prop-types */

import { Row, Col } from "react-bootstrap";
import Category from "./products_tp2/categories/Category";
import { useState, useEffect } from "react";
import GetProduitsVus from "./products_tp2/produits-vus/GetProduitsVus";

const Page_categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://insta-api-api.0vxq7h.easypanel.host/product-categories`)
      .then((res) => res.json())
      .then((categories) => setCategories(categories));
  }, []);

  return (
    <>
      <h1 className="mb-3">All product categories</h1>
      {!categories.length ? (
        <h1>No Categories found</h1>
      ) : (
        <>
          <Row>
            {categories.map((product) => (
              <Col className="colonne my-3" key={product.id}>
                <Category
                  id={product.id}
                  name={product.name}
                  description={product.description}
                />
              </Col>
            ))}
          </Row>
        </>
      )}

      <GetProduitsVus />
    </>
  );
};

export default Page_categories;
