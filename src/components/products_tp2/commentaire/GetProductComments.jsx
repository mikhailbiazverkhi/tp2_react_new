import { useQuery } from "@tanstack/react-query";
import { Spinner, Table, Button } from "react-bootstrap";
import fetchGetCommentaires from "./fetchGetCommentaires";
import fetchDeleteCommentaire from "./fetchDeleteCommentaire";

// eslint-disable-next-line react/prop-types
function GetProductComments({ productId }) {
  const results = useQuery(["productId", productId], fetchGetCommentaires);

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

  const commentaires = results.data;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Commentaires</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {commentaires.map((commentaire) => (
          <tr key={commentaire.id}>
            <td>
              <p>{commentaire.id}</p>
            </td>
            <td>
              <p>{commentaire.content}</p>
            </td>
            <td>
              <div className="d-flex justify-content-end">
                {commentaire.canBeDeleted && (
                  <Button
                    className="mx-3"
                    variant="danger"
                    onClick={() => fetchDeleteCommentaire(commentaire.id)}
                  >
                    Delete
                  </Button>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default GetProductComments;
