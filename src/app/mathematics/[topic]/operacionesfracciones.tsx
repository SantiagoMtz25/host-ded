"use client";

import { usePathname } from "next/navigation";
import operacionesFracciones from "./operacionesfracciones.json";
import InfoPopupOperacionesFracciones from './InfoMathPopup/OperacionesFraccionesPopup';
import InfoPopupAlgoritmo from "./MathPopup/Algoritmo"; 
import InfoPopupFraccion from "./MathPopup/FraccionPopup";
import InfoPopupFraccionPropia from "./MathPopup/FraccionPropiaPopup";
import InfoPopupFraccionImpropia from "./MathPopup/FraccionImpropiaPopup";
import InfoPopupFraccionMixta from "./MathPopup/FraccionMixtaPopup";
import InfoPopupMinimoComunDenominador from "./MathPopup/MinimoComunPopup";
import InfoPopupMultiplicacion from "./MathPopup/MultiplicacionPopup";
import InfoPopupDivision from "./MathPopup/DivisionPopup";
import InfoPopupSumaResta from "./MathPopup/SumaRestaPopup";
import InfoPopupMCD from "./MathPopup/MCDPopup";
import InfoPotenciacion from "./MathPopup/PotenciacionPopup";
import { useState } from "react";

const OperacionesFraccionesPage: React.FC = () => {
  const pathname = usePathname();

  const { topic, exampleQuestion, exampleOptions } =
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

  // States for each popup visibility
  const [isPopupAlgoritmoOpen, setPopupAlgoritmoOpen] = useState(false);
  const [isPopupFraccionOpen, setPopupFraccionOpen] = useState(false);
  const [isPopupFraccionPropiaOpen, setPopupFraccionPropiaOpen] = useState(false);
  const [isPopupFraccionImpropiaOpen, setPopupFraccionImpropiaOpen] = useState(false);
  const [isPopupFraccionMixtaOpen, setPopupFraccionMixtaOpen] = useState(false);
  const [isPopupMinimoComunDenominadorOpen, setPopupMinimoComunDenominadorOpen] = useState(false);
  const [isPopupMultiplicacionOpen, setPopupMultiplicacionOpen] = useState(false);
  const [isPopupDivisionOpen, setPopupDivisionOpen] = useState(false);
  const [isPopupSumaRestaOpen, setPopupSumaRestaOpen] = useState(false);
  const [isPopupMCDOpen, setPopupMCDOpen] = useState(false);
  const [isPopupPotenciacionOpen, setPopupPotenciacionOpen] = useState(false);

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
        <div className="bg-[#afdceb] font-bold p-2 text-center">
          Conceptos
        </div>
        <div className="bg-[#afdceb] font-bold p-2 text-center">
          Operaciones fundamentales
        </div>

        {/* Concepts List as Buttons */}
        <div className="p-4 flex flex-col items-start">
          <button className="underline mb-2" onClick={() => setPopupAlgoritmoOpen(true)}>
            Algoritmo
          </button>
          <button className="underline mb-2" onClick={() => setPopupFraccionOpen(true)}>
            Fracción
          </button>
          <button className="underline mb-2" onClick={() => setPopupFraccionPropiaOpen(true)}>
            Fracción propia
          </button>
          <button className="underline mb-2" onClick={() => setPopupFraccionImpropiaOpen(true)}>
            Fracción impropia
          </button>
          <button className="underline mb-2" onClick={() => setPopupFraccionMixtaOpen(true)}>
            Fracción mixta
          </button>
          <button className="underline mb-2" onClick={() => setPopupMinimoComunDenominadorOpen(true)}>
            Mínimo común denominador de varios denominadores
          </button>
        </div>

        {/* Fundamental Operations List */}
        <div className="p-4 flex flex-col items-start">
          <button className="underline mb-2" onClick={() => setPopupMultiplicacionOpen(true)}>
            Multiplicación
          </button>
          <button className="underline mb-2" onClick={() => setPopupDivisionOpen(true)}>
            División
          </button>
          <button className="underline mb-2" onClick={() => setPopupSumaRestaOpen(true)}>
            Suma y/o resta
          </button>
          <button className="underline mb-2" onClick={() => setPopupMCDOpen(true)}>
            MCD
          </button>
          <button className="underline mb-2" onClick={() => setPopupPotenciacionOpen(true)}>
            Multiplicación y potenciación
          </button>
        </div>
      </div>

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> encuentra el resultado
        de la operación con fracciones.
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
      {/* <CustomPopUp
        title={exampleQuestion}
        answer={`La respuesta correcta es: ${exampleOptions[answer]}`}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      /> */}
      <InfoPopupOperacionesFracciones isOpen={isPopupOpen} onClose={handleClosePopup} />

      {/* Info Popup */}
      <InfoPopupAlgoritmo isOpen={isPopupAlgoritmoOpen} onClose={() => setPopupAlgoritmoOpen(false)} />
      <InfoPopupFraccion isOpen={isPopupFraccionOpen} onClose={() => setPopupFraccionOpen(false)} />
      <InfoPopupFraccionPropia isOpen={isPopupFraccionPropiaOpen} onClose={() => setPopupFraccionPropiaOpen(false)} />
      <InfoPopupFraccionImpropia isOpen={isPopupFraccionImpropiaOpen} onClose={() => setPopupFraccionImpropiaOpen(false)} />
      <InfoPopupFraccionMixta isOpen={isPopupFraccionMixtaOpen} onClose={() => setPopupFraccionMixtaOpen(false)} />
      <InfoPopupMinimoComunDenominador isOpen={isPopupMinimoComunDenominadorOpen} onClose={() => setPopupMinimoComunDenominadorOpen(false)} />
      <InfoPopupMultiplicacion isOpen={isPopupMultiplicacionOpen} onClose={() => setPopupMultiplicacionOpen(false)} />
      <InfoPopupDivision isOpen={isPopupDivisionOpen} onClose={() => setPopupDivisionOpen(false)} />
      <InfoPopupSumaResta isOpen={isPopupSumaRestaOpen} onClose={() => setPopupSumaRestaOpen(false)} />
      <InfoPopupMCD isOpen={isPopupMCDOpen} onClose={() => setPopupMCDOpen(false)} />
      <InfoPotenciacion isOpen={isPopupPotenciacionOpen} onClose={() => setPopupPotenciacionOpen(false)} />
    </>
  );
};

export default OperacionesFraccionesPage;
