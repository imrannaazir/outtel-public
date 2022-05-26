import axios from "axios";
import React from "react";

const DeleteModal = ({ selectedPart, refetch }) => {
  //handle delete
  const handleDelete = () => {
    (async function () {
      const { data } = await axios.delete(
        `http://localhost:5000/parts/${selectedPart}`
      );
      console.log(data);
      refetch();
    })();
  };
  return (
    <div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations random Interner user!-{selectedPart}
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label onClick={handleDelete} for="delete-modal" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
