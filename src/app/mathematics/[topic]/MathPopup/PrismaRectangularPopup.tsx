import React from "react";
import Image from "next/image";
import xmark from '../../../../../public/icons/xmark.svg';

type PrismaPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PrismaPopup: React.FC<PrismaPopupProps> = ({
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
        <h2 className="mt-9 text-xl font-bold mb-4">Prisma Rectangular</h2>
        <p className="text-gray-600 mb-4">
          La fórmula para calcular el volumen de un prisma rectangular es:
        </p>
        <p className="text-gray-600 mb-4">
          <strong>V = ( largo ) ( ancho ) ( alto ) = ( Área de la base ) ( altura )</strong>
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/vol_1.gif"
            alt="Prisma Rectangular"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default PrismaPopup;
