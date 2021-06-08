import React from "react";

const HeaderModal = () => {
  return (
    <div>
        {/* Modal Knap */}
      <button id="myBtn">Open Modal</button>

        {/* The modal */}
      <div id="myModal" class="modal">
          {/* Modal content */}
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderModal;
