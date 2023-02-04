import { BsFillStarFill } from "react-icons/bs";

export const StarRating = ({ rating: { rate } }) => {
  return (
    <p>
      {Array(Math.round(rate))
        .fill(0)
        .map((rate) => (
          <BsFillStarFill className="inline m-1" />
        ))}
    </p>
  );
};
