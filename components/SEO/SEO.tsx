import Head from 'next/head'
import React, { FC } from 'react'

interface Props {
    title?: string
    description?: string

}

export const SEO:FC<Props> = ( {

    title = 'Lion Litografia Medellin - Imprenta en Medellin',
    description = 'Imprenta de la Ciudad de Medellín'

} ) => {
  return (
    <Head>
        <meta charSet='utf-8'/>
        <meta name='viewport' content="width=device-width, initial-scale=1"/>
        <title>{`${title} | Lion Litografia Medellín | Imprenta en Medellín`}</title>
        <meta name='description' content={description}/>


    </Head>
  )
}
