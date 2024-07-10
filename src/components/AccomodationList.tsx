import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import ApiFetch from "../api/ApiFetch";
import { Accommodation } from "../model/accomodation";

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
    <div>
      {accommodations.map((accommodation: Accommodation) => (
        <Card
          key={accommodation.id}
          title={accommodation.title}
          pictures={accommodation.pictures}
          alt={"Photo de l'hebergement"}
          onClick={() => handleClick(accommodation.id)}
        />
      ))}
    </div>
  );
};

export default AccommodationList;
