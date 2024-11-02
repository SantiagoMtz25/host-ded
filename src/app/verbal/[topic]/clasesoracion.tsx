"use client";

import { usePathname } from "next/navigation";
import clasesOracion from "./clasesdeoracion.json";
import CustomPopUp from "../../components/CustomPopUp";
import { useState } from "react";
import Link from "next/link";

const ClasesOracionPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const { topic, exampleQuestion, exampleOptions, answer } = clasesOracion;

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

  // State to control popup visibility
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Toggle the popup visibility
  const handleSeeAnswer = () => {
    setPopupOpen(true);
  };

  // Close the popup
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <h1 className="text-xl font-bold">{topic}</h1>
      <p className="mt-4">
        <span className="font-bold">Oración declarativa o enunciativa:</span>
        Se caracteriza porque comunica para informar, declarar, enunciar o anunciar, algo que ocurre, ha ocurrido u ocurrirá.
      </p>
      <p className="text-orange-400 mt-4">Ayer fuimos a visitar a mi tía.</p>
      <p className="mt-4">
        <span className="font-bold">Oración interrogativa:</span>
        Es el planteamiento de algo que ignora el hablante y que desea conocer. Es una oración que pide una respuesta verbal.
      </p>
      <p className="text-orange-400 mt-4">¿Cuándo cumples años?</p>
      <p className="mt-4">
        <span className="font-bold">Oración interrogativa:</span>
        Expresa el deseo del hablante de suscitar una acción en los demás. Es una oración que pide una respuesta activa, no verbal.
      </p>
      <p className="text-orange-400 mt-4">Realiza tu tarea ya</p>
      <p className="mt-4">
        <span className="font-bold">Oración exclamativa:</span>
        Expresa sentimientos tales como: deseo, sorpresa, asombro o disgusto. En esta clase de oraciones, no aparece intento expreso de que alguien cumpla o ejecute una acción.
      </p>
      <p className="text-orange-400 mt-4">¡Vivan los novios!</p>
      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span>  identifica el inciso que representa el tipo de oración. Intencionalmente se han omitido los signos de interrogación y admiración.
      </p>
      <p className="text-base mt-4 ml-8">
        1. Es el inciso que tiene la oración declarativa.
      </p>
      <div className="w-full flex flex-row gap-4 justify-center">
        {exampleOptions.map((option, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded-2xl mt-4 transition-all hover:scale-105"
          >
            <p>{option}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-row justify-center gap-6">
        <button
          className={`cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl
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
            className={`min-h-14 cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl
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
        onClose={handleClosePopup}
      />
    </>
  );
};

export default ClasesOracionPage;
