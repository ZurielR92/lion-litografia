import Image from 'next/image'
import { FC, ReactNode } from 'react'

import styles from './ImageSection.module.css'

interface Props {
  subtitle: string
  title: string
  image: string
  altImage: string
  background?: boolean
  invert?: boolean
  children: ReactNode
}

export const ImageSection:FC<Props> = ( { 
  background,
  subtitle,
  title,
  image,
  altImage,
  invert,
  children
} ) => {
  return (
    <section className={`${styles.main} ${background?styles.background:null}`}>
        <div className={`${styles['image-container']} ${invert?styles['image-invert']:null}`}>
          <div className={styles.img}>
            <Image src={image} width={600} height={510} alt={altImage}/>
          </div>
        </div>
        <div className={`${styles['text-container']} ${invert?styles['text-invert']:null}`}>
          <span>{subtitle}</span>
          <h2>{title}</h2>
          {children}
        </div>
    </section>
  )
}