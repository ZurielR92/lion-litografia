import { FC, ReactNode } from 'react'

import styles from './SimpleSection.module.css'

interface Props {
    title: string
    subtitle: string
    children: ReactNode
    background?: boolean
}

export const SimpleSection:FC<Props> = ( { 
    title, 
    subtitle, 
    children,
    background
} ) => {
  return (
    <section className={`${styles.main} ${background?styles.background:null}`}>

        <p className={styles.subtitle}>{subtitle}</p>
        <h2>{title}</h2>
        <div className={styles.content}>
            {children}
        </div>
    </section>
  )
}
