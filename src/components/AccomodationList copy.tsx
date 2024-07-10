import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiFetch from "../api/ApiFetch";
import { Accommodation } from "../model/accomodation";
import CardLogement from "./CardLogement";
import Carousel from "./Carousel";

const AccommodationList: React.FC = () => {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams<{ id?: string }>();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const apiFetch = new ApiFetch<Accommodation[]>("./src/assets/data.json");

      try {
        const data = await apiFetch.fetchData();
        const filteredData = params.id
          ? data.filter((accommodation) => accommodation.id === params.id)
          : data;
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

  return (
    <div>
      <Carousel images={accommodations[0]?.pictures} />

      {accommodations.map((accommodation: Accommodation) => (
        <CardLogement
          key={accommodation.id}
          title={accommodation.title}
          location={accommodation.location}
          alt={"Photo de profil de l'hebergeur "}
          rating={accommodation.rating}
          host={{
            name: accommodation.host.name,
            picture: accommodation.host.picture,
          }}
        />
      ))}
    </div>
  );
};

export default AccommodationList;
