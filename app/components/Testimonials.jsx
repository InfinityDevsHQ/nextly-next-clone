import Image from "next/image"

function Testimonials() {
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
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-4 md:px-6 lg:px-12 py-6 md:py-10 lg:py-14 rounded-2xl  dark:bg-neutral-800">
              <p className="text-2xl leading-normal ">
                Share a real{" "}
                <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                  testimonial
                </mark>{" "}
                that hits some of your benefits from one of your popular
                customer.
              </p>
              <div className="flex items-center mt-8 space-x-3">
                <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                  <Image
                    alt="Avatar"
                    width="40"
                    height="40"
                    src="/user1.webp"
                  />
                </div>
                <div>
                  <div className="text-lg font-medium">Sarah Steiner</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    VP Sales at Google
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 rounded-2xl px-4 md:px-6 lg:px-12 py-6 md:py-10 lg:py-14 dark:bg-neutral-800">
              <p className="text-2xl leading-normal ">
                Make sure you only pick the{" "}
                <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                  right sentence
                </mark>{" "}
                to keep it short and simple.
              </p>
              <div className="flex items-center mt-8 space-x-3">
                <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                  <Image
                    alt="Avatar"
                    width="40"
                    height="40"
                    src="/user2.webp"
                  />
                </div>
                <div>
                  <div className="text-lg font-medium">Dylan Ambrose</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Lead marketer at Netflix
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-4 md:px-6 lg:px-12 py-6 md:py-10 lg:py-14 rounded-2xl dark:bg-neutral-800">
              <p className="text-2xl leading-normal ">
                This is an{" "}
                <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                  awesome
                </mark>{" "}
                landing page template I have seen. I would use this for
                anything.
              </p>
              <div className="flex items-center mt-8 space-x-3">
                <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                  <Image
                    alt="Avatar"
                    loading="lazy"
                    width="40"
                    height="40"
                    src="/user3.webp"
                  />
                </div>
                <div>
                  <div className="text-lg font-medium">Gabrielle Winn</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Co-founder of Acme Inc
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
