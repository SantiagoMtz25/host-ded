"use client";

// Page.tsx
import React from 'react';
import { usePathname } from "next/navigation";
import ClasesDeOracionComponent from "./clasesoracion";
import CoordinantesOSubordinantesComponent from "./coordysub";
import ElUsoDelGerundioComponent from "./gerundio";
import LecturasComponent from "./lecturas";
import LosElementosComunesDeLaOracionComponent from "./elecomunesoracion";
import OrtografiaComponent from "./ortografia";
import SignificadoDeUnaOracionComponent from "./significadooracion";
import UsoDeLasPalabrasEnlazantesComponent from "./palabrasenlazantes";
import UsoDeLasPreposicionesComponent from "./usopreposiciones";

const topicsMap: { [key: string]: React.FC } = {
  'clases-de-oracion': ClasesDeOracionComponent,
  'coordinantes-o-subordinantes': CoordinantesOSubordinantesComponent,
  'el-uso-del-gerundio': ElUsoDelGerundioComponent,
  lecturas: LecturasComponent,
  'los-elementos-comunes-de-la-oracion': LosElementosComunesDeLaOracionComponent,
  ortografia: OrtografiaComponent,
  'significado-de-una-oracion': SignificadoDeUnaOracionComponent,
  'uso-de-las-palabras-enlazantes': UsoDeLasPalabrasEnlazantesComponent,
  'uso-de-las-preposiciones': UsoDeLasPreposicionesComponent
};

const Page: React.FC = () => {
  const pathname = usePathname();
  const lastText = pathname.substring(pathname.lastIndexOf("/") + 1);

  const TopicComponent = topicsMap[lastText];

  if (!TopicComponent) {
    return <p>Tema no encontrado. Puede encontrarse en desarrollo.</p>;
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
