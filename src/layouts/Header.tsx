import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/LOGO";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 40px 100px 0px 100px;
`;

const ImgContainer = styled.div`
  height: 68px;

  svg {
    width: 100%;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 57px;
`;

const NavLink = styled(Link)`
  color: #000;
  text-align: right;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 34.224px */
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ImgContainer>
        <Logo color={"#FF6060"} />
      </ImgContainer>
      <Nav>
        <NavLink to="/a-propos">À propos</NavLink>
        <NavLink to="/">Accueil</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
