import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { categoryCardPropsInterface as Props } from '../../../interfaces'

import { formatPeso } from '../../../utils/formatPeso';

import styles from './CategoryCard.module.css'


export const CategoryCard:FC<Props> = ( { 
    count, 
    title, 
    basicPrice, 
    image, 
    url, 
    shortDescription, 
    altImage 
} ) => {

  return (
    <div className={styles.card}>
      <div className={styles['img-box']}>
        <Image src={image} width={370} height={270} alt={altImage}/>
      </div>
      <div className={styles['text-box']}>
        <Link href={url}>
          <a>
            <h3>{title}</h3>
          </a>
        </Link>
        <div className={styles['meta-info']}>
          <p>
            {count <= 1 ? 'Desde ' : `${count} unidades desde `}<span>{formatPeso(basicPrice)}</span>
          </p>
        </div>
        <p>{shortDescription}</p>
        <Link href={url}>
          <a className={`${styles['read-more']}`}>...</a>
        </Link>
      </div>
    </div>
  )
}
