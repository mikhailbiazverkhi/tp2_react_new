/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://insta-api-api.0vxq7h.easypanel.host/product-categories`)
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
      });
  }, []);

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Link to="/">
          <Navbar.Brand>HOME</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/all-products/">All products</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categories.map((category) => (
                <Link to={`/category-details/${category.id}`} key={category.id}>
                  <NavDropdown.Item href="###">
                    {category.name}
                  </NavDropdown.Item>
                </Link>
              ))}
            </NavDropdown>
            <Nav.Link href="/coffees/">Coffees TP1</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
