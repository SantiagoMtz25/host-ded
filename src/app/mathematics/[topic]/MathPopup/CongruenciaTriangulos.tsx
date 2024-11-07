import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";

type TeoremasPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TeoremasPopup: React.FC<TeoremasPopupProps> = ({ isOpen, onClose }) => {
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
        <h2 className="mt-9 text-xl font-bold mb-4">
          Teoremas sobre Congruencia de Triángulos
        </h2>
        <p className="text-gray-600 mb-4">
          <span className="font-bold">LAL</span>. Dos triángulos son congruentes
          si tienen respectivamente{" "}
          <span className="font-bold">
            iguales dos de sus lados (L), y el ángulo (A) comprendidos entre
            ellos.
          </span>
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/angulos_1.gif"
            alt="Teoremas sobre congruencia de triángulos"
            width={300}
            height={400}
          />
        </div>
        <p className="text-gray-600 mb-4">
          <span className="font-bold">ALA</span>. Dos triángulos son congruentes
          si tienen respectivamente{" "}
          <span className="font-bold">
            iguales dos ángulos y el lado adyacente a ellos.
          </span>
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/angulos_2.gif"
            alt="Teoremas sobre congruencia de triángulos"
            width={300}
            height={400}
          />
        </div>
        <p className="text-gray-600 mb-4">
          <span className="font-bold">LLL</span>. Dos triángulos son congruentes
          si tienen respectivamente{" "}
          <span className="font-bold">iguales sus tres lados.</span>
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/angulos_3.gif"
            alt="Teoremas sobre congruencia de triángulos"
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default TeoremasPopup;
