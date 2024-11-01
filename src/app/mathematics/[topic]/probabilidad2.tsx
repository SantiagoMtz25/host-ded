"use client";

import { usePathname } from "next/navigation";
import probabilidad2 from "./probabilidad2.json";
import CustomPopUp from "../../components/CustomPopUp";
import { useState } from "react";

const Probabilidad1Page: React.FC = () => {
  const pathname = usePathname();

  const { topic, exampleQuestion, exampleOptions, answer, imageURL } =
    probabilidad2;

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
        className="w-96 h-full object-cover mt-4 rounded-2xl justify-self-center"
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
        La <span className="font-bold">probabilidad</span> es un número que
        indica la posibilidad de que ocurra un suceso o evento.
      </p>
      <p className="mt-4">
        Un <span className="font-bold">evento</span> es un resultado específico
        de un experimento dado.
      </p>
      <p className="mt-4">
        La probabilidad se expresa como la razón del número de resultados
        favorables, al número total de resultados posibles.
      </p>
      {renderImage(imageURL[0])}
      <p className="mt-4">
        Para revisar los conceptos, analice el siguiente ejemplo. Se tiene una
        urna que contiene 4 tarjetas rojas (R) y 5 tarjetas azules (A). Si con
        los ojos vendados se saca 1 tarjeta, el espacio de eventos posibles es:
      </p>
      {renderImage(imageURL[1])}
      <p className="mt-4">
        S = {"{"}R, R, R, R, A, A, A, A, A{"}"}
      </p>
      <p className="mt-4">n = número de eventos en el espacio muestra = 9</p>
      <p className="mt-4">Para el evento: &quot;Sacar una tarjeta roja&quot;.</p>
      <p className="mt-4">
        E = {"{"} R, R, R, R {"}"} &nbsp; → &nbsp; r = 4
      </p>
      <p className="mt-4">
        Si el evento es: &quot;No sacar una tarjeta roja&quot;. Esto significa que se
        busca el complemento (E&apos;) del evento E, que consiste en:
      </p>
      <p className="mt-4">
        E &apos; = {"{"} A, A, A, A, A {"}"} &nbsp; → &nbsp; t = 5, que puede
        expresarse diciendo:
      </p>
      <p className="mt-4 justify-self-center">&quot;x no es una tarjeta roja&quot;</p>
      {renderImage(imageURL[2])}

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> considerar en el
        cálculo de la probabilidad la siguiente información:
      </p>
      <p className="text-base mt-4 pl-8">
        De cuarenta estudiantes a 30 les gusta el fútbol en el curso de
        matemáticas hay 80 alumnos.
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

export default Probabilidad1Page;
