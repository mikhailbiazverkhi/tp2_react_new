const fetchDeleteList = async () => {
  const apiRes = await fetch(
    `https://insta-api-api.0vxq7h.easypanel.host/wishlist/clear`,
    { method: "DELETE" }
  );

  if (!apiRes.ok) {
    throw new Error(`the Liste de souhaits is not deleted`);
  }

  window.location.reload();
  //   history.back();
};

export default fetchDeleteList;
