import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";

type FuncDosVariablesPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FuncDosVariablesPopup: React.FC<FuncDosVariablesPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Resolución para el Valor de "y"</h2>
          <p className="text-gray-600 mb-4">
            La respuesta que contiene el valor de "y" de la ecuación <strong>2x + 3y = 12</strong>; donde, <strong>x = 3</strong> se determina de la siguiente manera:
          </p>
          <p className="text-gray-600 mb-4">
            1. Sustituye el valor de x en la ecuación<br />
            &nbsp;&nbsp;&nbsp;&nbsp;2 ( 3 ) + 3y = 12
          </p>
          <p className="text-gray-600 mb-4">
            2. Efectuar la operación matemática<br />
            &nbsp;&nbsp;&nbsp;&nbsp;6 + 3y = 12
          </p>
          <p className="text-gray-600 mb-4">
            3. Aplicar las propiedades de igualdad
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/ej_ev_ecua.gif" // Replace with the actual path where you saved the uploaded image
              alt="Resolución de la Ecuación para el Valor de Y"
              width={400}
              height={200}
            />
          </div>
          <p className="text-gray-600 mb-4">
            4. Resultado y = 2
          </p>
        </div>
      </div>
    </div>
  );
};

export default FuncDosVariablesPopup;
