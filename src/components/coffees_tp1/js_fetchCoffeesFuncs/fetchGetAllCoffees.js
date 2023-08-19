async function fetchGetAllCoffees(setState) {
  fetch(`https://insta-api-api.0vxq7h.easypanel.host/coffees`)
    .then((res) => res.json())
    .then((json) => setState(json));
}

export default fetchGetAllCoffees;
