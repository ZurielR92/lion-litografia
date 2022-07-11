import Link from 'next/link'
import { FC } from 'react'
import styles from './Footer.module.css'

export const Footer:FC = () => {
  return (
    <>
        <footer className={styles['footer-container']}>
            <div>
                <span>Sobre Lion Litografia</span>
                <p>Nuestra Litografía en la Ciudad de Medellín cuenta con el talento humano, tecnología y experiencia para afrontar los retos que propongan nuestros clientes y poder satisfacer sus necesidades en materia de artes gráficas.</p>
            </div>
            <div className={styles.explore}>
                <span>Nuestros Servicios</span>
                <ul>
                    <li>
                        <Link href={'/'}>
                            <a>Litografía</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a>Impresión Digital</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a>Impresión Gran Formato</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a>Avisos Luminosos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a>Avisos en Acrílico</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a>Avisos en Neonflex</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a>Talonarios</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a>Tarjetas de Presentación</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a>Volantes</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a>Pendones</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a>Vinilos Adhesivos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a>Microperforados</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a>Sellos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a>Agendas Personalizadas</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.contact}>
                <span>Contacto</span>
                <ul>
                    <li>
                        +57 301 749 74 31
                    </li>
                    <li>
                        lion.litografia@gmail.com
                    </li>
                    <li>
                        Cra. 54 # 53 - 42 Int 302<br/>
                        Medellin - Antioquia
                    </li>
                </ul>
            </div>
        </footer>
        <div className={styles.copyright}>
            © Copyright 2022 Creado por Lion Litografía
        </div>
    </>
  )
}