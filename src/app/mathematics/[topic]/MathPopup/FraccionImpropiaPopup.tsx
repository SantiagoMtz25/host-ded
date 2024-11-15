import React from "react";
import Image from "next/image";
import xmark from '../../../../../public/icons/xmark.svg';
import xmarkwhite from '../../../../../public/icons/xmarkwhite.svg';

type FraccionImpropiaPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const FraccionImpropiaPopup: React.FC<FraccionImpropiaPopupProps> = ({
  isOpen,
  isDarkMode,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-600"} p-6 rounded-2xl shadow-md max-w-md w-full mx-3`}>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 float-right"
        >
          <Image src={isDarkMode ? xmarkwhite : xmark} alt="close" width={24} height={24} />
        </button>
        <h2 className="mt-9 text-xl font-bold mb-4">Fracción Impropia</h2>
        <p className="mb-4">
          Su característica es que el numerador siempre es mayor que el
          denominador.
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/7_3.gif" 
            alt="Ejemplo de fracción impropia"
            width={80}
            height={25}
          />
        </div>
        <p className="mb-4">
          <span className="font-bold">Una fracción impropia puede convertirse en una fracción mixta,</span> mediante el algoritmo de la división. De tal forma que:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><span className="font-bold">Cociente:</span> parte entera</li>
          <li><span className="font-bold">Residuo:</span> numerador</li>
          <li><span className="font-bold">Divisor:</span> denominador</li>
        </ul>
        <p className="mb-4">
          Por ejemplo, al convertir <span className="font-bold">9/5</span>, se divide:
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/denom_fracc.gif" // Placeholder for division example image
            alt="Ejemplo de división de fracción impropia"
            width={300}
            height={40}
          />
        </div>
        <p className="">
          Entonces la fracción mixta queda: 
        </p>
        <div className="flex justify-center mt-4">
          <Image
            src="/images/1_4_5.gif" // Placeholder for mixed fraction result image
            alt="Resultado de fracción mixta"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default FraccionImpropiaPopup;
