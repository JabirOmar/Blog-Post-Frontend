import React, { useEffect, useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

export default function HeroSection() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  // useEffect(() => {
  //   fetch("http://localhost:2000/blog-posts")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setData(json);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

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

  let trendings = data.filter((posts) => posts.trending);

  let sliderIndex = 0;

  const sliderToLeft = () => {
    let slider = document.querySelector(".slider");

    sliderIndex = sliderIndex <= 0 ? 0 : sliderIndex - 1;
    slider.style.transform = `translateX(-${sliderIndex * 100}%)`;
    console.log(sliderIndex);
  };

  const sliderToRight = () => {
    let slider = document.querySelector(".slider");

    sliderIndex =
      sliderIndex < trendings.length - 1
        ? sliderIndex + 1
        : trendings.length - 1;
    slider.style.transform = `translateX(-${sliderIndex * 100}%)`;
    console.log(sliderIndex);
  };

  return (
    <section className=" hero_section w-[90%] mx-auto ">
      {/* Title */}
      <p className=" font-semibold text-3xl text-center my-9">Trending</p>

      <main className=" slider_container relative min-h-[350px] h-fit overflow-hidden">
        <div className=" slider flex h-full py-2 transition-all duration-300 ">
          {trendings.map((post) => (
            <div
              key={post.id}
              className=" slide_content min-w-full h-full flex gap-7 px-7"
            >
              <section className=" w-1/2 ">
                <img src={post.img} className=" w-full h-full rounded-[15px]" />
              </section>
              <section className=" w-1/2 rounded-lg flex flex-col justify-center">
                <p className=" text-gray-400 mb-4">
                  <span className=" text-black">Published on </span>
                  {post.date}
                </p>

                <p className=" font-semibold text-3xl mb-6">{post.top_title}</p>

                <p className=" text-gray-500">{post.sub_title}</p>
              </section>
            </div>
          ))}
        </div>

        <section>
          <div
            className=" absolute top-0 left-0 h-full flex items-center justify-center text-lg cursor-pointer"
            onClick={sliderToLeft}
          >
            <AiOutlineDoubleLeft />
          </div>
          <div
            className=" absolute top-0 right-0 h-full flex items-center justify-center text-lg cursor-pointer"
            onClick={sliderToRight}
          >
            <AiOutlineDoubleRight />
          </div>
        </section>
      </main>
    </section>
  );
}
