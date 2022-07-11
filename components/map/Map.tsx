import { FC } from 'react'

import styles from './Map.module.css'

export const Map: FC = () => {
  return (
    <section className={styles['mapa-responsivo']}>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.302560794053!2d-75.5700555!3d6.2537648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e1a1a3736fe79e8!2sLion%20Litografia%20Medellin!5e0!3m2!1ses!2sco!4v1657485492857!5m2!1ses!2sco" 
            style={{border:0}} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy='no-referrer-when-downgrade'
        />
    </section>
  )
}