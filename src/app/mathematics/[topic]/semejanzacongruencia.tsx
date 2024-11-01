"use client";

import { usePathname } from "next/navigation";
import semejanzaCongruencia from "./semejanzacongruencia.json";
import CustomPopUp from "../../components/CustomPopUp";
import { useState } from "react";

const SemejanzaCongruenciaPage: React.FC = () => {
  const pathname = usePathname();

  const { topic, exampleQuestion, exampleOptions, answer, imageURL } =
    semejanzaCongruencia;

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
        className="w-72 h-full object-cover mt-4 justify-self-center"
      />
    );
  };

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
        Las <span className="font-bold">figuras congruentes</span> tienen
        exactamente <span className="font-bold">la misma forma</span> y el{" "}
        <span className="font-bold">mismo tamaño.</span>
      </p>
      <div className="flex flex-row">
        <p className="mt-4">
          El símbolo que se utiliza para indicar congruencia es:
        </p>
        <div className="w-6 h-6 ml-2">{renderImage(imageURL[1])}</div>
      </div>
      <ul className="list-disc mt-4 ml-8">
        <li className="underline">
          Teoremas sobre congruencia de dos triángulos
        </li>
      </ul>
      <p className="mt-4">
        Las <span className="font-bold">figuras semejantes</span> tienen la
        misma forma pero diferente tamaño.
      </p>
      <div className="flex flex-row">
        <p className="mt-4">
          El símbolo que se utiliza para indicar semejanza es:
        </p>
        <div className="w-12 h-8 ml-2">{renderImage(imageURL[2])}</div>
      </div>
      <ul className="list-disc mt-4 ml-8">
        <li className="underline">
          Teoremas sobre congruencia de dos triángulos
        </li>
      </ul>

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> identificar la
        relación de las figuras.
      </p>
      <p className="text-base mt-4 pl-8">{exampleQuestion}</p>
      {renderImage(imageURL[0])}
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

export default SemejanzaCongruenciaPage;
