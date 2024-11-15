import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";
import xmarkwhite from "../../../../../public/icons/xmarkwhite.svg";

type ClasesOracionPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const ClasesOracionPopup: React.FC<ClasesOracionPopupProps> = ({
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
            La respuesta es el inciso <span className="font-bold">d)</span> porque:
          </p>
          <p className="mb-4">
            <span className="font-bold">a) Incorrecta.</span> Es una oración <span className="italic">interrogativa</span> porque pide una respuesta a algo que se ignora.
          </p>
          <p className="mb-4">
            <span className="font-bold">b) Incorrecta.</span> Es <span className="italic">exclamativa</span> porque expresa sorpresa.
          </p>
          <p className="mb-4">
            <span className="font-bold">c) Incorrecta.</span> Es <span className="italic">imperativa</span> porque exige el cumplimiento de una acción por parte de otras personas.
          </p>
          <p className="mb-4">
            <span className="font-bold">d) Correcta.</span> Es <span className="italic">declarativa</span> ya que únicamente enuncia el hecho que está ocurriendo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClasesOracionPopup;
