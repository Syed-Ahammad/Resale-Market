import React from "react";

const BookingModal = () => {
  return (
    <div>
        {/* The button to open modal */}
{/* <label htmlFor="modal-for-booking" className="btn">open modal</label> */}
      <input type="checkbox" id="modal-for-booking" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="modal-for-booking" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
