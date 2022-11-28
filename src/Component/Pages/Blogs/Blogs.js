import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../SharedPage/Loading/Loading";

const Blogs = () => {
  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["/blogs"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/blogs`);
      const data = await res.json();
      return data;
    },
  });
  console.log(blogs);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1  className="text-6xl text-center pb-6 font-extrabold text-orange-500">Welcome to our blogs..</h1>
      <div>
        {blogs.map((blog) => (
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{blog.qes}</h2>
              <p>{blog.ans}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
