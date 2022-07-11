import { FC } from 'react'
import { ProductCard } from '../productCard/ProductCard';

import styles from './ProductosPopulares.module.css'

export const ProductosPopulares:FC = () => {
  return (
    <section className={styles['seccion-productos']}>
      <h2>Algunos de nuestros productos</h2>
      <div className={styles['grid-productos']}>
        <ProductCard/> 
        <ProductCard/> 
        <ProductCard/> 
        <ProductCard/> 
        <ProductCard/> 
        <ProductCard/> 
        <ProductCard/> 
        <ProductCard/> 
      </div>
    </section>
  )
}
