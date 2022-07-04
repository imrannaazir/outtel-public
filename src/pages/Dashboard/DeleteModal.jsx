import axios from "axios";
import React from "react";

const DeleteModal = ({ selectedPart, refetch }) => {
  //handle delete
  const handleDelete = () => {
    (async function () {
      const { data } = await axios.delete(
        `https://historic-cuyahoga-valley-56137.herokuapp.com/parts/${selectedPart}`
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
          <h3 class="font-bold text-lg">Confirm Delete!</h3>
          <p class="py-4">Are you sure you want to delete?</p>
          <div class="modal-action">
            <label for="delete-modal" class="btn">
              Cancel
            </label>
            <label
              onClick={handleDelete}
              for="delete-modal"
              class="btn btn-error"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
