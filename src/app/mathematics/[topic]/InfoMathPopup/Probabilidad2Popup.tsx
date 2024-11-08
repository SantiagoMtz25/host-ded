import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";

type Probabilidad2PopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Probabilidad2Popup: React.FC<Probabilidad2PopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Cálculo de Probabilidad</h2>
          <p className="text-gray-600 mb-4">
            La probabilidad de extraer una tarjeta azul se calcula como:
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/probab.gif" // Replace with the actual path where you saved the uploaded image
              alt="Cálculo de probabilidad de tarjeta azul"
              width={300}
              height={150}
            />
          </div>
          <p className="text-gray-600 mb-4">
            En este caso:
            <br />
            <span className="font-bold"> Eventos favorables</span> = estudiantes que les gusta el fútbol = F<br />
            <span className="font-bold"> Eventos posibles</span> = todos los estudiantes = T
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/p_f.gif" // Replace with the actual path where you saved the uploaded image
              alt="Cálculo de probabilidad de tarjeta azul"
              width={200}
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Probabilidad2Popup;
