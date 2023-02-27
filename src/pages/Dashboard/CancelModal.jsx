import axios from "axios";
import React from "react";

const CancelModal = ({ selectedCancel, refetch }) => {
  const handleCancel = () => {
    (async function () {
      const { data } = await axios.delete(
        `https://outtel-backend.onrender.com/orders/${selectedCancel}`
      );
      console.log(data);
      refetch();
    })();
  };
  return (
    <div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="cancel-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Cancel!</h3>
          <p className="py-4">Are you sure you want to cancel your order?</p>
          <div className="modal-action">
            <label for="cancel-modal" className="btn ">
              Cancel
            </label>
            <label
              onClick={handleCancel}
              for="cancel-modal"
              className="btn btn-error"
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
