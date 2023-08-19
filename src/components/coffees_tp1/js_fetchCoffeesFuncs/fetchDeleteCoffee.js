const supprimerCoffee = async (id) => {
  const apiRes = await fetch(
    `https://insta-api-api.0vxq7h.easypanel.host/coffees/${id}`,
    { method: "DELETE" }
  );

  if (!apiRes.ok) {
    throw new Error(`the coffee ${id} is not deleted`);
  }

  history.back();
};

export default supprimerCoffee;
