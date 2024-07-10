import React from "react";
import styled from "styled-components";

interface CardsType {
  title: string;
  pictures: string[];
  alt: string;
  onClick?: () => void;
}

const Card: React.FC<CardsType> = ({ title, pictures, alt, onClick }) => {
  return (
    <Container>
      <CardContainer onClick={onClick}>
        <ImgContainer>
          <img src={pictures[0]} alt={alt} />
        </ImgContainer>
        <Title>{title}</Title>
      </CardContainer>
    </Container>
  );
};

export default Card;

// --------------------------------------------------------
// import React from "react";
// import styled from "styled-components";
// import useProduits from "../api/UseAccommodations";
// import { useNavigate } from "react-router-dom";

// const Card: React.FC = () => {
//   const { produits, loading, error } = useProduits();

//   const navigate = useNavigate();

//   if (loading) return <p>Chargement...</p>;
//   if (error) return <p>Erreur : {error.message}</p>;

//   return (
//     <Container>
//       {produits.map((produit) => (
//         <CardContainer
//           key={produit.id}
//           onClick={() => navigate(`/${produit.id}`)}
//         >
//           <ImgContainer>
//             <img src={produit.pictures[0]} alt={produit.title} />
//           </ImgContainer>
//           <Title>{produit.title}</Title>
//         </CardContainer>
//       ))}
//     </Container>
//   );
// };

// export default Card;

// -----------------------------------------------------

// import React from "react";
// import styled from "styled-components";
// import { Accommodation } from "../model/accomodation";

// interface CardProps {
//   items: Accommodation[];
//   // onCardClick?: (id: string) => void;
// }

// const Card: React.FC<CardProps> = ({/*  items */ /* onCardClick */ }) => {
//   // const handleCardClick = (id: string) => {
//   //   if (onCardClick) {
//   //     onCardClick(id);
//   //   } else {
//   //     console.error("onCardClick is not defined");
//   //   }
//   // };

//   return (
//     <Container>
//       {items.map((item) => (
//         <CardContainer
//           key={item.id} /* onClick={() => handleCardClick(item.id)} */
//         >
//           <ImgContainer>
//             <img src={item.pictures[0]} alt={item.title} />
//           </ImgContainer>
//           <Title>{item.title}</Title>
//         </CardContainer>
//       ))}
//     </Container>
//   );
// };

// export default Card;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  border-radius: 25px;
  background-color: #f6f6f6;
  margin: 0 100px;
  padding: 50px;
`;

const CardContainer = styled.div`
  position: relative;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  // background: linear-gradient(
  //   180deg,
  //   rgba(255, 255, 255, 0) 0%,
  //   rgba(255, 69, 58, 0) 42%,
  //   rgba(255, 69, 58, 0.8) 99.99%,
  //   rgba(255, 69, 58, 0.5) 100%
  // );
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
