import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const BookingModal = ({product}) => {
  const {user} = useContext(AuthContext);
  const {
    register,
    handleSubmit
  } = useForm();
  console.log(product);
  const handleBuyProduct =(data) => {
    console.log(data)
   
        
  };

  return (
    <div>
      <input type="checkbox" id="modal-for-booking" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label htmlFor="modal-for-booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="place-items-center my-6">
            <div className="w-full justify-center items-center">
              <h2 className="text-4xl text-center pb-6 font-extrabold text-orange-500">
                Booking this product  give your information.
              </h2>
              <form onSubmit={handleSubmit(handleBuyProduct)}>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-control w-full max-w-sm">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">
                        Your Name
                      </span>
                    </label>
                    <input
                      {...register("buyerName")}
                      type="text"
                      className="input input-bordered input-secondary w-full max-w-sm"
                      value={user?.displayName}
                      readOnly
                    />
                  </div>
                  <div className="form-control w-full max-w-sm">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">
                        Your Email
                      </span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="input input-bordered input-secondary w-full max-w-sm"
                      value={user?.email}
                      readOnly
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-control w-full max-w-sm">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">
                        Price
                      </span>
                    </label>
                    <input
                      {...register("price", { required: true })}
                      type="number"
                      value={product.price}
                      readOnly
                      className="input input-bordered input-secondary w-full max-w-sm"
                    />
                  </div>
                  <div className="form-control w-full max-w-sm">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">
                        Mobile No:
                      </span>
                    </label>
                    <input
                      {...register("mbNumber", { required: true })}
                      type="number"
                      className="input input-bordered input-secondary w-full max-w-sm"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-control w-full max-w-sm">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">
                        Product name
                      </span>
                    </label>
                    <input
                      {...register("productName", { required: true })}
                      type="text"
                      value={product.productName}
                      readOnly
                      className="input input-bordered input-secondary w-full max-w-sm"
                    />
                  </div>
                  <div className="form-control w-full max-w-sm">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">
                        Brand Name
                      </span>
                    </label>
                    <input
                      {...register("category", { required: true })}
                      type="text"
                      value={product.category}
                      readOnly
                      className="input input-bordered input-secondary w-full max-w-sm"
                    />
                  </div>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                     Your Location
                    </span>
                  </label>

                  <textarea
                    className="textarea textarea-secondary w-full "
                    type="text"
                    {...register("location", { required: true })}
                    placeholder="Write your location where you want to meet..."
                  ></textarea>
                </div>
                <input htmlFor="modal-for-booking" className='btn btn-accent mt-2 w-full' type="submit" value="Buy Now" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
