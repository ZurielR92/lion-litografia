import Image from 'next/image'
import { FC } from 'react'

import styles from './Nosotros1.module.css'

export const Nosotros1: FC = () => {
  return (
    <section className={styles['nosotros-container']}>
        <div className={styles['img-container']}>
            <Image src={'/img/bienvenidos-a-lion-litografia.png'} width={600} height={510}/>
        </div>
        <div className={styles['about-container']}>
            <h2>Bienvenido a Lion Litografia Medellín</h2>
            <h3>Sueñalo, Imprimelo</h3>
            <p>Cuando decimos que no somos felices hasta que tú eres feliz, realmente lo decimos en serio. Entonces, ya sea un error tipográfico o una imagen que no se imprimió de la manera que esperaba, haremos todo lo posible para solucionarlo. Nos encanta el gran diseño y creemos que puede hacer maravillas para cada negocio. Es por eso que hacemos que sea fácil crear papelería de negocios hermosa y elaborada por expertos.</p>
        </div>
    </section>
  )
}
