import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";
import xmarkwhite from "../../../../../public/icons/xmarkwhite.svg";

type AreasPlanasPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const AreasPlanasPopup: React.FC<AreasPlanasPopupProps> = ({
  isOpen,
  isDarkMode,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-600"} p-6 rounded-2xl shadow-md max-w-md w-full mx-3`}>
        <div className="max-h-[500px] overflow-y-auto pr-2">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 float-right"
          >
            <Image src={isDarkMode ? xmarkwhite : xmark} alt="close" width={24} height={24} />
          </button>
          <h2 className="mt-9 text-xl font-bold mb-4">Cálculo del Área del Rectángulo</h2>
          <p className="mb-4">
            La respuesta que tiene el área del rectángulo de base igual a 13 cm y perímetro igual a 42 cm es el <span className="font-bold">inciso b) 104 cm²</span>.
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/rectang_ej.gif" // Replace with the actual path where you saved the uploaded image
              alt="Diagrama del Rectángulo"
              width={200}
              height={150}
            />
          </div>
          <p className="mb-4">
            Perímetro = 2b + 2a = 42 cm
          </p>
          <p className="mb-4">
            Se sustituyen los valores de la base y perímetro que se tiene:
          </p>
          <p className="mb-4">
            2 (13) + 2a = 42<br />
            26 + 2a = 42<br />
            2a = 42 - 26<br />
            2a = 16<br />
            a = 16 / 2<br />
            <span className="font-bold">a = 8 cm</span>
          </p>
          <p className="mb-4">
            Dado que el área = (b)(a), se sustituye los valores de la base y la altura en la fórmula:
          </p>
          <p className="font-bold">
            A = (13)(8) = 104 cm²
          </p>
        </div>
      </div>
    </div>
  );
};

export default AreasPlanasPopup;
