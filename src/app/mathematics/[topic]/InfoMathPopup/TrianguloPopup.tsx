import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";

type TrianguloAnguloPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TrianguloAnguloPopup: React.FC<TrianguloAnguloPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Cálculo del Ángulo en el Triángulo</h2>
          <p className="text-gray-600 mb-4">
            La respuesta es el <span className="font-bold">inciso c) 65°</span>.
          </p>
          <p className="text-gray-600 mb-4">
            Se calcula de la siguiente manera:
          </p>
          <p className="text-gray-600 mb-4">
            1. Considerar el teorema de que la suma de los tres ángulos de cualquier triángulo es igual a 180°.
          </p>
          <p className="text-gray-600 mb-4">
            2. Entonces:<br />
            &nbsp;&nbsp;&nbsp;x + 25° + 90° = 180°<br />
            &nbsp;&nbsp;&nbsp;x = 180° - 25° - 90°<br />
            &nbsp;&nbsp;&nbsp;x = <span className="font-bold">65°</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrianguloAnguloPopup;
