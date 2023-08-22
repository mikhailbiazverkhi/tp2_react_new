const fetchDeleteProductVus = async (productId) => {
  const apiRes = await fetch(
    `https://insta-api-api.0vxq7h.easypanel.host/suggestions/recently-viewed-products/${productId}`,
    { method: "DELETE" }
  );

  if (!apiRes.ok) {
    throw new Error(`the coffee ${productId} is not deleted`);
  }

  window.location.reload();
  //   history.back();
};

export default fetchDeleteProductVus;
