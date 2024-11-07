import React from 'react';
import Image from 'next/image';
import xmark from '../../../../../public/icons/xmark.svg';

type FraccionPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FraccionPopup: React.FC<FraccionPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-md w-full mx-3">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 float-right">
          <Image src={xmark} alt="close" width={24} height={24} />
        </button>
        <h2 className="mt-9 text-xl font-bold mb-4">Fracción</h2>
        <p className="text-gray-600 mb-4">Es una expresión matemática que consta de: numerador y denominador separados por una línea horizontal.</p>
        <Image src="/images/n_d.gif" alt="fraccion" width={100} height={30} className="justify-self-center"/>
      </div>
    </div>
  );
};

export default FraccionPopup;
