/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import fetchRequestCategories from "./products_tp2/js_fetchProductsFuncs/fetchRequestCategories";
import SearchProduct from "./products_tp2/products/SearchProduct";
import ButtonPanier from "./products_tp2/panier/buttonPanier";
import ButtonListeDeSouaits from "./products_tp2/liste-de-souhaits/ButtonListeDeSouaits";
import { Link } from "react-router-dom";
import ButtonAchats from "./products_tp2/checkout/ButtonAchats";

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchRequestCategories(setCategories);
  }, []);

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="/">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/all-products/">All products</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categories.map((category) => (
                <NavDropdown.Item
                  href={`/category-details/${category.id}`}
                  key={category.id}
                >
                  {category.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="/coffees/">Coffees TP1</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {window.location.pathname !== "/coffees/" &&
          window.location.pathname !== "/ajouter/" &&
          !window.location.pathname.includes("/coffee-details/") && (
            <>
              <Link to="/achats/">
                <ButtonAchats />
              </Link>
              <Link to="/panier/">
                <ButtonPanier />
              </Link>
              <Link to="/wish-list/">
                <ButtonListeDeSouaits />
              </Link>
              <SearchProduct />
            </>
          )}
      </Navbar>
    </header>
  );
}

export default Header;
