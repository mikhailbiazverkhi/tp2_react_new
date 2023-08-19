async function fetchRequestCategories(setState) {
  const res = await fetch(
    `https://insta-api-api.0vxq7h.easypanel.host/product-categories`
  );
  const json = await res.json();
  setState(json);
}

export default fetchRequestCategories;
