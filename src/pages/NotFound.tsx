import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound: React.FC = () => {
  return (
    <Container>
      <Title>404</Title>
      <Message>Oups! La page que vous demandez n'existe pas.</Message>
      <NavLink to="/">Retourner sur la page d’accueil</NavLink>
    </Container>
  );
};

export default NotFound;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 60vh;
`;

const Title = styled.h1`
  color: #ff6060;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 288px;
  font-style: normal;
  font-weight: 700;
  line-height: 142.6%; /* 410.688px */

  @media (max-width: 700px) {
    font-size: 96px;
  }
`;

const Message = styled.p`
  margin-top: -100px;
  color: #ff6060;
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 51.336px */

  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

const NavLink = styled(Link)`
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 25.668px */
  text-decoration-line: none;

  @media (max-width: 700px) {
    font-size: 14px;
  }

  &:hover {
    text-decoration: underline;
  }
`;
