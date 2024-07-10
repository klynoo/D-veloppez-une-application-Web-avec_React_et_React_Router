// import { useState, useEffect } from "react";
// import { fetchAccommodations } from "./ApiFetch";
// import { Accommodation } from "../model/accomodation";

// // Response type from fetchAccommodations

// interface UseProduitsReturn {
//   produits: Accommodation[];
//   loading: boolean;
//   error: Error | null;
// }

// const useProduits = (): UseProduitsReturn => {
//   const [produits, setProduits] = useState<Accommodation[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetchAccommodations();

//         if (response.type === "success") {
//           setProduits(response.data);
//         } else if (response.type === "error") {
//           throw response.error;
//         }
//         setLoading(false);
//       } catch (error) {
//         if (error instanceof Error) {
//           setError(error);
//         } else {
//           setError(new Error("An unknown error occurred"));
//         }
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return { produits, loading, error };
// };

// export default useProduits;

// import React, { useState, useEffect } from "react";
// import Card from "../components/Card";
// import { fetchAccommodations } from "./ApiFetch";
// import { match } from "ts-pattern";
// import { useNavigate } from "react-router-dom";
// import { Accommodation } from "../model/accomodation";

// const AccommodationList: React.FC = () => {
//   const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadAccommodations = async () => {
//       match(await fetchAccommodations()).with(
//         { type: "success" },
//         ({ data }) => {
//           setAccommodations(data);
//         }
//       );
//     };

//     loadAccommodations();
//   }, []);

//   return (
//     <>
//       <Card items={accommodations} onCardClick={(id) => navigate(`/${id}`)} />
//     </>
//   );
// };

// export default AccommodationList;
