"use client";

import faMinus from "../../../public/icons/faMinus.svg";
import { useState } from "react";
import GoBackBtn from "./GoBackBtn";
import Link from "next/link";
import { normalizeTitle } from "../utils/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface SideBarProps {
  elements: string[];
  onSelect?: (index: number) => void;
}

const SideBar: React.FC<SideBarProps> = ({ elements, onSelect }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  const pathname = usePathname();
  const pathToNavigate = pathname.includes("cognitive")
    ? "cognitive"
    : pathname.includes("verbal")
    ? "verbal"
    : "cognitive";

  const handleSelected = (index: number) => {
    setSelected(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-2xl md:hidden"
      >
        {isSidebarVisible ? "Cerrar navegación" : "Abrir navegación"}
      </button>

      {/* Sidebar Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-50 p-2 rounded-r-2xl md:rounded-2xl shadow-xl z-40 transition-transform duration-300 transform ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:block layout-content-container flex flex-col min-w-80`}
      >
        <div className="mt-10 md:mt-0 flex h-full flex-col justify-between p-2">
          <div className="flex flex-col gap-4">
            <GoBackBtn />
            <div className="flex flex-col gap-2">
              {elements.map((element, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer hover:scale-105 duration-200 ${
                    selected === index ? "bg-slate-300" : "bg-[#e7eef4]"
                  }`}
                  onClick={() => handleSelected(index)}
                >
                  <div
                    className="text-[#0d151c]"
                    data-icon="House"
                    data-size="24px"
                    data-weight="fill"
                  >
                    <Image
                      src={faMinus}
                      alt={`faMinus icon`}
                      width={24}
                      height={24}
                    />
                  </div>
                  <Link
                    href={`${
                      pathname.includes(`${pathToNavigate}/`)
                        ? pathname.slice(
                            0,
                            pathname.indexOf(`${pathToNavigate}/`) +
                              `${pathToNavigate}/`.length
                          )
                        : `/${pathToNavigate}/`
                    }${normalizeTitle(element)}`}
                    className="w-full"
                  >
                    <p className="w-full text-[#0d151c] text-base font-medium leading-normal">
                      {element}
                    </p>
                  </Link>
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
