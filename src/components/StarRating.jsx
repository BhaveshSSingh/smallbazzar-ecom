import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export const StarRating = ({ rating: { rate } }) => {
  console.log(rate);

  const ratingStar = Array.from({ length: 5 }, (el, index) => {
    const halfNum = index + 0.5;
    return (
      <span>
        {rate >= index + 1 ? (
          <BsStarFill className="inline m-1 text-orange-400" />
        ) : rate >= halfNum ? (
          <BsStarHalf className="inline m-1 text-orange-400" />
        ) : (
          <BsStar className="inline m-1 text-orange-400" />
        )}
      </span>
    );
  });

  return <>{ratingStar}</>;
};
