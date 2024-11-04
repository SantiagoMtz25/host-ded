"use client";

import { usePathname } from "next/navigation";
import expresionAlgebraica from "./expresionalgebraica.json";
import CustomPopUp from "../../components/CustomPopUp";
import { useState } from "react";

const ExpresionAlgebraicaPage: React.FC = () => {
  const pathname = usePathname();

  const { topic, exampleQuestion, exampleOptions, answer } =
    expresionAlgebraica;

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
        La evaluación de una expresión algebraica consiste en sustituir el o los
        valores proporcionados de las variables, para encontrar el valor
        numérico de la expresión.
      </p>
      <p className="mt-4">
        Es importante considerar al evaluar una expresión algebraica alguno de
        los siguientes conceptos:
      </p>
      <div className="grid grid-cols-2 gap-4 p-4 bg-gray-100 mt-4">
        {/* Row 1: Headers */}
        <div className="bg-[#afdceb] font-bold p-2">
          Signos en las operaciones suma y/o resta
        </div>
        <div className="bg-[#afdceb] font-bold p-2">Ejemplo</div>

        {/* Row 2: Addition and Subtraction Rules */}
        <div className="border p-4 bg-[#cae9f5]">
          <p>
            El signo del resultado será el signo del número con mayor valor
            absoluto.
          </p>
        </div>
        <div className="border p-4">
          <p>-9 + 7 = -2</p>
          <p>9 - 7 = +2</p>
        </div>

        {/* Row 3: Same Sign Addition */}
        <div className="border p-4 bg-[#cae9f5]">
          <p>
            Si los signos de los dos números son iguales, el resultado tiene el
            signo que lleven los números.
          </p>
        </div>
        <div className="border p-4">
          <p>9 + 7 = +16</p>
          <p>-9 - 7 = -16</p>
        </div>

        {/* Row 4: Multiplication Sign Rules */}
        <div className="border p-4 bg-[#cae9f5]">
          Signos en la multiplicación
        </div>
        <div className="border p-4">
          <p>
            La multiplicación de números con signos diferentes da resultado
            negativo (-).
          </p>
          <p>
            (+) × (-) = -<br />
            (-) × (+) = -
          </p>
        </div>

        {/* Row 5: Same Sign Multiplication */}
        <div className="border p-4 bg-[#cae9f5]">
          <p>
            La multiplicación de números con signos iguales da resultado
            positivo (+).
          </p>
        </div>
        <div className="border p-4">
          <p>
            (-) × (-) = +<br />
            (+) × (+) = +
          </p>
        </div>
      </div>

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span>
      </p>
      <p className="text-base mt-4 pl-8">1. Lea y analiza el problema.</p>
      <p className="text-base mt-4 pl-8">
        2. Resuelve la evaluación de la expresión algebraica considerando
        algunos de los conceptos de signos.
      </p>
      <p className="text-base mt-4 pl-8">
        El inciso que tiene el valor de la expresión (2x -3y)/2, donde x= - 4;
        y= 2 es:
      </p>
      <p className="text-base mt-4 pl-8">{exampleQuestion}</p>
      <div className="w-full flex flex-row flex-wrap gap-4 justify-center">
        {exampleOptions.map((option, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded-2xl mt-4 transition-all hover:scale-105"
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
        <button
          className={`w-40 min-h-14 cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl
${backgroundColor2}
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]`}
        >
          Tomar Quiz
        </button>
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

export default ExpresionAlgebraicaPage;
