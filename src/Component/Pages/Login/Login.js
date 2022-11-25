import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form"

const Login = () => {
    const { register} = useForm();
    return (
        <div className="h-[800px] flex justify-center items-center">
      <div className="w-96">
        <h2 className="text-4xl text-center pb-6"> Log In </h2>
        <form onSubmit={''}>
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
              {...register("password")}
              type="password"
              className="input input-bordered w-full max-w-sm"
            />
            <label className="label">
              <span className="label-text-alt">
                <Link to={"/"}>Forget password ?</Link>
              </span>
            </label>
          </div>
          <input type="submit" className="btn btn-active w-full mt-6" />
          <label className="label">
            <span className="label-text-alt text-[16px] text-center">
              New to Doctors Portal?
              <Link
                className="text-[#19D3AE] font-normal hover:text-primary"
                to={"/signup"}
              >
                Create a new accout.
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

export default Login;