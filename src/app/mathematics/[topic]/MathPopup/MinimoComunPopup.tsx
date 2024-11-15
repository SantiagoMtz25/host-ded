import React from "react";
import Image from "next/image";
import xmark from '../../../../../public/icons/xmark.svg';
import xmarkwhite from '../../../../../public/icons/xmarkwhite.svg';

type MinimoComunDenominadorPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const MinimoComunDenominadorPopup: React.FC<
  MinimoComunDenominadorPopupProps
> = ({ isOpen, isDarkMode, onClose }) => {
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
        <h2 className="mt-9 text-xl font-bold mb-4">
          Mínimo común denominador de varios denominadores
        </h2>
        <p className="mb-4">
          Es el mínimo común múltiplo de los denominadores.
        </p>
        <p className="mb-4">
          Ejemplo: encontrar el mínimo común denominador de las siguientes
          fracciones,
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/2_3.gif" // Placeholder for the fractions example image
            alt="Ejemplo de fracciones"
            width={60}
            height={40}
          />
        </div>
        <p className="mb-4">
          <span className="font-bold">Múltiplos de 2:</span> 0, 2, 4, 6, 8, 10,{" "}
          <span className="font-bold">12</span>, 14, 16, 18, 20, 22,{" "}
          <span className="font-bold">24</span>, 26, 28, 30, ...
        </p>
        <p className="mb-4">
          <span className="font-bold">Múltiplos de 3:</span> 0, 3, 6, 9,{" "}
          <span className="font-bold">12</span>, 15, 18, 21,{" "}
          <span className="font-bold">24</span>, 27, 30, ...
        </p>
        <p className="mb-4">
          <span className="font-bold">Múltiplos de 4:</span> 0, 4, 8,{" "}
          <span className="font-bold">12</span>, 16, 20, 24, 28, ...
        </p>
        <p className="mb-4">
          Hay un número infinito de múltiplos de: 2, 3 y 4 que son comunes (es
          decir, son múltiplos de los tres números) pero el menor de ellos, es
          el <span className="font-bold">12</span>, por ello{" "}
          <span className="font-bold">
            12 es el mínimo común denominador de 2, 3 y 4
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default MinimoComunDenominadorPopup;
