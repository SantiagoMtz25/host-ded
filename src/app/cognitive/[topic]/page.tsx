"use client";

// Page.tsx
import React from 'react';
import { usePathname } from "next/navigation";
import AnalogiaComponent from "./analogia";
import Diagramas1Component from './diagramas1';
import Diagramas2Component from "./diagramas2";
import MetaforasYAnalogiasComponent from "./metaforasyanalogias";
import RazonamientoCondicionalComponent from "./razcondicional";
import RazonamientoPracticoComponent from "./razpractico";
import SecuenciasYMatricesComponent from "./secuenciasymatrices";
import SignificadoDeMetaforasComponent from "./significadometaforas";
import TransformacionesLogicasComponent from "./transformacioneslogicas";

const topicsMap: { [key: string]: React.FC } = {
  analogia: AnalogiaComponent,
  'diagramas-1': Diagramas1Component,
  'diagramas-2': Diagramas2Component,
  'metaforas-y-analogias': MetaforasYAnalogiasComponent,
  'razonamiento-condicional': RazonamientoCondicionalComponent,
  'razonamiento-practico': RazonamientoPracticoComponent,
  'secuencias-y-matrices': SecuenciasYMatricesComponent,
  'significado-de-metaforas': SignificadoDeMetaforasComponent,
  'transformaciones-logicas': TransformacionesLogicasComponent
};

const Page: React.FC = () => {
  const pathname = usePathname();
  const lastText = pathname.substring(pathname.lastIndexOf("/") + 1);

  const TopicComponent = topicsMap[lastText];

  if (!TopicComponent) {
    return <p>Tema no encontrado. Puede encontrarse en desarrollo</p>;
  }

  return (
    <div className="w-full h-full px-2 text-justify flex flex-col">
      <div className="w-full lg:w-[80%] justify-self-center self-center">
        <TopicComponent />
      </div>
    </div>
  );
};

export default Page;
