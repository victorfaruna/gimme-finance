import Image from "next/image";
import React, { useMemo } from "react";

export default function Testimonials() {
  const TESTIMONIALS = useMemo(() => {
    return [
      {
        name: "John Doe",
        image: "/images/user-1.webp",
        text: "Lorem ipsum dolor sit! Sint aspernatur velit quod ea nesciunt! cupiditate voluptas laboriosam vitae ex.",
      },
      {
        name: "John Doe",
        image: "/images/user-1.webp",
        text: "Lorem ipsum dolor sit! Sint aspernatur velit quod ea nesciunt! cupiditate voluptas laboriosam vitae ex.",
      },
      {
        name: "John Doe",
        image: "/images/user-1.webp",
        text: "Lorem ipsum dolor sit! Sint aspernatur velit quod ea nesciunt! cupiditate voluptas laboriosam vitae ex.",
      },
    ];
  }, []);
  return (
    <div className="w-full over-x-hidden testimonials-container px-[8rem] py-[4rem] max-md:px-[2rem] max-md:py-[2rem]">
      <p className="uppercase font-radhiumz text-center text-[15px] max-md:text-[11px] text-color-1/70">
        Testimonial
      </p>
      <p className="font-radhiumz text-[35px] max-md:text-[22px] text-center font-bold">
        What Our Users
        <br />
        Say About Us.
      </p>
      <div className="inner flex gap-6 justify-center flex-wrap mt-[40px]">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card rounded-sm bg-color-main p-4 drop-shadow-lg flex flex-col gap-4 max-w-[280px] flex-[0,0,auto]"
          >
            <Image
              className="rounded-full object-cover size-[50px] mt-[-30px]"
              src={testimonial.image}
              alt="testimonial"
              width={100}
              height={100}
            />
            <p className="text-[12px] max-md:text-[11px] text-color-1/70">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
