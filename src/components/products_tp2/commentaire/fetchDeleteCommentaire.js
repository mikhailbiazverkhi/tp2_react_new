const fetchDeleteCommentaire = async (commentId) => {
  const apiRes = await fetch(
    `https://insta-api-api.0vxq7h.easypanel.host/comments/${commentId}`,
    { method: "DELETE" }
  );

  if (!apiRes.ok) {
    throw new Error(`the coffee ${commentId} is not deleted`);
  }

  window.location.reload();
  //   history.back();
};

export default fetchDeleteCommentaire;
