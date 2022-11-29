import React, {useContext, useState} from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const SignUp = () => {
  const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
  const [errorMess, setErrorMess] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = (data) => {
    setErrorMess("");
    // const image = data.image[0];
    // const formData = new FormData()
    // formData.append('image',image)
    // console.log(formData);
    const { name, email, password, role } = data;
    createUser(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        Swal.fire({
          title: 'Success!',
          text: 'Your account sucessfully created',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        updateUser(name)
          .then(() => {
            saveUser(name, email, role)
            navigate('/')
          })
          .catch((error) => {
            setErrorMess(error);
          });
      })
      .catch((error) => console.log(error));
  };
  const handleSignInWithGoogle = ()=>{
    signInWithGoogle()
    .then(result=>{
      console.log(result.user);
      const {displayName, email} = result.user;
      const user = {
        name: displayName,
        email: email,
        role: 'buyer'
      }
      saveGoogleUser(user)
      console.log(user)
      navigate('/')
    })
    .catch(error=>{
      const errorMessage = error.message;
      console.log(errorMessage)
    })
  };
   // post api for save user in DB
   const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch('https://resale-market-server-eight.vercel.app/users',{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log('save user success', data)
      });
  };
   // post api for save google user in DB
   const saveGoogleUser = (user) => {
    fetch('http://localhost:5000/users',{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log('save user success', data)
      });
  };
  
 
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 place-items-center justify-center items-center my-6">
      <div className="justify-center items-center">
        <img
          className="w-96"
          src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=360"
          alt=""
        />
      </div>
      <div className="w-96 justify-center items-center">
        <h2 className="text-4xl text-center pb-6 font-extrabold text-orange-500">
          Sign Up to Get Benefit !!
        </h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-semibold text-lg">Name</span>
            </label>
            <input
              {...register("name", { required: true})}
              type="text"
              className="input input-bordered input-secondary w-full max-w-sm"
            />
          </div>
         <div className="grid grid-cols-2 gap-4">
         <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-semibold text-lg">Select Your Role</span>
            </label>
            <select defaultValue={'select one'} {...register("role", { required: true})} className="select select-secondary w-full max-w-sm">
              <option value='seller'>Seller</option>
              <option value="buyer">Buyer</option>
              
            </select>
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-semibold text-lg">Upload a photo</span>
            </label>
            <input
              {...register("image")}
              type="file"
              className="input input-bordered input-secondary  w-full max-w-sm"
            />
          </div>
         </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-semibold text-lg">Email</span>
            </label>
            <input
              {...register("email", { required: true})}
              type="email"
              className="input input-bordered input-secondary  w-full max-w-sm"
            />
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-semibold text-lg">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$*])(?=.*[0-9])/ },
                message: "password must be strong",
              })}
              type="password"
              className="input input-bordered input-secondary  w-full max-w-sm"
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <label className="label">
            <span className="label-text font-semibold text-lg text-red">
              {errorMess}
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
            <button onClick={handleSignInWithGoogle} className="btn btn-outline btn-primary w-full text-4xl rounded-full">
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
