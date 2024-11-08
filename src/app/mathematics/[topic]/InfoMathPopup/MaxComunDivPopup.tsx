import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";

type MCDPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MCDPopup: React.FC<MCDPopupProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-md w-full mx-3">
        <div className="max-h-[500px] overflow-y-auto pr-2">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 float-right"
          >
            <Image src={xmark} alt="close" width={24} height={24} />
          </button>
          <h2 className="mt-9 text-xl font-bold mb-4">Máximo Común Divisor (MCD)</h2>
          <p className="text-gray-600 mb-4">
            Para encontrar el máximo común divisor de: 8, 12, 16 utilizaremos el método de factores primos.
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/mcd_tabla2.gif" // Replace with the actual path where you saved the uploaded image
              alt="Factorización para encontrar el MCD"
              width={400}
              height={150}
            />
          </div>
          <p className="text-gray-600 mb-4">
            Por lo que, el <span className="font-bold">máximo común divisor</span> es igual a 2 × 2. MCD = 4.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MCDPopup;
