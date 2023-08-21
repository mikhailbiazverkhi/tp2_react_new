const fetchChangeProductQuality = (productId, quantity) => {
  fetch(
    `https://insta-api-api.0vxq7h.easypanel.host/cart/modify-product-quantity/${productId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity,
      }),
    }
  );

  // window.location.reload();
  // history.back();
};

export default fetchChangeProductQuality;
