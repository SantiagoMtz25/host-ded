import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";

type OperacionesFraccionesPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const OperacionesFraccionesPopup: React.FC<OperacionesFraccionesPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">
            Simplificación de Fracción
          </h2>
          <p className="text-gray-600 mb-4">
            El resultado simplificado de &nbsp;
            <Image
              src="/images/examples/7_8.gif"
              alt="7/8"
              width={60}
              height={30}
            />
          </p>
          <p className="text-gray-600 mb-4">
            1. Se eleva al cuadrado el numerador y el denominador &nbsp;
            <Image
              src="/images/examples/4_7.gif"
              alt="16/49"
              width={65}
              height={30}
            />
          </p>
          <p className="text-gray-600 mb-4">
            2. Entonces &nbsp;
            <Image
              src="/images/examples/7_8_por.gif"
              alt="7/8"
              width={55}
              height={30}
            />
          </p>
          <p className="text-gray-600 mb-4">
            3. Se saca séptima (se divide por 7)
            <Image
              src="/images/examples/7_8_eli.gif"
              alt="7/8"
              width={110}
              height={30}
            />
          </p>
          <p className="text-gray-600 mb-4">
            4. Se saca octava (se divide por 8)
            <Image
              src="/images/examples/1_8_eli.gif"
              alt="7/8"
              width={110}
              height={30}
            />
          </p>
          <p className="text-gray-600 mb-4">
            5. Se multiplica numerador por numerador y denominador por
            denominador. Y entonces el resultado sería igual a:
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/2_7.gif"
              alt="2/7"
              width={10}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperacionesFraccionesPopup;
