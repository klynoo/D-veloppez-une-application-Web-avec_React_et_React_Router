import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/LOGO";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <ImgContainer>
        <LinkLogo to="/" />
        <Logo color="#FF6060" />
      </ImgContainer>

      <Nav>
        <StyledNavLink
          to="/a-propos"
          $isActive={location.pathname === "/a-propos"}
        >
          À propos
        </StyledNavLink>
        <StyledNavLink to="/" $isActive={location.pathname === "/"}>
          Accueil
        </StyledNavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 100px 0 100px;

  @media (max-width: 700px) {
    margin: 20px 20px 0 20px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  height: 68px;

  @media (max-width: 700px) {
    height: 46px;
  }

  svg {
    height: 100%;
    width: 100%;
  }
`;

const LinkLogo = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Nav = styled.nav`
  display: flex;
  gap: 57px;
`;

interface StyledNavLinkProps {
  $isActive: boolean;
}

const StyledNavLink = styled(Link)<StyledNavLinkProps>`
  color: #000;
  text-align: right;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 34.224px */
  text-decoration: ${({ $isActive }) => ($isActive ? "underline" : "none")};

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
