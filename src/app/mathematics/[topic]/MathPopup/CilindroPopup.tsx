import React from "react";
import Image from "next/image";
import xmark from '../../../../../public/icons/xmark.svg';

type CilindroPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CilindroPopup: React.FC<CilindroPopupProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-md w-full mx-3">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 float-right"
        >
          <Image src={xmark} alt="close" width={24} height={24} />
        </button>
        <h2 className="mt-9 text-xl font-bold mb-4">Cilindro</h2>
        <p className="text-gray-600 mb-4">
          La fórmula para calcular el volumen de un cilindro es:
        </p>
        <p className="text-gray-600 mb-4">
          <strong>V = πr²h</strong>
        </p>
        <p className="text-gray-600 mb-4">
          Donde: <br />
          Área de la base = πr² <br />
          Altura = h
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/vol_3.gif" // Replace with the actual path where you saved the uploaded image
            alt="Cilindro"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default CilindroPopup;
