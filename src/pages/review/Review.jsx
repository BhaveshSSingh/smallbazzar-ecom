import { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import Modal from "../../components/Modal";
import { ReviewStarRating, ReviewStars } from "./ReviewHelper";

const Review = () => {
  const [showModal, setShowModal] = useState(false);
  const [writeReview, setWriteReview] = useState("");
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  // review
  const HandleReview = () => {
    console.log(writeReview, rating);

    setWriteReview("");
    setRating(null);
    setShowModal(false);
  };

  return (
    <div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-start items-start w-full space-y-8">
        <div className="flex  w-full justify-between">
          <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
            Reviews
          </p>
          <button
            type="button"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={() => setShowModal(true)}
          >
            <BsPencil size={15} className="mr-1" /> Write a review
          </button>
        </div>

        {/* Comment modal */}
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <div className="p-2 ">
            <div className="flex justify-between	 items-center border-b border-gray-700">
              Review
              <div className="icon group cursor-pointer">
                <MdClose size={28} onClick={() => setShowModal(false)} />
              </div>
            </div>
            <div className="pt-4 flex justify-between">
              <div className="pt-4">
                <input
                  className="bg-transparent outline-none text-lg 
             placeholder-gray-500 w-full"
                  type="text"
                  autoFocus
                  value={writeReview}
                  onChange={(e) => setWriteReview(e.target.value)}
                />
                <div className="">
                  <h3 className="text-gray-500">Rate your purchase</h3>
                  <div>
                    <ReviewStars
                      hover={hover}
                      setHover={setHover}
                      rating={rating}
                      setRating={setRating}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() => HandleReview()}
                type="button"
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 h-full"
              >
                Post review
              </button>
            </div>
          </div>
        </Modal>

        {/* Loop would be here */}
        <div className="w-full flex justify-start items-start flex-col bg-gray-50 p-8">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="flex flex-row justify-between items-start">
              <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">
                this can be substring of the first few words or review
              </p>
            </div>
          </div>

          <div className={"block"}>
            <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">
              When you want to decorate your home, the idea of choosing a
              decorative theme can seem daunting. Some themes seem to have an
              endless amount of pieces, while others can feel hard to accomplish
            </p>

            {/* Avatar of the reviewer */}
            <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
              <div>
                <img
                  src="https://i.ibb.co/QcqyrVG/Mask-Group.png"
                  alt="girl-avatar"
                />
              </div>
              <div className="flex flex-col justify-start items-start space-y-2">
                <p className="text-base font-medium leading-none text-gray-800">
                  Anna Kendrick Name of reviewer
                </p>
                <p className="text-sm leading-none text-gray-600">
                  14 July 2021 use Moment here
                </p>
                <div>
                  <ReviewStarRating rate={rating} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
