import { FC, ReactNode } from 'react'
import { Footer } from '../footer/Footer'
import { Header } from '../Header/Header'

interface Props {
    children: ReactNode
}

export const LayoutMain: FC<Props> = ( { children } ) => {
  return (
    <>
    <Header/>
    { children }
    <Footer/>
    </>
  )
}
