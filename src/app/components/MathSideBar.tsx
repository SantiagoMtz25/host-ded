"use client";

import Image from "next/image";
import faMinus from "../../../public/icons/faMinus.svg";
import faMinusWhite from "../../../public/icons/faMinusWhite.svg";
import { useState } from "react";
import GoBackBtn from "./GoBackBtn";
import Link from "next/link";
import { normalizeTitle } from "../utils/utils";
import { usePathname } from "next/navigation";

interface SubTopic {
  title: string;
  description: string;
}

interface Topic {
  title: string;
  description: string;
  points: SubTopic[];
}

interface SideBarProps {
  elements: Topic[];
  selectedTopicIndex: number;
  isDarkMode: boolean;
  onSelect?: (index: number) => void;
}

/**
 * 
 * @param elements gets the elements to render in the sidebar
 * @param isDarkMode gets a boolean to render the sidebar in dark mode
 * @param onSelect gets the index of the selected topic
 * @returns a sidebar component that renders the topics and subtopics if any.
 */
const SideBar: React.FC<SideBarProps> = ({ elements, isDarkMode, onSelect }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  const pathname = usePathname();

  const handleSelected = (index: number) => {
    setSelected(index === selected ? null : index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="w-28 sm:w-auto fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-2xl md:hidden"
      >
        {isSidebarVisible ? "Cerrar navegación" : "Abrir navegación"}
      </button>

      <div
        className={`mb-14 fixed top-0 left-0 h-full w-64 ${isDarkMode ? "bg-gray-800" : "bg-slate-50"} p-2 rounded-r-2xl md:rounded-2xl shadow-xl z-40 transition-transform duration-300 transform ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:block layout-content-container flex flex-col min-w-80`}
      >
        <div className={`mt-20 md:mt-0 flex h-full flex-col justify-between ${isDarkMode ? "bg-gray-800" : "bg-slate-50"} p-4 rounded-2xl`}>
          <div className="flex flex-col gap-4">
            <GoBackBtn isDarkMode={isDarkMode} />
            <div className="flex flex-col gap-2">
              {elements.map((element, index) => (
                <div key={index} className="flex flex-col">
                  <div
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer hover:scale-105 duration-200 ${
                      selected === index ? "bg-slate-300" : "bg-[#e7eef4]"
                    }
                    ${isDarkMode ? "bg-slate-600" : "text-[#0d151c]"}
                    `}
                    onClick={() => handleSelected(index)}
                  >
                    <div className={`text-[#0d151c]`}>
                      <Image
                        src={isDarkMode ? faMinusWhite : faMinus}
                        alt={`faMinus icon`}
                        width={24}
                        height={24}
                      />
                    </div>
                    <Link href="#">
                      <p className={`w-full ${isDarkMode ? "text-white" : "text-[#0d151c]"} text-base font-medium leading-normal`}>
                        {element.title}
                      </p>
                    </Link>
                  </div>
                  {selected === index && (
                    <div className="ml-8 mt-2 flex flex-col gap-1">
                      {element.points.map((point, subIndex) => (
                        <div
                          key={subIndex}
                          className={`flex items-center gap-2 px-3 py-1 rounded-md bg-[#e3e8ef] ${isDarkMode ? "bg-slate-600" : "text-[#0d151c]"}`}
                        >
                          <Image
                            src={isDarkMode ? faMinusWhite : faMinus}
                            alt={`faMinus icon`}
                            width={16}
                            height={16}
                          />
                          <Link
                            href={`${
                              pathname.includes("mathematics/")
                                ? pathname.slice(
                                    0,
                                    pathname.indexOf("mathematics/") +
                                      "mathematics/".length
                                  )
                                : "/mathematics/"
                            }${normalizeTitle(point.title)}`}
                            onClick={closeSidebar}
                          >
                            <p className={`${isDarkMode ? "text-white" : "text-[#0d151c]"} text-sm`}>
                              {point.title}
                            </p>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;