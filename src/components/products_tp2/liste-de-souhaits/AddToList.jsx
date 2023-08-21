import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import fetchAddToList from "./fetchAddToList";

function AddToList() {
  const { id } = useParams();
  return (
    <>
      <h3>Ajouter à la liste: </h3>
      <div className="d-flex">
        <Button
          className="mx-3"
          variant="primary"
          onClick={() => fetchAddToList(id)}
        >
          Ajouter
        </Button>
      </div>
    </>
  );
}

export default AddToList;
