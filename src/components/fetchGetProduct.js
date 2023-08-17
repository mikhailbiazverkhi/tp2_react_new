const fetchGetProduct = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(
    `https://insta-api-api.0vxq7h.easypanel.host/products/${id}`
  );

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json(); // Promise
};

export default fetchGetProduct;
