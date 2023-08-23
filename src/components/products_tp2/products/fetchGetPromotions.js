const fetchGetPromotions = async () => {
  const apiRes = await fetch(
    "https://insta-api-api.0vxq7h.easypanel.host/promotions"
  );

  if (!apiRes.ok) {
    throw new Error(`promotions fetch not ok`);
  }

  return apiRes.json(); // Promise
};

export default fetchGetPromotions;
