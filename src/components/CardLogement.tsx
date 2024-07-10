import styled from "styled-components";
import StarRating from "./StarRating";

interface CardsType {
  // id: string;
  title: string;
  location: string;
  host: Host;
  alt: string;
  rating: string;
}

interface Host {
  name: string;
  picture: string;
}

const CardLogement: React.FC<CardsType> = ({
  title,
  location,
  host,
  alt,
  rating,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Location>{location}</Location>
      <TagsContainer>
        {/* {items.{tags}.map((tag, index) => (
          <Tags
            key={index}
            style={{ marginRight: "10px", display: "inline-block" }}
          >
            {tag}
          </Tags>
        ))} */}
      </TagsContainer>

      <Host>
        <NameHost>{host.name}</NameHost>
        <PictureHost>
          <img src={host.picture} alt={alt} />
        </PictureHost>
      </Host>
      <Rating>
        {rating}
        <StarRating rating={parseFloat(rating)} />
      </Rating>
    </Container>
  );
};

export default CardLogement;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 30px;
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
`;

const Location = styled.h2`
  grid-column: 1;
  grid-row: 2;
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 25.668px */
`;

const TagsContainer = styled.div`
  margin: 20px 0;
  grid-column: 1;
  grid-row: 3;
`;

// const Tags = styled.p`
//   min-width: 115px;
//   padding: 5px 10px 0px 10px;
//   height: 23px;
//   background: #ff6060;
//   border-radius: 10px;
//   color: #fff;
//   text-align: center;
//   font-family: Montserrat;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 700;
// `;

const Host = styled.div`
  grid-column: 2;
  grid-row: 1;
`;

const NameHost = styled.p`
  color: #ff6060;
  text-align: right;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 25.668px */
`;

const PictureHost = styled.div`
  width: 64px;
  height: 64px;

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
`;
