import { ReactNode } from "react";

export type TestimonialCardProps = {
  children: ReactNode;
  reviewerName: string;
  reviewerPost: string;
  reviewerImageUrl: string;
};
export type SectionHeaderProps = {
  subheading: string;
  mainHeading: string;
  description: string;
};
