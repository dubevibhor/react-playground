// Create a responsive navigation bar using styled-components.
import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background: black;
`;
const MenuToggle = styled.button``;
const Logo = styled.div``;
const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Link = styled.a`
  border: 1px solid gray;
  border-radius: 8px;
  padding: 5px 10px;
`;
const Navbar = () => {
  return (
    <Nav>
      <Logo>Logo</Logo>
      <MenuToggle>&#9776;</MenuToggle>
      <NavLinks>
        <Link href="#Home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#products">Products</Link>
        <Link href="#contact-us">Contact Us</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
