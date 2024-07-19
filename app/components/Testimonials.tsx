import Image from "next/image";
import { TestimonialCardProps } from "@/types/prop-types";
import TestimonialCard from "./testimonials-card";

function Testimonials() {
  const Reviews: TestimonialCardProps[] = [
    {
      reviewerName: "Sarah Steiner",
      reviewerPost: "VP Sales at Google",
      reviewerImageUrl: "/user1.webp",
      children: (
        <p className="text-2xl leading-normal ">
          Share a real{" "}
          <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
            testimonial
          </mark>{" "}
          that hits some of your benefits from one of your popular customer.
        </p>
      ),
    },
    {
      reviewerName: "Dylan Ambrose",
      reviewerPost: "Lead marketer at Netflix",
      reviewerImageUrl: "/user2.webp",
      children: (
        <p className="text-2xl leading-normal ">
          Make sure you only pick the{" "}
          <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
            right sentence
          </mark>{" "}
          to keep it short and simple.
        </p>
      ),
    },
    {
      reviewerName: "Gabrielle Winn",
      reviewerPost: "Co-founder of Acme Inc",
      reviewerImageUrl: "/user3.webp",
      children: (
        <p className="text-2xl leading-normal">
          This is an{" "}
          <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
            awesome
          </mark>{" "}
          landing page template I have seen. I would use this for anything.
        </p>
      ),
    },
  ];
  return (
    <>
      <div className="container p-4 md:p-8 lg:p-12 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          Testimonials
        </div>
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Here is what our customers said
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Testimonials is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
        </p>
      </div>
      <div className="container p-4 md:p-8 lg:p-12 mx-auto xl:px-0 ">
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {Reviews.map((review, index) => (
            <TestimonialCard
              key={index}
              reviewerName={review.reviewerName}
              reviewerPost={review.reviewerPost}
              reviewerImageUrl={review.reviewerImageUrl}
            >
              {review.children}
            </TestimonialCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonials;
