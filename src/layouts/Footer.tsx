import React from "react";
import styled from "styled-components";
import Logo from "../assets/LOGO";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ImgContainer>
        <Logo color="#FFFFFF" />
      </ImgContainer>
      <CopyrightText>© 2020 Kasa. All rights reserved</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  bottom: 0;
  background-color: #000000;
  width: 100%;
  height: 209px;
`;

const ImgContainer = styled.div`
  width: 122px;

  svg {
    width: 100%;
  }
`;

const CopyrightText = styled.small`
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 34.224px */

  @media (max-width: 700px) {
    font-size: 12px;
    width: 133px;
  }
`;
