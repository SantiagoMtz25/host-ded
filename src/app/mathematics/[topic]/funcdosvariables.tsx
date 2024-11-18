"use client";

import { usePathname } from "next/navigation";
import funcionDosVariables from "./funcdosvariables.json";
import InfoPopup from './InfoMathPopup/FuncDosVariablesPopup';
import { useState } from "react";
import { useDarkMode } from "@/app/hooks/useDarkMode";
import Link from "next/link";

const FuncionDosVariablePage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const { topic, exampleQuestion, exampleOptions } =
    funcionDosVariables;

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
        Una ecuación es una igualdad matemática que contiene una o más
        incógnitas y el signo &quot;=&quot;, que separa los dos lados de la ecuación.
      </p>
      <p className="mt-4">
        A continuación se presentan algunas propiedades básicas de la
        <span className="font-bold">igualdad:</span>
      </p>
      <div className={`grid grid-cols-2 gap-4 p-4 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} mt-4`}>
        {/* Row 1: Headers */}
        <div className={`${isDarkMode ? "bg-gray-700" : "bg-[#afdceb]"} font-bold p-2`}>Propiedad</div>
        <div className={`${isDarkMode ? "bg-gray-700" : "bg-[#afdceb]"} font-bold p-2`}>Ejemplo</div>

        {/* Row 2: Addition/Subtraction Property */}
        <div className={`border p-4 ${isDarkMode ? "bg-gray-700" : "bg-[#cae9f5]"}`}>
          Si a ambos lados del igual se añade o se resta el mismo número, la
          ecuación no se altera.
        </div>
        <div className="border p-4">
          <p>Dada la ecuación:</p>
          <p>
            3 - 9 + 17 = 6 + 5<br />
            11 = 11
          </p>
          <ul className="list-disc pl-6">
            <li>
              Si se resta 5 a ambos lados:
              <p>
                3 - 9 + 17 - 5 = 6 + 5 - 5<br />6 = 6 Sigue siendo una igualdad
              </p>
            </li>
            <li>
              Si ahora se suma 8 en ambos lados:
              <p>
                3 - 9 + 17 - 5 + 8 = 6 + 5 - 5 + 8<br />
                14 = 14 Sigue siendo una igualdad
              </p>
            </li>
          </ul>
        </div>

        {/* Row 3: Multiplication Property */}
        <div className={`border p-4 ${isDarkMode ? "bg-gray-700" : "bg-[#cae9f5]"}`}>
          Si a ambos lados se multiplican por la misma cantidad, la ecuación no
          se altera.
        </div>
        <div className="border p-4">
          <p>Dada la ecuación:</p>
          <p>3 - 9 + 17 = 5 + 8 = 6 + 5 + 8</p>
          <ul className="list-disc pl-6">
            <li>
              Si se multiplica por 1/7 ambos lados:
              <p>
                (1/7)(3 - 9 + 17 - 5 + 8) = (1/7)(6 + 5 + 8)
                <br />2 = 2 Sigue siendo una igualdad
              </p>
            </li>
            <li>
              Si se multiplica por -5 ambos lados:
              <p>
                (-5/7)(3 - 9 + 17 - 5 + 8) = (-5/7)(6 + 5 + 8)
                <br />
                -10 = -10 Sigue siendo una igualdad
              </p>
            </li>
          </ul>
        </div>

        {/* Row 4: Commutative Property */}
        <div className={`border p-4 ${isDarkMode ? "bg-gray-700" : "bg-[#cae9f5]"}`}>
          Se puede intercambiar los lados de la igualdad, respetando los signos
          de cada término y la ecuación no se altera.
        </div>
        <div className="border p-4">
          <p>La ecuación:</p>
          <p>35 - 23 = 19 - 7</p>
          <p>Es lo mismo que:</p>
          <p>19 - 7 = -23 + 35</p>
        </div>

        {/* Row 5: Multiplication Signs */}
        <div className={`border p-4 ${isDarkMode ? "bg-gray-700" : "bg-[#cae9f5]"}`}>
          Los signos en la multiplicación.
        </div>
        <div className="border p-4">
          <p>
            (+) * (+) = +<br />
            (+) * (-) = -<br />
            (-) * (+) = -<br />
            (-) * (-) = +
          </p>
        </div>

        {/* Row 6: Division Signs */}
        <div className={`border p-4 ${isDarkMode ? "bg-gray-700" : "bg-[#cae9f5]"}`}>
          Los signos en la división.
        </div>
        <div className="border p-4">
          <p>
            (+) / (+) = +<br />
            (+) / (-) = -<br />
            (-) / (+) = -<br />
            (-) / (-) = +
          </p>
        </div>
      </div>

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> 
      </p>
      <p className="text-base mt-4 pl-8">1. Resuelve el siguiente problema considerando las propiedades de la igualdad.</p>
      <p className="text-base mt-4 pl-8">2. Sustituye el valor dado de &quot;x&quot; o de &quot;y&quot; (según sea el caso) en la expresión que se presenta.</p>
      <p className="text-base mt-4 pl-8">{exampleQuestion}</p>
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
      {/* <CustomPopUp
        title={exampleQuestion}
        answer={`La respuesta correcta es: ${exampleOptions[answer]}`}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      /> */}
      <InfoPopup isOpen={isPopupOpen} isDarkMode={isDarkMode} onClose={handleClosePopup} />
    </>
  );
};

export default FuncionDosVariablePage;
