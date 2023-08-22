const fetchDeleteCart = async () => {
  const apiRes = await fetch(
    `https://insta-api-api.0vxq7h.easypanel.host/cart/clear`,
    { method: "DELETE" }
  );

  if (!apiRes.ok) {
    throw new Error(`the cart is not deleted`);
  }

  window.location.reload();
  //   history.back();
};

export default fetchDeleteCart;
