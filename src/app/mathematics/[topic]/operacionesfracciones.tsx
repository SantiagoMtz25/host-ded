"use client";

import { usePathname } from "next/navigation";
import operacionesFracciones from "./operacionesfracciones.json";
import CustomPopUp from "../../components/CustomPopUp";
import { useState } from "react";

const OperacionesFraccionesPage: React.FC = () => {
  const pathname = usePathname();

  const { topic, exampleQuestion, exampleOptions, answer } =
    operacionesFracciones;

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
        Una de las partes más complejas de las matemáticas, para la mayoría de
        los estudiantes, es la relacionada con las operaciones de fracciones.
      </p>
      <p className="mt-4">
        Para el desarrollo de las cuatro operaciones fundamentales que
        involucran fracciones se requiere del uso de algoritmos que con
        frecuencia son, aparte de largos y tediosos, complicados.
      </p>
      <p className="mt-4">
        A continuación se presentan conceptos y ejemplos que pueden ayudar a
        mecanizar algunos procedimientos para el desarrollo de las operaciones
        con fracciones.
      </p>
      <div className="grid grid-cols-2 gap-4 p-4 bg-gray-100 mt-4">
        {/* Row 1: Headers */}
        <div className="bg-green-700 text-white font-bold p-2 text-center">
          Conceptos
        </div>
        <div className="bg-green-700 text-white font-bold p-2 text-center">
          Operaciones fundamentales
        </div>

        {/* Row 2: Concepts List */}
        <div className="border p-4 bg-green-100">
          <ul className="list-disc list-inside text-green-800">
            <li>
              <a href="#" className="text-green-800 underline">
                Algoritmo
              </a>
            </li>
            <li>
              <a href="#" className="text-green-800 underline">
                Fracción
              </a>
            </li>
            <li>
              <a href="#" className="text-green-800 underline">
                Fracción propia
              </a>
            </li>
            <li>
              <a href="#" className="text-green-800 underline">
                Fracción impropia
              </a>
            </li>
            <li>
              <a href="#" className="text-green-800 underline">
                Fracción mixta
              </a>
            </li>
            <li>
              <a href="#" className="text-green-800 underline">
                Mínimo común denominador de varios denominadores
              </a>
            </li>
          </ul>
        </div>

        {/* Row 3: Fundamental Operations List */}
        <div className="border p-4 bg-green-100">
          <ul className="list-disc list-inside text-green-800">
            <li>
              <a href="#" className="text-green-800 underline">
                Multiplicación
              </a>
            </li>
            <li>
              <a href="#" className="text-green-800 underline">
                División
              </a>
            </li>
            <li>
              <a href="#" className="text-green-800 underline">
                Suma y/o resta
              </a>
            </li>
            <li>
              <a href="#" className="text-green-800 underline">
                MCD
              </a>
            </li>
            <li>
              <a href="#" className="text-green-800 underline">
                Multiplicación y potenciación
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> encuentra el resultado
        de la operación con fracciones.
      </p>
      <p className="text-base mt-4 pl-8">{exampleQuestion}</p>
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
        <button
          className={`min-h-14 cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl
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

export default OperacionesFraccionesPage;
