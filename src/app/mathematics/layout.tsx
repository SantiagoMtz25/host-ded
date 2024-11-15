"use client";

import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import MathSideBar from "../components/MathSideBar";
import subjects from "./mathematics.json";
import { useDarkMode } from "../hooks/useDarkMode";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);

  const [isDarkMode] = useDarkMode();

  // Handler to update the selected topic index
  const handleSelectTopic = (index: number) => {
    setSelectedTopicIndex(index);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full lg:max-w-[1120px] self-center">
        <NavBar />
        <div className="flex flex-row gap-4 w-full lg:max-w-[1120px] self-center px-2 mb-16">
          {/* Sidebar is now always visible */}
          <MathSideBar
            elements={subjects.topics}
            selectedTopicIndex={selectedTopicIndex}
            isDarkMode={isDarkMode}
            onSelect={handleSelectTopic}
          />
          {/* Render the page's children */}
          {React.cloneElement(children as React.ReactElement, {
            selectedTopicIndex,
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
