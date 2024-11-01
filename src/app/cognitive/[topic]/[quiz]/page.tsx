"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { QuizComponentProps } from "../../../components/Quiz";
import QuizComponent from "../../../components/Quiz";
import QuizAnalogiaJSON from "./quizanalogia.json";


const quizesMap: { [key: string]: QuizComponentProps } = {
  quizanalogia: QuizAnalogiaJSON,
  /*   'quizdiagramas1': QuizDiagramas1JSON,
  'quizdiagramas2': QuizDiagramas2JSON,
  'quizmetaforasyanalogias': QuizMetaforasYAnalogiasJSON,
  'quizrazcondicional': QuizRazonamientoCondicionalJSON,
  'quizrazpractico': QuizRazonamientoPracticoJSON,
  'quizsecuenciasymatrices': QuizSecuenciasYMatricesJSON,
  'quizsignificadometaforas': QuizSignificadoDeMetaforasJSON,
  'quiztransformacioneslogicas': QuizTransformacionesLogicasJSON */
};

const QuizPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.substring(pathname.lastIndexOf("/") + 1);

  const jsonToPass = quizesMap[lastPath];

  const quizTitle: string = lastPath.substring(4);
  const defaultDescription: string = 'Lee y responde las preguntas del siguiente quiz.';

  if (!jsonToPass) {
    return <p>Quiz no encontrado. Puede encontrarse en desarrollo.</p>;
  } 

  return (
    <>
      <QuizComponent title={quizTitle} description={defaultDescription} questions={jsonToPass.questions} />
    </>
  );  
};

export default QuizPage;
