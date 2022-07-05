import { FC, ReactNode } from 'react'
import { Header } from '../Header/Header'

interface Props {
    children: ReactNode
}

export const LayoutMain: FC<Props> = ( { children } ) => {
  return (
    <>
    <Header/>
    { children }
    <h3>Footer</h3>
    
    </>
  )
}
