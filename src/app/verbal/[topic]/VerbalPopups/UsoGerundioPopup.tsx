import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";
import xmarkwhite from "../../../../../public/icons/xmarkwhite.svg";

type GerundioPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const GerundioPopup: React.FC<GerundioPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Respuesta de Ejemplo</h2>
          <p className="mb-4">
            La respuesta es el inciso <span className="font-bold">c)</span> porque:
          </p>
          <p className="mb-4">
            <span className="font-bold">a)</span> <span className="font-bold underline">Andando</span> por las oscuras calles, el peligro lo acechaba en cada esquina.
            <br />
            <span className="text-green-600 font-bold">Correctamente utilizado el gerundio</span> porque expresa coexistencia del andar y del acecho.
          </p>
          <p className="mb-4">
            <span className="font-bold">b)</span> En <span className="font-bold underline">llegando</span> tú, me iré yo.
            <br />
            <span className="text-green-600 font-bold">Correctamente utilizado el gerundio</span> porque expresa anterioridad inmediata.
          </p>
          <p className="mb-4">
            <span className="font-bold">c)</span> Llegaron a su casa, <span className="font-bold underline">teniendo</span> que regresarse porque estaba cerrada.
            <br />
            <span className="text-red-600 font-bold">Incorrectamente utilizado el gerundio</span> porque el tener que regresarse es posterior a llegar.
          </p>
          <p className="mb-4">
            <span className="font-bold">d)</span> Las damas, <span className="font-bold underline">cubriendo</span> sus cabellos con un tenue velo, entraron rápidamente a la iglesia.
            <br />
            <span className="text-green-600 font-bold">Correctamente utilizado el gerundio</span> porque expresa anterioridad inmediata.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GerundioPopup;
