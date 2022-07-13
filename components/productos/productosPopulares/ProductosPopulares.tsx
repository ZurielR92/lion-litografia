import { FC } from 'react'
import { ProductCard } from '../productCard/ProductCard';

import styles from './ProductosPopulares.module.css'

export const ProductosPopulares:FC = () => {
  return (
    <section className={styles['seccion-productos']}>
      <h2>Algunos de nuestros productos</h2>
      <div className={styles['grid-productos']}>
        <ProductCard 
          count={10}
          basicPrice={200000}
          image={'/img/product.png'}
          title='Agendas Personalizadas' 
          url='/servicios/papeleria-comercial/agendas-personalizadas' 
          text='El mejor regalo para clientes y empleados, personalizalas con tu marca'
        />
        <ProductCard 
          count={1}
          basicPrice={150000}
          image={'/img/product.png'}
          title='Talonarios de Facturas' 
          url='/servicios/papeleria-comercial/talonarios' 
          text='Perfectos para el control de cualquier empresa dejando constancia de cada movimiento'
        />
        <ProductCard 
          count={1000}
          basicPrice={200000}
          image={'/img/product.png'}
          title='Imanes Publicitarios' 
          url='/servicios/publicidad-impresa/imanes-publicitarios' 
          text='lorsdi sfdhis  siudh s sdhsd visdfivushd viusdhfvish dckivs'
        />
        <ProductCard 
          count={1}
          basicPrice={200000}
          image={'/img/product.png'}
          title='Rompetraficos' 
          url='/servicios/publicidad-exterior/rompetraficos' 
          text='lorsdi sfdhis  siudh s sdhsd visdfivushd viusdhfvish dckivs'
        />
        <ProductCard 
          count={100}
          basicPrice={15000}
          image={'/img/product.png'}
          title='Pendones' 
          url='/servicios/papeleria-comercial/agendas-personalizadas' 
          text='lorsdi sfdhis  siudh s sdhsd visdfivushd viusdhfvish dckivs'
        />
        <ProductCard 
          count={100}
          basicPrice={15000}
          image={'/img/product.png'}
          title='Agendas Personalizadas' 
          url='/servicios/papeleria-comercial/agendas-personalizadas' 
          text='lorsdi sfdhis  siudh s sdhsd visdfivushd viusdhfvish dckivs'
        />
      </div>
    </section>
  )
}
