import React, { useEffect, useState } from "react";
import "../assets/landing-page.css";
import { useNavigate } from "react-router-dom";

export default function OurPosts() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  // useEffect(() => {
  //   fetch("http://localhost:2000/blog-posts")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setData(json);
  //     });
  // }, []);

  useEffect(() => {
    fetch("https://blog-post-api-2kmp.onrender.com/blog-posts")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  const showDetails = (id) => {
    navigate(`./${id}`);
  };
  return (
    <main className=" our_posts w-[90%] my-6 mx-auto">
      <p className=" font-semibold text-2xl text-center mb-[25px]">Our Posts</p>

      <section className=" posts_container grid grid-cols-3 gap-6 ">
        {data.map((post) => (
          <article
            className=" border border-transparent rounded-md p-3 cursor-pointer hover:border-gray-200 hover:bg-gray-100 "
            key={post.id}
            onClick={() => showDetails(post.id)}
          >
            <div className=" h-[200px]">
              <img src={post.img} className=" w-full h-full rounded-md " />
            </div>
            <div className=" flex flex-col gap-3 mt-3">
              <p className=" text-sm text-gray-400 ">
                <span className=" text-black ">Publushed on </span>
                {post.date}
              </p>

              <p className=" font-semibold text-lg post_top_title">
                {post.top_title}
              </p>

              <p className=" text-gray-500 text-sm post_sub_title">
                {post.sub_title}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

{
  /* <div className=" h-[200px] mb-3">
<img src={post.img} className=" w-full h-full rounded-md " />
</div>
<div className=" h-[40%] overflow-hidden">
<p className=" text-sm text-gray-400 mb-4">
  <span className=" text-black ">Publushed on </span>
  {post.date}
</p>

<p className=" font-semibold text-lg">{post.top_title}</p>

<p className=" text-gray-500">{post.sub_title}</p>
</div> */
}
