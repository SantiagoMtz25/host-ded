import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";
import xmarkwhite from "../../../../../public/icons/xmarkwhite.svg";

type Probabilidad1PopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const Probabilidad1Popup: React.FC<Probabilidad1PopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Cálculo de Probabilidad</h2>
          <p className="mb-4">
            La probabilidad de extraer una tarjeta azul se calcula como:
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/eventos.gif" // Replace with the actual path where you saved the uploaded image
              alt="Cálculo de probabilidad de tarjeta azul"
              width={200}
              height={150}
            />
          </div>
          <p className="mb-4">
            En este caso:
            <br />
            Eventos favorables = número de tarjeta azul = 4<br />
            Eventos posibles = número de tarjetas = 3 + 5 + 4 = 12
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/pta.gif" // Replace with the actual path where you saved the uploaded image
              alt="Cálculo de probabilidad de tarjeta azul"
              width={350}
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Probabilidad1Popup;
