"use client";

import MainSubjects from "../components/MainSubjects";
import SubjectCard from "../components/SubjectCard";
import cognitive from "./verbal.json";
import subjects from "./verbalSubjects.json";
import { useDarkMode } from "../hooks/useDarkMode";

const VerbalPage = () => {
  const [isDarkMode] = useDarkMode();

  return (
    <div className="flex flex-row gap-4 w-full lg:max-w-[1120px] self-center px-2">
      <MainSubjects
        title={cognitive.title}
        description={cognitive.description}
        points={cognitive.points}
        isDarkMode={isDarkMode}
      >
        {subjects.map((subject, index) => (
          <SubjectCard
            key={index}
            title={subject.title}
            description={subject.description}
            isDarkMode={isDarkMode}
            colorToRender={cognitive.color}
          />
        ))}
      </MainSubjects>
    </div>
  );
};

export default VerbalPage;
