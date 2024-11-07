import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";

type MultiplicacionPotenciacionPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MultiplicacionPotenciacionPopup: React.FC<
  MultiplicacionPotenciacionPopupProps
> = ({ isOpen, onClose }) => {
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
        <h2 className="mt-9 text-xl font-bold mb-4 ">
          Multiplicación y potenciación
        </h2>
        <p className="text-gray-600 mb-4">
          La jerarquía u orden de las operaciones indica que la potenciación
          tiene <span className="font-bold">prioridad</span> sobre la
          multiplicación y división.
        </p>
        <p className="text-gray-600 mb-4">
          Un ejemplo de esta jerarquía sería el siguiente:
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/2_3_3_5.gif" // Placeholder for the first example image
            alt="Ejemplo de potenciación y multiplicación 1"
            width={80}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiplicacionPotenciacionPopup;
