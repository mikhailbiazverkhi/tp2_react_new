const fetchDeleteProductFromCart = async (productId) => {
  const apiRes = await fetch(
    `https://insta-api-api.0vxq7h.easypanel.host/cart/remove-product/${productId}`,
    { method: "DELETE" }
  );

  if (!apiRes.ok) {
    throw new Error(`the product ${productId} is not deleted`);
  }

  window.location.reload();
  //   history.back();
};

export default fetchDeleteProductFromCart;
