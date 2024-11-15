import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";
import xmarkwhite from "../../../../../public/icons/xmarkwhite.svg";

type AreasComparacionesPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const AreasComparacionesPopup: React.FC<AreasComparacionesPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Cálculo del Área del Triángulo</h2>
          <p className="mb-4">
            La respuesta al problema es <span className="font-bold">inciso c) 75 cm²</span>.
          </p>
          <p className="mb-4">
            El área del triángulo CBE se determina de la siguiente manera:
          </p>
          <p className="mb-4 flex flex-row">
            Área de un triángulo = 
            <Image
              src="/images/examples/ba_2.gif"
              alt="base por altura entre dos"
              width={120}
              height={50}
            />
          </p>
          <p className="mb-4 flex flex-row">
            Área = 
            <Image
              src="/images/examples/ba_2_cn.gif"
              alt="base por altura entre dos"
              width={160}
              height={50}
            />
            = 75 cm²
          </p>
        </div>
      </div>
    </div>
  );
};

export default AreasComparacionesPopup;
