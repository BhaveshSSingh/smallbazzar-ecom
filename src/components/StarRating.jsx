import { BsFillStarFill } from "react-icons/bs";

export const StarRating = ({ rating: { rate, count } }) => {
  return (
    <p>
      {Array(Math.round(rate))
        .fill(0)
        .map((rate) => (
          <BsFillStarFill className="inline m-1" />
        ))}
      {/* <span>{count}rating</span> */}
    </p>
  );
};
