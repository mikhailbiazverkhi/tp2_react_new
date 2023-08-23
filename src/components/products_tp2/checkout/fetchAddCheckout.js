const fetchAddCheckout = async (formData) => {
  const apiRes = await fetch(
    "https://insta-api-api.0vxq7h.easypanel.host/checkout",
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

  window.location.reload();
  // history.back();
};

export default fetchAddCheckout;
