import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";

type PerimetroPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PerimetroPopup: React.FC<PerimetroPopupProps> = ({ isOpen, onClose }) => {
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
            Cálculo del Perímetro de la Figura
          </h2>
          <p className="text-gray-600 mb-4">
            La medida del perímetro de la figura es el{" "}
            <span className="font-bold">inciso b{")"} 54 cm²</span>.
          </p>
          <p className="text-gray-600 mb-4">
            Para encontrar la solución de este problema es necesario identificar
            los segmentos que delimitan la figura:
          </p>
          <p className="text-gray-600 mb-4">
            El que mide 12 cm + el que mide 15 cm + el segmento{" "}
            <span className="font-bold">ED</span> + el segmento{" "}
            <span className="font-bold">DC</span> + el segmento{" "}
            <span className="font-bold">CB</span> + el segmento{" "}
            <span className="font-bold">BA</span>.
          </p>
          <p className="text-gray-600 mb-4">
            Al analizar detalladamente, se tiene que:
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">BA</span> +{" "}
            <span className="font-bold">DC</span> = 15 cm y{" "}
            <span className="font-bold">ED</span> +{" "}
            <span className="font-bold">CB</span> = 12 cm
          </p>
          <p className="text-gray-600 mb-4">
            Por lo tanto, se llega a lo siguiente:
          </p>
          <p className="text-gray-600 font-bold">
            Perímetro = 12 cm + 15 cm + 12 cm + 15 cm = 54 cm
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerimetroPopup;
