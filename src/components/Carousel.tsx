import { useState } from "react";
import styled from "styled-components";

interface ImgsType {
  images: string[];
}

const Carousel = ({ images }: ImgsType) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  return (
    <CarouselContainer>
      {length > 1 && <ButtonLeft onClick={prevSlide}>&#10094;</ButtonLeft>}
      {images.map((img, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <img src={img} alt="Photo du logement" className="image" />
          )}
        </div>
      ))}
      {length > 1 && (
        <FrameCounter>
          {current + 1} / {length}
        </FrameCounter>
      )}
      {length > 1 && <ButtonRight onClick={nextSlide}>&#10095;</ButtonRight>}
    </CarouselContainer>
  );
};

export default Carousel;

const CarouselContainer = styled.div`
  position: relative;

  .image {
    width: 100%;
    height: 415px;
    object-fit: cover;
    border-radius: 25px;
  }
`;

const ButtonLeft = styled.div`
  font-size: 96px;
  cursor: pointer;
  color: rgba(255, 255, 255, 1);

  position: absolute;
  top: 50%;
  left: 23px;
  transform: translate(0%, -50%);
`;

const FrameCounter = styled.span`
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;

  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonRight = styled.div`
  font-size: 96px;
  cursor: pointer;
  color: rgba(255, 255, 255, 1);

  position: absolute;
  top: 50%;
  right: 23px;
  transform: translate(0%, -50%);
`;
