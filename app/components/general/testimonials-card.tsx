import { TestimonialCardProps } from "@/types/prop-types";
import Image from "next/image";
export default function TestimonialCard({
  children,
  reviewerImageUrl,
  reviewerName,
  reviewerPost,
}: TestimonialCardProps) {
  return (
    <div>
      <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-4 md:px-6 lg:px-12 py-6 md:py-10 lg:py-14 rounded-2xl dark:bg-neutral-800">
        {children}
        <div className="flex items-center mt-8 space-x-3">
          <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
            <Image
              alt="Avatar"
              loading="lazy"
              width="40"
              height="40"
              src={reviewerImageUrl}
            />
          </div>
          <div>
            <div className="text-lg font-medium">{reviewerName}</div>
            <div className="text-gray-600 dark:text-gray-400">
              {reviewerPost}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
