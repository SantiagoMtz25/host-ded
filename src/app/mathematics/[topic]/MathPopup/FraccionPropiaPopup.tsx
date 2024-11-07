import React from "react";
import Image from "next/image";
import xmark from '../../../../../public/icons/xmark.svg';

type FraccionPropiaPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FraccionPropiaPopup: React.FC<FraccionPropiaPopupProps> = ({
  isOpen,
  onClose,
}) => {
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
        <h2 className="mt-9 text-xl font-bold mb-4">Fracción Propia</h2>
        <p className="text-gray-600 mb-4">
          Es aquella que no contiene enteros. Su característica es que el
          <span className="font-bold"> numerador siempre es menor que el denominador.</span> Si una fracción propia
          es positiva, representa a un número que está entre el cero y el uno.
        </p>
        <p className="text-gray-600 mb-4 font-bold">
          Ejemplo: 
        </p>
        <Image
          src="/images/3_7.gif"
          alt="fraccion propia"
          width={100}
          height={25}
          className="justify-self-center"
        />
      </div>
    </div>
  );
};

export default FraccionPropiaPopup;
