import styled from "styled-components";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Carousel from "../components/Carousel";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { match } from "ts-pattern";
import { Accommodation } from "../model/accomodation";
import CardLogement from "../components/CardLogement";

const Logement = () => {
  const [data, setdata] = useState<Accommodation | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const loaddatas = async () => {
      try {
        const result = await fetchAccommodations();
        match(result).with({ type: "success" }, ({ data }) => {
          const founddata = data.find((acc) => acc.id === id);
          setdata(founddata || null);
        });
      } catch (error) {
        console.error("Échec de la récupération des données:", error);
      }
    };

    if (id) loaddatas();
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        {data ? (
          <>
            <Carousel images={data.pictures} />
            <CardLogement items={data} />
          </>
        ) : (
          <p>Chargement ou aucun logement trouvé...</p>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Logement;

const Container = styled.div`
  margin: 50px 100px;
`;

// import styled from "styled-components";
// import Footer from "../layouts/Footer";
// import Header from "../layouts/Header";
// import Carousel from "../components/Carousel";
// import { useParams } from "react-router-dom";
// // import CardLogement from "../components/CardLogement";
// import { Accommodation } from "../model/accomodation";

// interface AccommodationDetailsProps {
//   items: Accommodation[];
//   onCardClick?: (id: string) => void;
// }

// const AccommodationDetails: React.FC<AccommodationDetailsProps> = ({
//   items,
// }) => {
//   const { id } = useParams<{ id: string }>();
//   const foundData = items.find((acc) => acc.id === id);

//   if (!foundData) {
//     return <div>Accommodation not found</div>;
//   }

//   return (
//     <>
//       <Header />
//       <Container>
//         <Carousel images={foundData.pictures} />
//         {/* <CardLogement /> */}
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default AccommodationDetails;

// const Container = styled.div`
//   margin: 50px 100px;
// `;
