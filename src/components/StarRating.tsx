// src/components/StarRating.tsx

import React from "react";
import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = maxRating - fullStars - halfStars;

  return (
    <div style={{ display: "flex" }}>
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={`full-${index}`} color="gold" />
        ))}
      {halfStars === 1 && <FaStarHalf key="half" color="gold" />}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FaRegStar key={`empty-${index}`} color="gold" />
        ))}
    </div>
  );
};

export default StarRating;
