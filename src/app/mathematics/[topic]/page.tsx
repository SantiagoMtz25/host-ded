"use client";

// Page.tsx
import React from 'react';
import { usePathname } from "next/navigation";
import ExpresionesAlgebraicasComponent from "./expresionesalgebraicas";
import EcuacionesLinealesComponent from "./ecuacioneslineales";
import EvaluacionFuncionesComponent from "./evaluacionfunciones";
import FuncDosVariablesComponent from "./funcdosvariables";
import ExpresionAlgebraicaComponent from "./expresionalgebraica";
import SistemasEcuacionesComponent from "./sistemasecuaciones";
import CuadradoFraccionComponent from "./cuadradofraccion";
import FraccionesComponent from "./fracciones";
import MaximoComunDivisorComponent from "./maximocomundivisor";
import OperacionesFraccionesComponent from "./operacionesfracciones";
import AnguloPerigonalPerigonoComponent from "./perigonalperigono";
import DatosGraficadosComponent from "./datosgraficados";
import Probabilidad1Component from "./probabilidad1";
import Probabilidad2Component from "./probabilidad2";
import AngulosComplementariosSuplementariosComponent from "./suplementarioscomplementarios";
import AreasFigurasPlanasComponent from "./areasplanas";
import DistanciaDosPuntosComponent from "./dospuntos";
import AreasYComparacionesComponent from "./areasycomparaciones";
import PerimetroComponent from "./perimetro";
import PerimetroAreaAnguloComponent from "./paa";
import PlanoCartesianoPage from "./planocartesiano";
import SemejanzaCongruenciaComponent from "./semejanzacongruencia";
import TriangulosPage from "./triangulos";
import VolumenesPage from "./volumenes";

const topicsMap: { [key: string]: React.FC } = {
  'construccion-de-expresiones-algebraicas': ExpresionesAlgebraicasComponent,
  'ecuaciones-lineales': EcuacionesLinealesComponent,
  'evaluacion-de-funciones': EvaluacionFuncionesComponent,
  'evaluar-una-ecuacion-con-2-variables': FuncDosVariablesComponent,
  'evaluar-una-expresion-algebraica': ExpresionAlgebraicaComponent,
  'sistemas-de-ecuaciones': SistemasEcuacionesComponent,
  'cuadrado-de-una-fraccion': CuadradoFraccionComponent,
  'fracciones': FraccionesComponent,
  'maximo-comun-divisor': MaximoComunDivisorComponent,
  'operaciones-con-fracciones': OperacionesFraccionesComponent,

  'angulo-perigonal-o-perigono': AnguloPerigonalPerigonoComponent,
  'angulos-complementarios-y-suplementarios': AngulosComplementariosSuplementariosComponent,
  'areas-de-figuras-planas': AreasFigurasPlanasComponent,
  'distancia-entre-dos-puntos': DistanciaDosPuntosComponent,
  'ejercicios-de-areas-y-comparaciones': AreasYComparacionesComponent,
  'perimetro': PerimetroComponent,
  'perimetros-areas-y-angulos': PerimetroAreaAnguloComponent,
  'plano-cartesiano': PlanoCartesianoPage,
  'semejanza-y-congruencia': SemejanzaCongruenciaComponent,
  'triangulos': TriangulosPage,
  'volumenes': VolumenesPage,

  'datos-graficados': DatosGraficadosComponent,
  'probabilidad-1': Probabilidad1Component,
  'probabilidad-2': Probabilidad2Component,
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
