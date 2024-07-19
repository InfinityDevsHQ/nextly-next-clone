import Image from "next/image";
import { TestimonialCardProps } from "@/types/prop-types";
import TestimonialCard from "./general/testimonials-card";
import SectionHeader from "./general/section-header";

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
      <SectionHeader
        subheading="Testimonials"
        mainHeading="Here is what our customers said"
        description="Testimonials is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers."
      />
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
