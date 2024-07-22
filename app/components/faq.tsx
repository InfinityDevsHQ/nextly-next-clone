import { FAQQuiz } from "@/constants";
import ChevUpSvg from "./svgs/icons/chev-up-svg";

export default function Faq() {
  return (
    <div className="container p-4 md:p-8 lg:p-12 mx-auto xl:px-0">
      <div className="w-full max-w-2xl md:p-2 mx-auto rounded-2xl">
        {FAQQuiz.map((question) => (
          <div className="mb-5" key={question.id}>
            <button
              className="flex items-center justify-between w-full px-2 md:px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-neutral-800 dark:text-gray-200"
              id="headlessui-disclosure-button-:Rjafija:"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <span>{question.question}</span>
              <ChevUpSvg />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
