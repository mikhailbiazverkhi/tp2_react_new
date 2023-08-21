const fetchAddToList = (productId) => {
  fetch("https://insta-api-api.0vxq7h.easypanel.host/wishlist/add-product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId,
    }),
  });

  // window.location.reload();
  history.back();
};

export default fetchAddToList;
