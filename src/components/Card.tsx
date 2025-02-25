import React from "react";
import styled from "styled-components";

interface CardsType {
  title: string;
  pictures: string;
  alt: string;
  onClick?: () => void;
}

const Card: React.FC<CardsType> = ({ title, pictures, alt, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <ImgContainer>
        <img src={pictures} alt={alt} />
      </ImgContainer>
      <Title>{title}</Title>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  position: relative;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 700px) {
    width: 100%;
    height: 255px;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Title = styled.p`
  position: absolute;
  bottom: 0;
  margin: 20px;
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 142.6%; /* 25.668px */
`;
