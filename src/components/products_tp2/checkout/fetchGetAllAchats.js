const fetchGetAllAchats = async () => {
  const apiRes = await fetch(
    `https://insta-api-api.0vxq7h.easypanel.host/checkout`
  );

  if (!apiRes.ok) {
    throw new Error(`achats fetch not ok`);
  }

  return apiRes.json(); // Promise
};

export default fetchGetAllAchats;
