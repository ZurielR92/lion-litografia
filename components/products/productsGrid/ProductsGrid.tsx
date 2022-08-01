import { FC } from 'react'
import { ProductCard } from '../productCard/ProductCard'

import styles from './ProductsGrid.module.css'

import { productInterface } from '../../../interfaces/productsInterface';

interface Props {
  title: string
  subtitle: string
  products: productInterface[]
}

export const ProductsGrid: FC<Props> = ( { title, subtitle, products } ) => {
  return (

    <section className={styles.container}>

      <p>{subtitle}</p>
      <h2>{title}</h2>

      <div className={styles['grid-productos']}>

        {
          products.map(product => {
            return (
              <ProductCard
              key={product.title}
              img={product.img}
              altImg={product.altImg}
              title={product.title}
              shortDescription={product.shortDescription}
              priceConfig={product.priceConfig}
              />
            )
          })
        }
        
      </div>

    </section>

  )
}
