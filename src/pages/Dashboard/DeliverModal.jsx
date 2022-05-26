import axios from "axios";
import React from "react";

const DeliverModal = ({ selectedOrder, refetch }) => {
  const handleDeliver = () => {
    (async function () {
      const { data } = await axios.put(
        `http://localhost:5000/orders/${selectedOrder}`
      );
      console.log(data);
      refetch();
    })();
  };
  return (
    <div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="deliver-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations random Interner user!-{selectedOrder}
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label onClick={handleDeliver} for="deliver-modal" class="btn">
              Confirm
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverModal;
