import React from "react";
import Image from "next/image";
import xmark from '../../../../../public/icons/xmark.svg';
import xmarkwhite from '../../../../../public/icons/xmarkwhite.svg';

type EsferaPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const EsferaPopup: React.FC<EsferaPopupProps> = ({
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
        <h2 className="mt-9 text-xl font-bold mb-4">Esfera</h2>
        <p className="mb-4">
          La fórmula para calcular el volumen de una esfera es:
        </p>
        <p className="mb-4">
          <strong>V = (4/3)πr³</strong>
        </p>
        <p className="mb-4">
          Donde: <br />
          Radio = r
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/vol_5.gif" 
            alt="Esfera"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default EsferaPopup;
