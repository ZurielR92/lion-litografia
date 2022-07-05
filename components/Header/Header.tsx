import Image from 'next/image'
import Link from 'next/link'
import { FC, useRef } from 'react'

import styles from './Header.module.css'

interface Props {

}

export const Header: FC<Props> = () => {

    const titulo = useRef<HTMLDivElement>(null)
    
    const myClick = () => {
        if (titulo){
            titulo.current?.classList.toggle(`${styles.activo}`);
            console.log(titulo.current?.classList);
        }
    }

  return (

    <header className={`${styles['header-container']}`}>
        <div></div>
        <div className={styles['logo-container']}>
            <div className={styles.logo}>
                <Image 
                    src={'/img/logo-lion-litografia.png'} 
                    layout='responsive'
                    width={130} 
                    height={95}/>
            </div>
        </div>
        <div></div>
        <nav>
            <ul>
                <li className={styles['btn-servicios']}>
                    <span>SERVICIOS</span>
                </li>
                |
                <li>
                    <Link href={'/'}>
                        <a>INICIO</a>
                    </Link>
                </li>
                |
                <li>
                    <Link href={'/'}>
                        <a>CONÓCENOS</a>
                    </Link>
                </li>
                |
                <li>
                    <Link href={'/'}>
                        <a>CONTACTO</a>
                    </Link>
                </li>
                |
            </ul>
        </nav>
    </header>


  )
}
