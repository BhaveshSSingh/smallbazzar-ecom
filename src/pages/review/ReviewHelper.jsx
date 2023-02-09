import { BsFillStarFill } from "react-icons/bs";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ReviewStars = ({ rating, setRating, hover, setHover }) => {
  const starFilter = (ratingValue) => {
    setRating(ratingValue);
  };
  return (
    <>
      <div>
        <div className="flex items-center mb-5 cursor-pointer">
          {Array.from({ length: 5 }, (ele, index) => {
            const ratingValue = index + 1;

            return (
              <label className="m-1">
                <input
                  type="radio"
                  value={ratingValue}
                  className="hidden"
                  onClick={() => starFilter(ratingValue)}
                />
                <BsFillStarFill
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                  className={`inline cursor-pointer ${
                    ratingValue <= (hover || rating)
                      ? "text-orange-400"
                      : "text-gray-400"
                  } `}
                />
              </label>
            );
          })}
        </div>
      </div>
    </>
  );
};

const ReviewStarRating = ({ rate }) => {
  const ratingStar = Array.from({ length: 5 }, (el, index) => {
    const halfNum = index + 0.5;
    return (
      <span className="">
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

export { ReviewStarRating, ReviewStars };
