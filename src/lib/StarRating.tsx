import { FaStar } from "react-icons/fa";

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
          <FaStar key={`full-${index}`} color="rgba(255, 96, 96, 1)" />
        ))}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={`empty-${index}`} color="rgba(227, 227, 227, 1)" />
        ))}
    </div>
  );
};

export default StarRating;
