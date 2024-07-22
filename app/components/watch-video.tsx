import SectionHeader from "./general/section-header";

function WatchVideo() {
  return (
    <>
      <SectionHeader
        subheading="Watch a video"
        mainHeading="Learn how to fullfil your needs"
        description="This section is to highlight a promo or demo video of your product.
          Analysts says a landing page with video has 3% more conversion rate.
          So, don't forget to add one. Just like this."
      />
      <div className="container p-4 md:p-8 lg:p-12 mx-auto xl:px-0 ">
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-indigo-300 cursor-pointer bg-gradient-to-tr from-purple-400 to-indigo-700">
          <button className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16  lg:w-28 lg:h-28"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Play Video</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default WatchVideo;
