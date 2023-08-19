const fetchGetAllCategories = async () => {
  const apiRes = await fetch(
    `https://insta-api-api.0vxq7h.easypanel.host/product-categories`
  );

  if (!apiRes.ok) {
    throw new Error(`details fetch not ok`);
  }

  return apiRes.json(); // Promise
};

export default fetchGetAllCategories;
