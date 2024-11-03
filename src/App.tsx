import { api } from "./api";
import { useState } from "react";

export const App = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleShort = () => {
    setIsLoading(true);

    api
      .post("/short", {
        url,
      })
      .then((res) => {
        console.log(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-dark h-full grid place-items-center">
      <div className="lg:max-w-[540px] w-full lg:h-[300px] px-6">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-10 font-bold ">
          Сокращение ссылки
        </h1>
        <div className="flex gap-4 md:gap-6 md:flex-row flex-col">
          <input
            className="w-full bg-transparent border border-[#262626] rounded-lg h-large px-4 text-base text-[#999] placeholder:text-[#999]"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Введите ссылку"
            type="text"
          />
          <button
            className="bg-[#703BF7] h-large rounded-lg px-4 text-white text-base"
            onClick={handleShort}
          >
            Сократить
          </button>
        </div>
        <div className="flex items-center justify-between mt-4 md:mt-6 gap-6 bg-[#1A1A1A] rounded-lg h-large px-4 text-[#999] border border-[#262626]">
          http://ya.ru/sdokokd2o
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        </div>
      </div>
    </div>
  );
};
