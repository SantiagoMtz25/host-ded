import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";
import xmarkwhite from "../../../../../public/icons/xmarkwhite.svg";

type ExrpessionAlgebraicaPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const ExrpessionAlgebraicaPopup: React.FC<ExrpessionAlgebraicaPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Respuesta del Ejemplo</h2>
          <p className="mb-4">
            La respuesta correcta es el inciso <span className="font-bold">b) A = x ( 3x )</span>, porque:
          </p>
          <p className="mb-4">
            El dato proporcionado como referencia es la medida de la base:
          </p>
          <p className="mb-4">
            <span className="font-bold">Donde:</span><br />
            Medida de la base = x<br />
            Medida de la altura = 3x
          </p>
          <p className="mb-4">
            <span className="font-bold">Fórmula:</span><br />
            Área del rectángulo = (base) (altura)
          </p>
          <p className="mb-4">
            <span className="font-bold">Entonces:</span><br />
            Área = ( x ) ( 3x ) = x ( 3x )
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExrpessionAlgebraicaPopup;
