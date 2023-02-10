import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import { db } from "../../firebase";

const ReviewChange = ({ review, prodId, user }) => {
  const [showModal, setShowModal] = useState(false);

  const deleteReview = async (review) => {
    await deleteDoc(
      doc(db, `product${prodId}`, "AllReviews", "reviews", review.id)
    );
    toast("Comment Deleted 🗑️");
  };

  const [editReview, setEditReview] = useState(review.data().review);

  const updateReview = async () => {
    await updateDoc(
      doc(db, `product${prodId}`, "AllReviews", "reviews", review.id),
      {
        review: editReview,
      }
    );
    toast("Review Edited 💬");
    setShowModal(false);
  };

  return (
    <>
      <div>
        {user.userID === review.data().userId ? (
          <>
            <button
              onClick={() => setShowModal(true)}
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
            >
              <BsFillPencilFill />
            </button>{" "}
            <button
              type="button"
              className="text-red-700 ml-3 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
              onClick={() => deleteReview(review)}
            >
              <AiFillDelete />
            </button>
          </>
        ) : (
          ""
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="p-2 ">
          <div className="flex justify-between	 items-center border-b border-gray-700">
            Edit Review
            <div className="icon group">
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
                value={editReview}
                onChange={(e) => setEditReview(e.target.value)}
              />
            </div>
            <button
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 h-full "
              disabled={!editReview.trim()}
              onClick={updateReview}
            >
              Comment
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ReviewChange;
