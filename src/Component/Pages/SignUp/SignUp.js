import React from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    return (
        <div>
            <div className="w-96">
        <h2 className="text-4xl text-center pb-6">Register here!! </h2>
        <form onSubmit={handleSubmit()}>
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
                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$*])(?=.*[0-9])/ },
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
          <input type="submit" className="btn btn-active w-full mt-6" />
          <label className="label">
            <span className="label-text-alt text-[16px] text-center">
              Already have an account?
              <Link className="text-[#19D3AE] font-normal" to={"/login"}>
                Please Log In.
              </Link>
            </span>
          </label>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            Continue With Google
          </button>
        </form>
      </div>
            
        </div>
    );
};

export default SignUp;