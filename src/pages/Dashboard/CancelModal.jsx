import axios from "axios";
import React from "react";

const CancelModal = ({ selectedCancel, refetch }) => {
  const handleCancel = () => {
    (async function () {
      const { data } = await axios.delete(
        `https://historic-cuyahoga-valley-56137.herokuapp.com/orders/${selectedCancel}`
      );
      console.log(data);
      refetch();
    })();
  };
  return (
    <div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="cancel-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Confirm Cancel!</h3>
          <p class="py-4">Are you sure you want to cancel your order?</p>
          <div class="modal-action">
            <label for="cancel-modal" class="btn ">
              Cancel
            </label>
            <label
              onClick={handleCancel}
              for="cancel-modal"
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

export default CancelModal;
