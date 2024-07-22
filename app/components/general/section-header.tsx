import { SectionHeaderProps } from "@/types/prop-types";

export default function SectionHeader({
  subheading,
  mainHeading,
  description,
}: SectionHeaderProps) {
  return (
    <div className="container p-4 md:p-8 lg:p-12 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
      <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
        {subheading}
      </div>
      <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        {mainHeading}
      </h2>
      <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}
