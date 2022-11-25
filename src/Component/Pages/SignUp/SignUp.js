import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = (data) => {
    console.log(data);
  };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 place-content-center justify-center items-center my-6">
        <div>
        <img className="w-96" src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=360" alt="" />
        </div>
      <div className="w-96">
        <h2 className="text-4xl text-center pb-6 font-extrabold text-orange-500">
          Sign Up to Get Benefit !!
        </h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              {...register("email")}
              type="email"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$*])(?=.*[0-9])/ },
                message: "password must be strong",
              })}
              type="password"
              className="input input-bordered w-full max-w-sm"
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <label className="label">
            <span className="label-text font-semibold text-red">
              {/* {errorMess} */}
            </span>
          </label>
          <input
            type="submit"
            className="btn btn-active w-full btn-primary mt-6"
          />
          <label className="label">
            <span className="label-text-alt text-[16px] text-center">
              Already have an account?
              <Link className="text-[#04348f] font-normal" to={"/login"}>
                Please Log In.
              </Link>
            </span>
          </label>
          <div className="divider">OR</div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <button className="btn btn-outline btn-primary w-full text-4xl rounded-full">
            <FcGoogle></FcGoogle>
            </button>
            <button className="btn btn-outline btn-primary w-full text-4xl rounded-full font-bold">
            <BsFacebook></BsFacebook>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
