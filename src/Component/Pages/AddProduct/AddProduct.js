import React, {useContext} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AddProduct = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit
  } = useForm();
  const handleAddProduct =(data) => {
    const image = data.image[0];
    const formData = new FormData()
    formData.append('image',image)
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgKey}`;
    fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
            console.log(imgData);
          if (imgData.success) {
            const product = {
                category : data.category,
                email: data.email,
                condition: data.condition,
                description: data.description,
                image: imgData.data.url,
                mbNumber: data.mbNumber,
                price: parseInt(data.price),
                productName: data.productName,
                purchaseTime: data.purchaseTime

            }
            saveProduct(product)
          }
        });
    // console.log(data);
   
        
  };
//    post api for save produnt in DB
   const saveProduct = async(product) => {
    fetch('http://localhost:5000/addproduct',{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
             Swal.fire({
          title: 'Success!',
          text: 'Your product sucessfully added',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        navigate('/dashboard/myproduct')
        console.log('save product success', data)
      });
  };
  
    return (
        <div className="place-items-center my-6">
      <div className="w-full justify-center items-center">
        <h2 className="text-4xl text-center pb-6 font-extrabold text-orange-500">
          Add a product to SELL !!
        </h2>
        <form onSubmit={handleSubmit(handleAddProduct)}>
         <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
         <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-semibold text-lg">Your email</span>
            </label>
            <input
              {...register("email")}
              type="email"
              className="input input-bordered input-secondary w-full max-w-sm"
              value={user?.email}
              readOnly
            />
          </div>
         <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-semibold text-lg">Purchase Time</span>
            </label>
            <input
              {...register("purchaseTime", { required: true})}
              type="date"
              className="input input-bordered input-secondary w-full max-w-sm"
            />
          </div>
         </div>
         <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
         <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-semibold text-lg">Select Your product Condition</span>
            </label>
            <select defaultValue={'default'} {...register("condition", { required: true})} className="select select-secondary w-full max-w-sm">
              <option disabled value='default'>Select Condition...</option>
              <option value='excelent'>Excelent</option>
              <option value="good">Good</option>
              <option value="not bad">Not Bad</option>
              
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
         <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
         <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-semibold text-lg">Price</span>
            </label>
            <input
              {...register("price", { required: true})}
              type="number"
              className="input input-bordered input-secondary w-full max-w-sm"
            />
          </div>
         <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-semibold text-lg">Mobile No:</span>
            </label>
            <input
              {...register("mbNumber", { required: true})}
              type="number"
              className="input input-bordered input-secondary w-full max-w-sm"
            />
          </div>
         </div>
         <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
         <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-semibold text-lg">Product name</span>
            </label>
            <input
              {...register("productName", { required: true})}
              type="text"
              className="input input-bordered input-secondary w-full max-w-sm"
            />
          </div>
         <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-semibold text-lg">Brand Name</span>
            </label>
            <input
              {...register("category", { required: true})}
              type="text"
              className="input input-bordered input-secondary w-full max-w-sm"
            />
          </div>
         </div>
         <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-lg">Description</span>
            </label>
           
            <textarea className="textarea textarea-secondary w-full " type="text"  {...register("description", { required: true})} placeholder="Write about product"></textarea>
          </div>
          <input
            type="submit"
            className="btn btn-active w-full btn-primary mt-6"
          />
         
        </form>
      </div>
    </div>
    );
};

export default AddProduct;