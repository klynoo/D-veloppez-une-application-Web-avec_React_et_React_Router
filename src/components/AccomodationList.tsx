import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import ApiFetch from "../api/ApiFetch";
import { Accommodation } from "../model/accomodation";
import styled from "styled-components";

const AccommodationList: React.FC = () => {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const apiFetch = new ApiFetch<Accommodation[]>("./src/assets/data.json");

      try {
        const data = await apiFetch.fetchData();
        setAccommodations(data);
      } catch (error) {
        console.error("Failed to fetch accommodations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleClick = (id: string): void => {
    navigate(`/${id}`);
  };

  return (
    <Container>
      {accommodations.map((accommodation: Accommodation) => (
        <Card
          key={accommodation.id}
          title={accommodation.title}
          pictures={accommodation.pictures[0]}
          alt={accommodation.title}
          onClick={() => handleClick(accommodation.id)}
        />
      ))}
    </Container>
  );
};

export default AccommodationList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  border-radius: 25px;
  background-color: #f6f6f6;
  margin: 0 100px;
  padding: 50px;

  @media (max-width: 700px) {
    margin: 20px;
    padding: 0px;
    background-color: transparent;
  }
`;
