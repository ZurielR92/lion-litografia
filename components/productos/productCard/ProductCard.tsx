import { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './ProductCard.module.css'
import Link from 'next/link'

interface Props {
  title: string
  basicPrice: number
  url: string
  image: string
  count: number
  text: string
}

export const ProductCard:FC<Props> = ( { count, title, basicPrice, image, url, text } ) => {

  const router = useRouter()

  const formatoPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })

  return (
    <div className={styles.card}>
      <div className={styles['img-box']}>
        <Image src={image} width={300} height={270}/>
      </div>
      <div className={styles['text-box']}>
        <Link href={url}>
          <a>
            <h3>{title}</h3>
          </a>
        </Link>
        <div className={styles['meta-info']}>
          <p>
            {count <= 1 ? 'Desde ' : `${count} unidades desde `}<span>{formatoPeso.format(basicPrice)}</span>
          </p>
        </div>
        <p>{text}</p>
        <Link href={url}>
          <a className={`${styles['read-more']}`}>...</a>
        </Link>
      </div>
    </div>
  )
}
