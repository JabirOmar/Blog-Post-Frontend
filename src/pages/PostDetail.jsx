import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  let { id } = useParams();

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:2000/blog-posts/${id}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setData(json);
  //     });
  // }, []);
  useEffect(() => {
    fetch(`https://blog-post-api-2kmp.onrender.com/blog-posts/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <div className=" post_detail w-[70%] mt-[40px] mx-auto text-lg">
      {/* {data.map((post) => ( */}
      <div key={data.id}>
        <p className=" font-semibold text-3xl text-center mb-3">
          {data.top_title}
        </p>

        <p className=" text-gray-400 mb-6 text-center">{data.sub_title}</p>

        <div className=" mb-6">
          <img src={data.img} className=" w-[70%] h-auto rounded-md mx-auto" />
        </div>

        <p className=" text-gray-500">{data.content}</p>
      </div>
      {/* ))} */}
    </div>
  );
}
