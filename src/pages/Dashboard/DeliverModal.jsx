import axios from "axios";
import React from "react";

const DeliverModal = ({ selectedOrder, refetch }) => {
  const handleDeliver = () => {
    (async function () {
      const { data } = await axios.put(
        `https://outtel-backend.onrender.com/orders/${selectedOrder}`
      );
      console.log(data);
      refetch();
    })();
  };
  return (
    <div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="deliver-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm delivered!</h3>
          <p className="py-4">Are you sure you want to delivered this order?</p>
          <div className="modal-action">
            <label for="deliver-modal" className="btn">
              Cancel
            </label>
            <label
              onClick={handleDeliver}
              for="deliver-modal"
              className="btn btn-success"
            >
              Confirm
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverModal;
