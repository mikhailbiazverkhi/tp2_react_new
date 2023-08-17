/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Page_categories from "./Page_categories";

function ResultsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://insta-api-api.0vxq7h.easypanel.host/product-categories`)
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <main>
      <div className="d-flex justify-content-between">
        <h1 className="my-3">Liste du categories</h1>
        <div className="d-flex align-items-center"></div>
      </div>

      <Page_categories products={products} />
    </main>
  );
}
// }

export default ResultsList;
