import Image from 'next/image'
import { FC } from 'react'

import styles from './Welcome.module.css'

export const Welcome:FC = () => {
  return (
    <section className={`${styles['contenedor-bienvenida']}`}>
        <div className={`${styles['contenedor-titulo']}`}>
            <span>Creemos en el poder de buen diseño</span>
            <h1>Servicio de impresión de calidad</h1>
            <button>¡Quiero una cotización!</button>
        </div>
        <div className={`${styles['contenedor-imagen']}`}>
            <div className={styles.cont1}></div>
            <div className={styles.cont2}></div>
            <div className={styles.img}>
                <Image 
                    width={1200} 
                    height={800}
                    layout='intrinsic'
                    src={'/img/servicio-impresion-medellin.png'} 
                />
            </div>
        </div>
    </section>
  )
}
