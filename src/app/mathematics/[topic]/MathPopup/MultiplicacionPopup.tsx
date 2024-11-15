import React from "react";
import Image from "next/image";
import xmark from '../../../../../public/icons/xmark.svg';
import xmarkwhite from '../../../../../public/icons/xmarkwhite.svg';

type MultiplicacionPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const MultiplicacionPopup: React.FC<MultiplicacionPopupProps> = ({
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
        <h2 className="mt-9 text-xl font-bold mb-4">Multiplicación</h2>
        <p className="mb-4">
          El algoritmo de esta operación en fracciones, es bastante sencillo ya que únicamente consiste en multiplicar los numeradores entre sí y los denominadores entre sí y después, si es posible simplificar el resultado.
        </p>
        <p className="mb-4">Ejemplo:</p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/3_5.gif" // Placeholder for the first multiplication example image
            alt="Ejemplo de multiplicación de fracciones 1"
            width={150}
            height={60}
          />
        </div>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/2_9.gif" // Placeholder for the second multiplication example image
            alt="Ejemplo de multiplicación de fracciones 2"
            width={130}
            height={60}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiplicacionPopup;
