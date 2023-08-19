/* eslint-disable react/prop-types */

import { Button, Row, Col } from "react-bootstrap";
import Coffee from "./coffees_tp1/Coffee";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchGetAllCoffees from "./coffees_tp1/js_fetchCoffeesFuncs/fetchGetAllCoffees";

const Page_coffees = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetchGetAllCoffees(setCoffees);
  }, []);

  return (
    <>
      {!coffees.length ? (
        <h1>No Coffees found</h1>
      ) : (
        <>
          <div className="d-flex justify-content-between">
            <h1 className="my-3">Liste du café TP1</h1>
            <div className="d-flex align-items-center">
              <Link to={"/ajouter/"}>
                <Button variant="primary">Ajouter du café</Button>
              </Link>
            </div>
          </div>
          <Row>
            {coffees.map((coffee) => (
              <Col className="colonne my-3" key={coffee.id}>
                <Coffee
                  id={coffee.id}
                  name={coffee.name}
                  pictureUrl={coffee.pictureUrl}
                  // description={coffee.description}
                />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default Page_coffees;
