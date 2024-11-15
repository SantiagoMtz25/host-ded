import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";
import xmarkwhite from "../../../../../public/icons/xmarkwhite.svg";

type EcuacionesLinealesPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean; 
  onClose: () => void;
};

const EcuacionesLinealesPopup: React.FC<EcuacionesLinealesPopupProps> = ({ isOpen, isDarkMode, onClose }) => {
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
          <h2 className="mt-9 text-xl font-bold mb-4">
            Resolución de la Ecuación
          </h2>
          <p className="mb-4">
            Con el propósito de reunir todos los términos que contienen a la
            variable en un solo lado del igual, se suma el{" "}
            <span className="font-bold">inverso aditivo</span> de cada uno de
            los términos que se desean cambiar de lado. Como se quiere cambiar
            de lado los términos: <span className="font-bold">"x", "+3x"</span>,
            sumamos <span className="font-bold">"-x", "-3x"</span> a ambos
            lados.
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/ej_lineal.gif" // Replace with the actual path where you saved the uploaded image
              alt="Resolución de la Ecuación Paso a Paso"
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcuacionesLinealesPopup;
