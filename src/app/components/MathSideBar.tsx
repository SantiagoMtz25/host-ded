"use client";

import Image from "next/image";
import faMinus from "../../../public/icons/faMinus.svg";
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
  onSelect?: (index: number) => void;
}

const SideBar: React.FC<SideBarProps> = ({ elements, onSelect }) => {
  const [selected, setSelected] = useState<number | null>(null);

  const pathname = usePathname();

  const handleSelected = (index: number) => {
    setSelected(index === selected ? null : index);
    if (onSelect) {
      onSelect(index);
    }
  };

  return (
    <div className="hidden md:block layout-content-container flex flex-col max-w-80 min-w-80">
      <div className="flex h-full flex-col justify-between bg-slate-50 p-4 rounded-2xl">
        <div className="flex flex-col gap-4">
          <GoBackBtn />
          <div className="flex flex-col gap-2">
            {elements.map((element, index) => (
              <div key={index} className="flex flex-col">
                <div
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer hover:scale-105 duration-200 ${
                    selected === index ? "bg-slate-300" : "bg-[#e7eef4]"
                  }`}
                  onClick={() => handleSelected(index)}
                >
                  <div className="text-[#0d151c]">
                    <Image
                      src={faMinus}
                      alt={`faMinus icon`}
                    />
                  </div>
                  <Link href="#">
                    <p className="w-full text-[#0d151c] text-base font-medium leading-normal">
                      {element.title}
                    </p>
                  </Link>
                </div>
                {selected === index && (
                  <div className="ml-8 mt-2 flex flex-col gap-1">
                    {element.points.map((point, subIndex) => (
                      <div
                        key={subIndex}
                        className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#e3e8ef]"
                      >
                        <Image
                          src={faMinus}
                          alt={`faMinus icon`}
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
                        >
                          <p className="text-[#0d151c] text-sm">
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
  );
};

export default SideBar;
