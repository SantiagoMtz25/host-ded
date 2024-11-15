import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";
import xmarkwhite from "../../../../../public/icons/xmarkwhite.svg";

type CoordSubPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const CoordSubPopup: React.FC<CoordSubPopupProps> = ({ isOpen, isDarkMode, onClose }) => {
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
            La respuesta es el inciso <span className="font-bold">c)</span>{" "}
            porque:
          </p>
          <p className="mb-4">
            <span className="font-bold">a{')'}</span> Sentado cómodamente, Pepe
            intenta, <span className="underline font-bold">sino</span> dormir,
            por lo menos descansar.
          </p>
          <p className="mb-4">
            Está <span className="font-bold text-green-800">mal</span> empleada
            la palabra, porque no se refiere a oposición o contrariedad,
            únicamente indica concesión mediante la conjunción{" "}
            <span className="italic">si</span>.
          </p>
          <p className="mb-4">
            <span className="font-bold">b{')'}</span> Pepe, ten cuidado de no
            golpear la tuerca, pues{" "}
            <span className="underline font-bold">sino</span> el tornillo no
            entrara.
          </p>
          <p className="mb-4">
            Está <span className="font-bold text-green-800">mal</span> empleada
            la palabra, porque no se refiere a oposición o contrariedad, indica
            concesión mediante la conjunción <span className="italic">si</span>.
          </p>
          <p className="mb-4">
            <span className="font-bold">c{')'}</span> Pepe no está estudiando,{" "}
            <span className="underline font-bold">sino</span> viendo la
            televisión.
          </p>
          <p className="mb-4">
            Está <span className="font-bold text-green-800">bien</span> empleada
            la palabra, porque se refiere a oposición o contrariedad.
          </p>
          <p className="mb-4">
            <span className="font-bold">d{')'}</span> Pepe no tiene otro medio de
            influir en ella <span className="underline font-bold">que</span>{" "}
            acudiendo a su madre.
          </p>
          <p className="mb-4">
            Está <span className="font-bold text-green-800">mal</span> empleada
            la palabra, porque es un galicismo el uso de{" "}
            <span className="underline font-bold">que</span> en vez de{" "}
            <span className="underline font-bold">sino</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoordSubPopup;
