import Image from "next/image";
import React, { useMemo } from "react";

export default function Testimonials() {
  const TESTIMONIALS = useMemo(() => {
    return [
      {
        name: "James B",
        image: "/images/user-1.webp",
        text: "I’ve tried other payment apps, but Gimme makes it incredibly easy to pay small amounts without hassle. The security and speed are impressive. Highly recommend!",
      },
      {
        name: "Jumola Josph",
        image: "/images/user-2.webp",
        text: "I like the idea of frictionless payments, and Gimme does a good job, but I’d love to see more integrations with other apps. Keep up the good work!",
      },
      {
        name: "Andrew Doe",
        image: "/images/user-3.webp",
        text: "I love how smooth the payments are. No delays, no hidden fees—just simple microtransactions that actually work. Highly recommended!",
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
      <div className="inner flex gap-6 max-sm:gap-9 justify-center flex-wrap mt-[40px]">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card rounded-sm bg-color-main p-4 drop-shadow-xl flex flex-col gap-4 w-[350px] max-sm:w-[95%] max-md:w-[270px] flex-[0,0,auto]"
          >
            <Image
              className="border border-color-3 p-1 rounded-full object-cover size-[50px] mt-[-40px]"
              src={testimonial.image}
              alt="testimonial"
              width={100}
              height={100}
            />
            <p className="text-[12px] max-md:text-[11px] text-color-1/70">
              {testimonial.text}
            </p>
            <div>
              <p className="text-[12px] font-medium text-color-1/90">
                {testimonial.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
