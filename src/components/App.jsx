// import { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./Header";
import CoffeeDetails from "./CoffeeDetails";
import AjouterCoffees from "./AjouterCoffee";
import Footer from "./Footer";
import CategoryDetails from "./CategoryDetails";
import ProductDetails from "./ProductDetails";
import Page_coffees from "./Page_coffees";
import Page_categories from "./Page_categories";
import Page_AllProducts from "./Page_AllProducts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Container>
          <Header />
          <Routes>
            <Route path="/coffee-details/:id" element={<CoffeeDetails />} />
            <Route path="/category-details/:id" element={<CategoryDetails />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/" element={<Page_categories />} />
            <Route path="/coffees/" element={<Page_coffees />} />
            <Route path="/ajouter/" element={<AjouterCoffees />} />
            <Route path="/all-products/" element={<Page_AllProducts />} />
          </Routes>
          <Footer />
        </Container>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
export default App;
