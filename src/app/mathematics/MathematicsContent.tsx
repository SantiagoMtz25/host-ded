// src/components/MathematicsContent.tsx
"use client";

import React from "react";
import MainSubjects from "../components/MainSubjects";
import SubjectCard from "../components/SubjectCard";
import mathematics from "./mathematics.json";

interface MathematicsContentProps {
  selectedTopicIndex: number;
}

const MathematicsContent: React.FC<MathematicsContentProps> = ({
  selectedTopicIndex,
}) => {
  const selectedTopic = mathematics.topics[selectedTopicIndex];

  return (
    <div className="flex flex-col w-full lg:max-w-[1120px] px-2">
      <MainSubjects
        title={mathematics.title}
        description={mathematics.description}
        points={mathematics.points}
      >
        {selectedTopic ? (
          selectedTopic.points.map((point, pointIndex) => (
            <SubjectCard
              key={pointIndex}
              title={point.title}
              description={point.description}
              colorToRender={mathematics.color}
            />
          ))
        ) : (
          <p className="text-gray-500 pl-4">Por favor selecciona un tema.</p>
        )}
      </MainSubjects>
    </div>
  );
};

export default MathematicsContent;
