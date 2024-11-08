import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";

type FraccionPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FraccionPopup: React.FC<FraccionPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Procedimiento de División de Fracciones</h2>
          <p className="text-gray-600 mb-4">
            La respuesta al ejemplo se determina con el siguiente procedimiento:
          </p>
          <p className="text-gray-600 mb-4">
            1. Se convierte la división en multiplicación invirtiendo el divisor (recíproco del divisor).
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/5_6_por.gif" // Replace with the actual path of the fraction image
              alt="5/6"
              width={100}
              height={30}
            /> 
          </div>
          <p className="text-gray-600 mb-4">
            2. Dividir por 2 el numerador y el denominador.
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/5_6_por_eli.gif" // Replace with the actual path of the fraction image
              alt="5/6"
              width={100}
              height={30}
            />
          </div>
          <p className="text-gray-600 mb-4">
            3. Multiplicando numerador por numerador y denominador por denominador.
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/5_3.gif" // Replace with the actual path of the fraction image
              alt="20/9"
              width={150}
              height={30}
            />
          </div>
          <p className="text-gray-600 mb-4">
            Se deja el resultado como fracción impropia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FraccionPopup;
