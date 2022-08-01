import { FC } from 'react'
import { ImageSection } from '../imageSection/ImageSection'
import { Accordion } from '../ui/accordion/Accordion'

import styles from './FAQs.module.css'
import { questionInterface } from '../../interfaces/accordionPropsInterface';

interface Props {
    questions: questionInterface[]
}

export const FAQs:FC<Props> = ( { questions } ) => {


  return (
    <ImageSection
        subtitle='Preguntas y respuestas'
        title='Preguntas Frecuentes'
        image='/img/bienvenidos-a-lion-litografia.png'
        altImage='Resuelve tus dudas'
    >

    <Accordion
        questions={questions}
        noTitle
    />

    </ImageSection>
  )
}
