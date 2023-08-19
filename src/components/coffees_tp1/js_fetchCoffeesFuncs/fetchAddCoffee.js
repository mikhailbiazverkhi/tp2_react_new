const fetchAddCoffee = async (formData) => {
  const apiRes = await fetch(
    "https://insta-api-api.0vxq7h.easypanel.host/coffees/",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    }
  );

  if (!apiRes.ok) {
    throw new Error(`the coffee is not added`);
  }

  history.back();
};

export default fetchAddCoffee;
