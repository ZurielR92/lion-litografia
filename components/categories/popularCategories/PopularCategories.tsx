import { FC } from 'react'

import { CategoryCard } from '../categoryCard/CategoryCard';

import { categoryInterface } from '../../../interfaces';

import styles from './popularCategories.module.css'

interface Props {
  categoryList: categoryInterface[];
}

export const PopularCategories:FC<Props> = ({categoryList}) => {
  return (
    <section className={styles['seccion-productos']}>
      <span>Somos expertos en la producción de todo tipo de publicidad</span>
      <h2>Algunos de nuestros productos</h2>
      <div className={styles['grid-productos']}>

      {
          categoryList.map(c => {
            return (
              <CategoryCard 
                key={c.code}
                altImage={c.altDisplay} 
                basicPrice={c.basicPrice}
                count={c.minQuantity}
                image={c.displayImage}
                shortDescription={c.shortDescription}
                title={c.name}
                url={c.url}
                />
            )
          })
        }
      </div>
    </section>
  )
}