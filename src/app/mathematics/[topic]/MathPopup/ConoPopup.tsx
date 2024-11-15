import React from "react";
import Image from "next/image";
import xmark from '../../../../../public/icons/xmark.svg';
import xmarkwhite from '../../../../../public/icons/xmarkwhite.svg';

type ConoPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const ConoPopup: React.FC<ConoPopupProps> = ({
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
        <h2 className="mt-9 text-xl font-bold mb-4">Cono</h2>
        <p className="mb-4">
          La fórmula para calcular el volumen de un cono es:
        </p>
        <p className="mb-4">
          <strong>V = (1/3)πr²h</strong>
        </p>
        <p className="mb-4">
          Donde: <br />
          Área de la base = πr² <br />
          Altura = h
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/vol_4.gif" // Replace with the actual path where you saved the uploaded image
            alt="Cono"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default ConoPopup;
