import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  color: #ff6060;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 288px;
  font-style: normal;
  font-weight: 700;
  line-height: 142.6%; /* 410.688px */
`;

const Message = styled.p`
  color: #ff6060;
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 51.336px */
`;

const NavLink = styled(Link)`
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 25.668px */
  text-decoration-line: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NotFound: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>404</Title>
        <Message>Oups! La page que vous demandez n'existe pas.</Message>
        <NavLink to="/">Retourner sur la page d’accueil</NavLink>
      </Container>
      <Footer />
    </>
  );
};

export default NotFound;
