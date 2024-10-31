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

  return (
    <div className="hidden md:block layout-content-container flex flex-col min-w-80">
      <div className="flex h-full flex-col justify-between bg-slate-50 p-4 rounded-2xl">
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
  );
};

export default SideBar;
