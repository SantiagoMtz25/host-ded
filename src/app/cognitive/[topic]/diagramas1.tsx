"use client";

import { usePathname } from "next/navigation";
import diagramas1 from "./diagramas1.json";
import { useState } from "react";
import CustomPopUp from "../../components/CustomPopUp";
import Link from "next/link";
import { useDarkMode } from "@/app/hooks/useDarkMode";

const Diagramas1Page: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const {
    topic,
    exampleQuestion,
    exampleOptions,
    answer,
    imageURL
  } = diagramas1;

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

  const renderImage = (image: string) => {
    if (!image) {
      return null;
    }

    return (
      <img
        src={image}
        alt="example"
        className="w-full h-full object-cover mt-4 rounded-2xl"
      />
    );
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleSeeAnswer = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <h1 className="text-xl font-bold">{topic}</h1>
      <p className="mt-4">
        Para estos ejercicios es importante observar los diferentes sectores que aparecen y ubicar en ellos a las personas o cosas de los que trata cada una de las preguntas.
      </p>
      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> se presentan tres círculos identificados con las letras D, G y I., con estos círculos se forman siete sectores que se identifican con los números del 1 al 7. En el diagrama se presentan varias preguntas en los que tendrás que identificar la sección apropiada.
      </p>
      <p className="text-base mt-4 pl-8">
        1. En un edificio hay varios centros que imparten tres diferentes cursos extracurriculares, como son: Danza, Gimnasia e Idiomas.
        Un grupo de amigos se puso de acuerdo este semestre para tomar uno o varios de esos cursos y la distribución quedo como sigue:
      </p>
      {renderImage(imageURL)}
      <p className="mt-4 pl-8">
        {exampleQuestion}
      </p>
      <div className="w-full flex flex-row flex-wrap gap-4 justify-center">
        {exampleOptions.map((option, index) => (
          <div
            key={index}
            className={`${isDarkMode ? "bg-gray-800" : "bg-gray-200"} p-4 rounded-2xl mt-4 transition-all hover:scale-105`}
          >
            <p>{option}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap justify-center gap-6">
        <button
          className={`w-40 min-h-14 cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl
${backgroundColor2}
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]`}
          onClick={
            handleSeeAnswer
          }
        >
          Ver Respuesta
        </button>
        <Link href={`${pathname}/quiz${lastPath}`}>
          <button
            className={`w-40 min-h-14 cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl
${backgroundColor2}
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]`}
          >
            Tomar Quiz
          </button>
        </Link>
      </div>
      <p className="mt-4 text-slate-600">
        Nota: Podrás retomar el quiz cuantes veces lo desees
      </p>

      {/* Popup component */}
      <CustomPopUp
        title={exampleQuestion}
        answer={`La respuesta correcta es: ${exampleOptions[answer]}`}
        isOpen={isPopupOpen}
        isDarkMode={isDarkMode}
        onClose={handleClosePopup}
      />
    </>
  );
};

export default Diagramas1Page;
