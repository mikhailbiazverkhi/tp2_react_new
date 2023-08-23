import { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchProductContext from "./products_tp2/SearchProductContext";
import Header from "./Header";
import CoffeeDetails from "./coffees_tp1/CoffeeDetails";
import AjouterCoffees from "./coffees_tp1/AjouterCoffee";
import Page_coffees from "./Page_coffees";
import Footer from "./Footer";
import CategoryDetails from "./products_tp2/categories/CategoryDetails";
import ProductDetails from "./products_tp2/products/ProductDetails";
import Page_categories from "./Page_categories";
import Page_AllProducts from "./Page_AllProducts";
import Page_panier from "./products_tp2/panier/Page_panier";
import Page_listeDeSouaits from "./products_tp2/liste-de-souhaits/Page_listeDeSouaits";
import CheckoutForm from "./products_tp2/checkout/CheckoutForm";
import Page_Achats from "./products_tp2/checkout/Page_Achats";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SearchProductContext.Provider
          value={{ searchProduct, setSearchProduct }}
        >
          <Container>
            <Header />
            <Routes>
              <Route path="/coffee-details/:id" element={<CoffeeDetails />} />
              <Route
                path="/category-details/:id"
                element={<CategoryDetails />}
              />
              <Route path="/product-details/:id" element={<ProductDetails />} />
              <Route path="/" element={<Page_categories />} />
              <Route path="/coffees/" element={<Page_coffees />} />
              <Route path="/ajouter/" element={<AjouterCoffees />} />
              <Route path="/all-products/" element={<Page_AllProducts />} />
              <Route path="/panier/" element={<Page_panier />} />
              <Route path="/wish-list/" element={<Page_listeDeSouaits />} />
              <Route path="/checkout-form/" element={<CheckoutForm />} />
              <Route path="/achats/" element={<Page_Achats />} />
            </Routes>
            <Footer />
          </Container>
        </SearchProductContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
export default App;
