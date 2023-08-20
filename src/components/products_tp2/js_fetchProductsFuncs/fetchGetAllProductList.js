const fetchGetAllProductList = async ({ queryKey }) => {
  const search = queryKey[1];
  const apiRes = await fetch(
    `https://insta-api-api.0vxq7h.easypanel.host/products?search=${search}`
  );

  if (!apiRes.ok) {
    throw new Error(`details fetch not ok`);
  }

  return apiRes.json(); // Promise
};

export default fetchGetAllProductList;
