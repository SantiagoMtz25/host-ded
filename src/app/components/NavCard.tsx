"use client";

import Image from "next/image";
import { useDarkMode } from "../hooks/useDarkMode";

export interface NavCardProps {
  num: number;
  title: string;
  description: string;
  path: string;
  icon: string;
}

const NavCard: React.FC<NavCardProps> = ({
  num,
  title,
  description,
  path,
  icon,
}) => {
  const [isDarkMode] = useDarkMode();

  return (
    <>
      <div
        className={`
      hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl
      sm:w-[90%] lg:grow /* md:w-80 */ shadow-[0px_0px_15px_rgba(0,0,0,0.2)] p-9 space-y-3 relative overflow-hidden flex flex-col justify-between content-start
      ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}
      `}
      >
        <div
          className={`w-24 h-24 rounded-full absolute -right-5 -top-7 ${
            num === 1
              ? "bg-light_green"
              : num === 2
              ? "bg-kinda_red"
              : "bg-indigo_blue"
          }`}
        >
          <p className="absolute bottom-5 left-9 text-white text-2xl font-bold">{num}</p>
        </div>
        <div className="">
          <div className="h-[42px] fill-violet-500 w-12">
            <Image
              src={icon}
              alt={`${title} icon`}
              width={42}
              height={42}
            />
          </div>
          <h1 className="font-bold text-xl pt-3 mt-2">{title}</h1>
        </div>
        <p className={`h-full text-base leading-6 flex flex-col justify-start ${isDarkMode ? 'text-white' : 'text-zinc-600'}`}>
          {description}
        </p>

        <a
          href={path}
          className="text-white text-sm font-bold rounded-2xl bg-slate-500 px-3 py-2 w-24 text-center"
        >
          <button>Aprender</button>
        </a>
      </div>
    </>
  );
};

export default NavCard;
