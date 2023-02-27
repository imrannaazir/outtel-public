import axios from "axios";
import React from "react";

const DeleteModal = ({ selectedPart, refetch }) => {
  //handle delete
  const handleDelete = () => {
    (async function () {
      const { data } = await axios.delete(
        `https://outtel-backend.onrender.com/parts/${selectedPart}`
      );
      console.log(data);
      refetch();
    })();
  };
  return (
    <div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Delete!</h3>
          <p className="py-4">Are you sure you want to delete?</p>
          <div className="modal-action">
            <label for="delete-modal" className="btn">
              Cancel
            </label>
            <label
              onClick={handleDelete}
              for="delete-modal"
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

export default DeleteModal;
