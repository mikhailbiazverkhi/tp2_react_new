const fetchAddToCart = (productId, quantity) => {
  fetch("https://insta-api-api.0vxq7h.easypanel.host/cart/add-product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId,
      quantity,
    }),
  });

  // window.location.reload();
  // history.back();
};

export default fetchAddToCart;
