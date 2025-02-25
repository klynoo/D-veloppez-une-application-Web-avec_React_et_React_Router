import styled from "styled-components";
import StarRating from "../lib/StarRating";

interface CardsType {
  title: string;
  location: string;
  host: Host;
  alt: string;
  rating: string;
  tags: string[];
}

interface Host {
  name: string;
  picture: string;
}

const CardLogement: React.FC<CardsType> = ({
  title,
  location,
  tags,
  host,
  alt,
  rating,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Location>{location}</Location>
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tags key={index.toString()}>{tag}</Tags>
        ))}
      </TagsContainer>
      <Host>
        <NameHost>{host.name}</NameHost>
        <PictureHost>
          <img src={host.picture} alt={alt} />
        </PictureHost>
      </Host>
      <Rating>
        <StarRating rating={parseFloat(rating)} />
      </Rating>
    </Container>
  );
};

export default CardLogement;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding-top: 30px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  grid-column: 1;
  grid-row: 1;
  color: #ff6060;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 51.336px */

  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

const Location = styled.h2`
  grid-column: 1;
  grid-row: 1;
  align-self: end;
  margin-bottom: -10px;
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 25.668px */

  @media (max-width: 700px) {
    font-size: 14px;
    grid-column: 1;
    grid-row: 2;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  grid-column: 1;
  grid-row: 3;

  @media (max-width: 700px) {
    grid-column: 1;
    grid-row: 3;
  }
`;

const Tags = styled.p`
  max-width: 100%;
  padding: 5px 15px 0px 15px;
  height: 23px;
  background: #ff6060;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

const Host = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: end;

  @media (max-width: 700px) {
    grid-column: 1;
    grid-row: 4;
  }
`;

const NameHost = styled.p`
  width: 93px;
  color: #ff6060;
  text-align: right;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 25.668px */

  @media (max-width: 700px) {
    width: 83px;
    font-size: 12px;
  }
`;

const PictureHost = styled.div`
  width: 64px;
  height: 64px;

  @media (max-width: 700px) {
    width: 32px;
    height: 32px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Rating = styled.div`
  grid-column: 2;
  grid-row: 3;
  margin: 28px 0;
  justify-self: end;

  @media (max-width: 700px) {
    grid-column: 1;
    grid-row: 4;
    justify-self: start;
  }
`;
