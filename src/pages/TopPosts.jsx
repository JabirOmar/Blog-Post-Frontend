import React, { useEffect, useState } from "react";

export default function TopPosts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://blog-post-api-2kmp.onrender.com/blog-posts")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let popularPosts = data.filter((posts) => posts.popular);
  return (
    <div className=" mt-[20px] ">
      {/* P */}
      <p className=" text-center font-semibold text-2xl mb-6">Popular Posts</p>

      <main className=" w-full flex gap-2 h-[400px] overflow-scroll px-[20px]">
        {popularPosts.map((post) => (
          <section
            key={post.id}
            className=" min-w-[400px] border border-gray-200 rounded-md p-3"
          >
            <div className=" h-[80%]">
              <img src={post.img} className=" w-full h-full rounded-md" />
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
