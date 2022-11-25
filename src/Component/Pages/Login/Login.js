import React, {useContext, useState} from 'react';
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import {useForm} from "react-hook-form"
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Login = () => {
  const { logIn } = useContext(AuthContext);
const [logInUserEmail, setLogInUserEmail] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const handleLogin = (data) => {
        // console.log(data);
        const { email, password } = data;
        logIn(email, password)
          .then((user) => {
            console.log(user);
            setLogInUserEmail(email);
          
          })
          .catch((error) => console.log(error));
      };
      console.log(logInUserEmail)
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 place-items-center justify-center items-center my-6">
        <div>
        <img className="w-96" src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=360" alt="" />
        </div>
      <div className="w-96">
        <h2 className="text-4xl text-center pb-6 font-extrabold text-orange-500">
          Sign In to Drive Your Sell or Buy!!
        </h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              {...register("email")}
              type="email"
              className="input input-bordered  input-secondary w-full max-w-sm"
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
              className="input input-bordered  input-secondary w-full max-w-sm"
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
              New to Reseller Market?
              <Link
                className="text-[#19D3AE] font-normal hover:text-primary"
                to={"/signup"}
              >
                Create a new account.
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

export default Login;