'use client';

import { useEffect, useState } from 'react';
import "./Testi.css";
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    image: "/images/girl.jpg",
    quote:
      "“ When an unknown printer took a galley of type and scrambled to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. “",
    name: "Cristina Luwis",
    title: "Web Developer",
  },
  {
    image: "/images/girl.jpg",
    quote:
      "“ This platform helped me level up my skills rapidly. I loved every single lesson and project. “",
    name: "John Doe",
    title: "UI/UX Designer",
  },
];

const TestimonialSection = () => {
  const [animateClass, setAnimateClass] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimateClass("underline-animate"), 100);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="relative w-full py-16 px-4 sm:px-8 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url('/images/testimonial-bg.jpg')` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-[260px] aspect-[3/4] overflow-hidden rounded-full">
            <Image
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              width={260}
              height={346}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-white flex flex-col items-start justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-left">
            What Our{" "}
            <span
              className={`relative inline-block underline-svg ${animateClass}`}
            >
              Students
              {/* <svg
                className="underline absolute left-0 bottom-0"
                viewBox="0 0 145 25"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="underline-path"
                />
                <path
                  d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="underline-path delay"
                />
              </svg> */}
            </span>
            <br />
            Say About Us
          </h2>

          <div className="mb-4">
            <Image
              src="/images/quote.png"
              alt="Quote"
              width={70}
              height={70}
            />
          </div>

          <p className="text-lg font-light leading-relaxed italic border-l-4 border-yellow-400 pl-4 mb-4 text-left">
            {currentTestimonial.quote}
          </p>

          <div className="text-white mt-4 text-left">
            <h4 className="font-semibold text-lg">
              {currentTestimonial.name}
            </h4>
            <p className="text-sm text-blue-200">
              {currentTestimonial.title}
            </p>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
