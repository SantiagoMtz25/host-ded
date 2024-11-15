"use client";

import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import GoBackBtn from "../components/GoBackBtn";
import Image from "next/image";
import { useDarkMode } from "../hooks/useDarkMode";

const Page = () => {
  const [isDarkMode] = useDarkMode();

  return (
    <div className={`flex flex-col justify-center ${isDarkMode ? 'dark' : ''}`}>
      <div className="w-full lg:max-w-[1120px] self-center">
        <NavBar />
      </div>

      <div className="lg:px-3 flex flex-1 justify-center mb-6">
        <div className="layout-content-container lg:w-[90%] max-w-[1120px] flex flex-row flex-1">
          <div className="w-1/2 h-full hidden md:block">
            <Image
              src="/images/shutterstock_1520767361.jpg"
              alt="credits-banner"
              width={1120}
              height={2000}
              className="w-full h-full object-cover rounded-r-2xl lg:rounded-2xl"
            />
          </div>

          <div className="flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col flex-1">
              <div className="w-60 shadow-xl rounded-2xl mx-4">
                <GoBackBtn isDarkMode={isDarkMode} />
              </div>
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#111418] dark:text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                  Créditos
                </p>
              </div>

              <h3 className="text-[#111418] dark:text-gray-200 text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Equipo de diseño y producción
              </h3>
              <div className="flex items-center gap-4 px-4 min-h-14">
                <p className="text-[#111418] dark:text-gray-300 text-base font-normal leading-normal flex-1">
                  Producción del Instituto Tecnológico y de Estudios Superiores de Monterrey
                </p>
                <Image src="/images/Tec.png" alt="tec-logo" width={150} height={80} />
              </div>

              <h3 className="text-[#111418] dark:text-gray-200 text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Decana Asociada de Educación Continua e Internacionalización
                Escuela de Humanidades y Educación Tecnológico de Monterrey
              </h3>
              <div className="flex items-center gap-4 px-4 min-h-14">
                <p className="text-[#111418] dark:text-gray-300 text-base font-normal leading-normal flex-1">
                  Ana Cecilia Torres González
                </p>
              </div>

              <h3 className="text-[#111418] dark:text-gray-200 text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Coordinadora del Centro Virtual de Aprendizaje y Proceso de
                Enseñanza
              </h3>
              <div className="flex items-center gap-4 px-4 min-h-14">
                <p className="text-[#111418] dark:text-gray-300 text-base font-normal leading-normal flex-1">
                  Dora Elizabeth García Olivier
                </p>
              </div>

              <h3 className="text-[#111418] dark:text-gray-200 text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Transferencia y actualización digital
              </h3>
              <div className="flex items-center gap-4 px-4 min-h-14">
                <p className="text-[#111418] dark:text-gray-300 text-base font-normal leading-normal flex-1">
                  Santiago Martínez Vallejo{" "}
                  <a
                    href="https://www.linkedin.com/in/santiago-martinez-vallejo/"
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    (santimtzv01@gmail.com)
                  </a>
                </p>
              </div>

              <h3 className="text-[#111418] dark:text-gray-200 text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Banco de imágenes y recursos
              </h3>
              <div className="flex items-center gap-4 px-4 min-h-14">
                <p className="text-[#111418] dark:text-gray-300 text-base font-normal leading-normal flex-1">
                  <a
                    target="_blank"
                    href="https://www.shutterstock.com/es/"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    Shutterstock: https://www.shutterstock.com/es/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default Page;
