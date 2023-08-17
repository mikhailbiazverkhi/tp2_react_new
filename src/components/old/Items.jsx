/* eslint-disable react/prop-types */

import { Row, Col } from "react-bootstrap";
import Coffee from "./Coffee";
import Category from "./Category";

const Items = ({ type, products }) => {
  const types = {
    coffees: "coffees",
    categories: "product-categories",
  };
  return (
    <>
      {!products.length ? (
        <h1>No {type} found</h1>
      ) : (
        <Row>
          {products.map((product) => (
            <Col className="colonne my-3" key={product.id}>
              {type === types.coffees && (
                <Coffee
                  id={product.id}
                  name={product.name}
                  pictureUrl={product.pictureUrl}
                  // description={coffee.description}
                />
              )}

              {type === types.categories && (
                <Category
                  id={product.id}
                  name={product.name}
                  description={product.description}
                />
              )}
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Items;
