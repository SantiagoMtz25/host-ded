import React from 'react';
import Image from 'next/image';
import xmark from '../../../public/icons/xmark.svg';

type PopupProps = {
  title: string;
  answer: string;
  description?: string;
  images?: string[];
  isOpen: boolean;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ title, answer, description, images, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-md w-full mx-3">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 float-right">
          <Image src={xmark} alt="close" width={24} height={24} />
        </button>
        <h2 className="mt-9 text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{answer}</p>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {images && images.length > 0 && (
          <div className="flex gap-2 overflow-auto">
            {images.map((src, index) => (
              <Image key={index} src={src} alt={`popup-image-${index}`} width={80} height={80} className="object-cover rounded" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
