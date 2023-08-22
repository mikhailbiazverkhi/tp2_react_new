import { useState, useEffect } from "react";
import Product from "../products/Product";
import { Row, Col, CloseButton } from "react-bootstrap";
import fetchDeleteProductVus from "./fetchDeleteProductVus";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

function GetProduitsVus() {
  const [produitsVus, setProduitsVus] = useState([]);

  useEffect(() => {
    fetch(
      `https://insta-api-api.0vxq7h.easypanel.host/suggestions/recently-viewed-products`
    )
      .then((res) => res.json())
      .then((produitsVus) => setProduitsVus(produitsVus));
  }, []);

  return (
    <>
      {produitsVus.length !== 0 && (
        <h1 className="my-5 text-center">Liste des produits vus </h1>
      )}
      <Row>
        {produitsVus.map((product) => (
          <Col className="colonne my-3" key={product.id}>
            <div key={product.id}>
              <Product key={product.id} {...product} />
              <div className="d-flex justify-content-center my-3">
                <CloseButton
                  onClick={() => fetchDeleteProductVus(product.id)}
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* <Carousel>
        <Carousel.Item interval={3000}>
          <div className="d-flex flex-row">
              <Product {...produitsVus[0]} />
             <Product {...produitsVus[1]} />
            <Product {...produitsVus[2]} />
            <Product {...produitsVus[3]} />
            <Product {...produitsVus[4]} />
          </div>
        </Carousel.Item> 

         <Carousel.Item interval={3000}>
          <div className="d-flex flex-row">
            <Product {...produitsVus[1]} />
            <Product {...produitsVus[2]} />
            <Product {...produitsVus[3]} />
            <Product {...produitsVus[4]} />
            <Product {...produitsVus[5]} />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="d-flex flex-row">
            <Product {...produitsVus[2]} />
            <Product {...produitsVus[3]} />
            <Product {...produitsVus[4]} />
            <Product {...produitsVus[5]} />
            <Product {...produitsVus[6]} />
          </div>
        </Carousel.Item>
      </Carousel> */}
    </>
  );
}

export default GetProduitsVus;
