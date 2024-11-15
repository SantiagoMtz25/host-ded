import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";
import xmarkwhite from "../../../../../public/icons/xmarkwhite.svg";

type UsoPreposicionesPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const UsoPreposicionesPopup: React.FC<UsoPreposicionesPopupProps> = ({
  isOpen,
  isDarkMode,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-600"} p-6 rounded-2xl shadow-md max-w-md w-full mx-3`}>
        <div className="max-h-[500px] overflow-y-auto pr-2">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 float-right"
          >
            <Image src={isDarkMode ? xmarkwhite : xmark} alt="close" width={24} height={24} />
          </button>
          <h2 className="mt-9 text-xl font-bold mb-4">Respuesta de Ejemplo</h2>
          <p className="mb-4">
            La respuesta es el inciso <span className="font-bold">d)</span> porque:
          </p>
          <p className="mb-4">
            <span className="font-bold">a{')'}</span> La televisión absorbe a la gente.
            <br />
            <span className="text-green-600 font-bold">Correctamente empleada</span> porque "gente" es el complemento directo relativo a personas.
          </p>
          <p className="mb-4">
            <span className="font-bold">b{')'}</span> Raúl envió a Lorena un ramo de rosas.
            <br />
            <span className="text-green-600 font-bold">Correctamente empleada</span> porque Lorena es una persona.
          </p>
          <p className="mb-4">
            <span className="font-bold">c{')'}</span> Mireya se sentó a la mesa, a pesar de no tener hambre.
            <br />
            <span className="text-green-600 font-bold">Correctamente empleada</span> porque determina el lugar en donde va a sentarse.
          </p>
          <p className="mb-4">
            <span className="font-bold">d{')'}</span> El examen a presentar, es el de español.
            <br />
            <span className="text-red-600 font-bold">Incorrectamente empleada</span> porque hay solecismo en el uso de "a" para introducir una subordinada que debe introducirse con "que". Lo correcto sería: "... que se va a presentar...".
          </p>
        </div>
      </div>
    </div>
  );
};

export default UsoPreposicionesPopup;
