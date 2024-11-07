import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";

type SemejanzaTriangulosProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SemejanzaTriangulos: React.FC<SemejanzaTriangulosProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">
            Teoremas sobre semejanza de triángulos
          </h2>
          <p className="text-gray-600 mb-4">
            Dos triángulos son semejantes si tienen respectivamente{" "}
            <span className="font-bold">iguales sus tres ángulos.</span>
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/angulos_4.gif"
              alt="Teoremas sobre congruencia de triángulos"
              width={300}
              height={400}
            />
          </div>
          <p className="text-gray-600 mb-4">
            Dos triángulos son semejantes si tienen respectivamente{" "}
            <span className="font-bold">iguales, un ángulo agudo.</span>
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/angulos_5.gif"
              alt="Teoremas sobre congruencia de triángulos"
              width={300}
              height={400}
            />
          </div>
          <p className="text-gray-600 mb-4">
            Dos triángulos son semejantes si sus{" "}
            <span className="font-bold">lados son proporcionales.</span>
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/angulos_6.gif"
              alt="Teoremas sobre congruencia de triángulos"
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemejanzaTriangulos;
