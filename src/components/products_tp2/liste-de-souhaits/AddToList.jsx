import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import fetchAddToList from "./fetchAddToList";
import { useState, useEffect } from "react";

function AddToList() {
  const { id } = useParams();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetch("https://insta-api-api.0vxq7h.easypanel.host/wishlist")
      .then((res) => res.json())
      .then((products) => {
        products.map((product) => {
          if (id == product.id) setClicked(true);
        });
      });
  }, [clicked, id]);

  return (
    <>
      <div className="d-flex">
        <h3>Ajouter à la liste: </h3>
        <Button
          className="mx-3"
          variant="light"
          onClick={() => {
            if (!clicked) {
              fetchAddToList(id);
              setClicked(true);
            }
          }}
        >
          {clicked ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </Button>
      </div>
    </>
  );
}

export default AddToList;
