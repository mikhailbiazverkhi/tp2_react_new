const fetchGetAllProductList = async () => {
  const apiRes = await fetch(
    `https://insta-api-api.0vxq7h.easypanel.host/products`
  );

  if (!apiRes.ok) {
    throw new Error(`details fetch not ok`);
  }

  return apiRes.json(); // Promise
};

export default fetchGetAllProductList;
