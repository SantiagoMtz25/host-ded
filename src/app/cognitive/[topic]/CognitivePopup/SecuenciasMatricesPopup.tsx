import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";
import xmarkwhite from "../../../../../public/icons/xmarkwhite.svg";

type SecuenciasMatricesPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const SecuenciasMatricesPopup: React.FC<SecuenciasMatricesPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Respuesta del ejemplo</h2>
          <p className=" mb-4">
            La respuesta correcta es el inciso{" "}
            <span className="font-bold">d{")"} POH</span>; porque:
          </p>
          <p className=" mb-4">1. MEF, NIG, ..., QUJ</p>
          <h3 className="text-lg font-semibold mt-4">Características</h3>
          <p className=" mb-4">
            Cada término está formado por tres letras, las letras de los
            extremos son consonantes que guardan un orden, la letra intermedia
            es vocal que mantiene también un orden con las de los otros
            términos.
          </p>
          <p className=" mb-4">
            <strong>Orden de la 1ª Consonante:</strong> M, N, {"{}"}, Q <br />
            Consonante que continúa la secuencia: <strong>P</strong>
          </p>
          <p className=" mb-4">
            <strong>Orden de la vocal:</strong> E, I, {"{}"}, U <br />
            Vocal que continúa la secuencia: <strong>O</strong>
          </p>
          <p className=" mb-4">
            <strong>Orden de la última consonante:</strong> F, G, {"{}"}, J{" "}
            <br />
            Consonante que continúa la secuencia: <strong>H</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecuenciasMatricesPopup;
