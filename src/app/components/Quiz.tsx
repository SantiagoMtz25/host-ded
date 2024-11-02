"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

type QuestionProps = {
  question: string;
  options: string[];
  answer: number; //index of the correct answer
  explanation?: string;
};

export interface QuizComponentProps {
  title: string;
  description: string;
  questionDescription?: string;
  questions: QuestionProps[];
}

const QuizComponent: React.FC<QuizComponentProps> = ({
  title,
  description,
  questions,
}) => {
  const pathname = usePathname();

  const backgroundColor = pathname.includes("cognitive")
    ? "bg-[#bde2b9]"
    : pathname.includes("verbal")
    ? "bg-[#ff7e82]"
    : pathname.includes("math")
    ? "bg-[#afdceb]"
    : "bg-gray-500";

  const backgroundColor2 = pathname.includes("cognitive")
    ? "bg-[#addbad]"
    : pathname.includes("verbal")
    ? "bg-[#ff585d]"
    : pathname.includes("math")
    ? "bg-[#afdceb]"
    : "bg-[#c0c0c0]";

  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = React.useState<number>(0);
  
  useEffect(() => {
    setSelectedOption(null); 
  }, [currentQuestion]);

  const handleCheckAnswer = () => {
    if (selectedOption === null) {
      alert("Selecciona una opción");
      return;
    }

    if (selectedOption === questions[currentQuestion].answer) {
      alert("Respuesta correcta");
      setCorrectAnswers(correctAnswers + 1);
    } else {
      alert("Respuesta incorrecta");
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Has terminado el quiz. ${correctAnswers + 1} respuestas correctas`);
    }
  };

  return (
    <>
      <div className="w-full h-full px-2">
        <h1 className="font-bold text-xl">
          Quiz de {title.charAt(0).toUpperCase() + title.slice(1)}
        </h1>
        <p className="mt-2">{description}</p>
        <div className="mt-2 flex flex-col gap-2 justify-center items-center">
          <p className="font-semibold text-lg">Pregunta {currentQuestion + 1} de {questions.length}</p>
          <h2 className="font-semibold text-lg">
            {questions[currentQuestion].question}
          </h2>
          <div className="flex flex-col gap-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
              key={index}
              className={`w-72 min-h-14 cursor-pointer transition-all ${
                selectedOption === index ? backgroundColor : "bg-slate-200"
              } text-black px-6 py-2 rounded-2xl
      ${backgroundColor2}
      border-b-[4px] hover:brightness-110 active:brightness-90 `}
              onClick={() => setSelectedOption(selectedOption === index ? null : index)}
              >
              {option}
              </button>
            ))}
            <div className="self-end">
              <button
                className={`min-h-14 cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl
${backgroundColor2}
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] shadow-lg`}
                onClick={handleCheckAnswer}
              >
                Siguiente
              </button>
            </div>
            <progress
              className="w-72 mt-2 rounded-2xl appearance-none h-4"
              value={currentQuestion + 1}
              max={questions.length}
              style={{
              backgroundColor: "#e0e0e0",
              borderRadius: "8px",
              overflow: "hidden",
              }}
            >
              <div
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                backgroundColor: "#4caf50",
                height: "100%",
              }}
              ></div>
            </progress>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizComponent;
