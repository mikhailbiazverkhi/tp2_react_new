const fetchGetAllCouleurs = async () => {
  const apiRes = await fetch(
    `https://insta-api-api.0vxq7h.easypanel.host/product-colors`
  );

  if (!apiRes.ok) {
    // throw new Error(`details/${id} fetch not ok`);
    throw new Error(`details fetch not ok`);
  }

  return apiRes.json(); // Promise
};

export default fetchGetAllCouleurs;
