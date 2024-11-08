import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";

type PalabrasEnlazantesPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PalabrasEnlazantesPopup: React.FC<PalabrasEnlazantesPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Respuesta de Ejemplo</h2>
          <p className="text-gray-600 mb-4">
            La respuesta es el inciso <span className="font-bold">b)</span>{" "}
            porque:
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">a)</span> Estaba sentado en el puente
            debajo del <span className="font-bold underline">que</span> había un faro.
            <br />
            <span className="text-red-600 font-bold">
              Incorrectamente empleada
            </span>{" "}
            porque le precede una locución bisílaba (de el).
            <br />
            Lo correcto: "...del cual había..."
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">b)</span> Guillermo siempre te ha
            ayudado, <span className="font-bold underline">conque</span> ya es hora de que le
            correspondas.
            <br />
            <span className="text-green-600 font-bold">
              Correctamente empleada
            </span>{" "}
            porque denota consecuencia de una acción.
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">c)</span> Las flores y los árboles, la
            vegetación toda <span className="font-bold underline">parecían</span> revivir.
            <br />
            <span className="text-red-600 font-bold">
              Incorrectamente empleada
            </span>
            , se comete solecismo, ya que el sujeto: "la vegetación" es singular
            y el verbo: "parecían" está en plural.
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">d)</span> Los invitados entre los que
            estaba Luis, se <span className="font-bold underline">sentó</span> a la
            izquierda.
            <br />
            <span className="text-red-600 font-bold">
              Incorrectamente empleada
            </span>
            , se comete solecismo, entre el sujeto: "Los invitados" en plural y
            el verbo: "sentó" en singular.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PalabrasEnlazantesPopup;
