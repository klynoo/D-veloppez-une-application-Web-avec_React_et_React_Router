import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ApiFetch from "../api/ApiFetch";
import { Accommodation } from "../model/accomodation";
import CardLogement from "./CardLogement";
import Carousel from "./Carousel";
import NotFound from "../pages/NotFound";
import styled from "styled-components";
import Accordion from "./Accordion";

const AccommodationDetail: React.FC = () => {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isValidId, setIsValidId] = useState(true);
  const params = useParams<{ id?: string }>();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const apiFetch = new ApiFetch<Accommodation[]>("./src/assets/data.json");

      try {
        const data = await apiFetch.fetchData();
        const filteredData = data.filter(
          (accommodation) => accommodation.id === params.id
        );
        if (params.id && filteredData.length === 0) {
          setIsValidId(false);
        } else {
          setIsValidId(true);
        }
        setAccommodations(filteredData);
      } catch (error) {
        console.error("Failed to fetch accommodations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isValidId) {
    return <NotFound />;
  }

  return (
    <Container>
      {accommodations.map((accommodation) => (
        <div key={accommodation.id}>
          <Carousel images={accommodations[0]?.pictures} />

          <CardLogement
            key={accommodation.id}
            title={accommodation.title}
            location={accommodation.location}
            tags={accommodation.tags}
            alt={`Photo de profil de ${accommodation.host.name}`}
            rating={accommodation.rating}
            host={{
              name: accommodation.host.name,
              picture: accommodation.host.picture,
            }}
          />
          <AccordionContainer>
            <Accordion title="Description">
              {accommodation.description}
            </Accordion>
            <Accordion title="Équipements">
              <ul>
                {accommodation.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Accordion>
          </AccordionContainer>
        </div>
      ))}
    </Container>
  );
};

export default AccommodationDetail;

const Container = styled.div`
  margin: 50px 100px;
  @media (max-width: 700px) {
    margin: 20px;
  }
`;

const AccordionContainer = styled.div`
    display: flex;
    gap: 32px;
      @media (max-width: 700px) {
      flex-direction: column;  
  `;
