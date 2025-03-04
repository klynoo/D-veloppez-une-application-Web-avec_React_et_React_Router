import styled from "styled-components";

const Banner: React.FC = () => {
  return (
    <Container>
      <Opacity></Opacity>
      <Text>Chez vous, partout et ailleurs</Text>
    </Container>
  );
};

export default Banner;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./src/assets/IMG1.png");
  height: 223px;
  margin: 50px 100px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 25px;
  position: relative;

  @media (max-width: 700px) {
    margin: 27px 20px;
    height: 110px;
    border-radius: 10px;
  }
`;

const Opacity = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  border-radius: 25px;
  opacity: 0.4;
  z-index: 0;

  @media (max-width: 700px) {
    border-radius: 10px;
  }
`;

const Text = styled.p`
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: #000;
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 142.6%; /* 68.448px */
  z-index: 1;

  @media (max-width: 700px) {
    font-size: 24px;
    max-width: 70%;
    margin-left: -40px;
  }
`;
