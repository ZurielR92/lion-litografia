import { FC, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.css'
import logic from './headerLogic'

interface Props {

}

export const Header: FC<Props> = () => {

    const grid = useRef<HTMLDivElement>(null);
    const btnCerrarMenu = useRef<HTMLButtonElement>(null);
    const contenedorEnlacesNav = useRef<HTMLDivElement>(null);
    const contenedorSubCategorias = useRef<HTMLDivElement>(null);

    useEffect(() => {
        logic.initEvents(grid, btnCerrarMenu, contenedorSubCategorias);
    }, [])



  return (

    <header>
        <nav 
            id="menu"
            className={`${styles.menu}`}>
                <div className={`${styles['contenedor']} ${styles['contenedor-botones-menu']}`}>
                    <button 
                        id="btn-menu-barras" 
                        onClick={() => logic.handleMenuMobile(contenedorEnlacesNav)}
                        className={`${styles["btn-menu-barras"]}`}>
                            <i className="fas fa-bars"></i>
                    </button>
                    <button 
                        id="btn-menu-cerrar" 
                        ref={btnCerrarMenu}
                        className={`${styles["btn-menu-cerrar"]} ${styles['btn-menu-barras']}`}>
                            <i className="fas fa-times"></i>
                    </button>
                </div>

                <div 
                    ref={contenedorEnlacesNav}
                    className={`${styles["contenedor"]} ${styles['contenedor-enlaces-nav']}`}>
                    <div className={styles['contenedor-logo']}>
                        <Image priority src={'/img/logo-lion-litografia.png'} width={110} height={80}/>
                    </div>
{/*                     <div 
                        onClick={() => logic.handleDepartmentsMobile(grid, btnCerrarMenu)}
                        onMouseEnter={() => logic.handleShowMenuDesktop(grid)}
                        className={`${styles['btn-departamentos']}`}
                        id="btn-departamentos">
                            <p>Todos Nuestros <span>SERVICIOS</span></p>
                            <i className="fas fa-caret-down"/>
                    </div> */}

                    <div className={styles['separador-logo']}></div>

                    <ul className={`${styles.enlaces}`}>
                        <li>
                            <Link href={'/'}>
                                <a>Inicio</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/conocenos'}>
                                <a>Conócenos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/contacto'}>
                                <a>Contacto</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div 
                    className={`${styles.contenedor} ${styles['contenedor-grid']}`}>
                    <div 
                        onMouseLeave={() => logic.handleHiddeMenuDesktop(grid)}
                        className={`${styles.grid}`} 
                        id="grid"
                        ref={grid}>
                            
                            <div className={`${styles.categorias} categorias`}>
                                <button 
                                    className={`${styles['btn-regresar']} btn-regresar`}>
                                        <i className="fas fa-arrow-left"></i>
                                        Regresar
                                </button>
                                <h3
                                    className={`${styles.subtitulo}`}>
                                        Categorias
                                </h3>

                                <span data-categoria='1'>Publicidad Impresa <i className="fas fa-angle-right"></i></span>
                                <span data-categoria='2'>Papelería Comercial <i className="fas fa-angle-right"></i></span>
                                <span data-categoria='3'>Impresión Digital <i className="fas fa-angle-right"></i></span>
                                <span data-categoria='4'>Publicidad Exterior <i className="fas fa-angle-right"></i></span>
                                <span data-categoria='5'>Gran Formato <i className="fas fa-angle-right"></i></span>
                                <span data-categoria='6'>Souvenirs Publicitarios <i className="fas fa-angle-right"></i></span>
                                <span data-categoria='7'>Desarrollo Web <i className="fas fa-angle-right"></i></span>
                            </div>



                            <div 
                            ref={contenedorSubCategorias}
                                className={`${styles['contenedor-subcategorias']} contenedor-subcategorias`}>

                                <div 
                                    className={`${styles.subcategoria} subcategoria`} 
                                    data-categoria='1'>
                                        <div className={`${styles['enlaces-subcategoria']}`}>
                                            <button className={`${styles['btn-regresar']} btn-regresar`}>
                                                <i className="fas fa-arrow-left"></i>
                                                Regresar
                                            </button>
                                            <h3 className={`${styles.subtitulo}`}> Publicidad Impresa</h3>
                                            <Link href={'/servicios/publicidad-impresa/tarjetas-de-presentacion'}>
                                                <a>Tarjetas de Presentación</a>
                                            </Link>
                                            <Link href={'/servicios/publicidad-impresa/volantes'}>
                                                <a>Volantes</a>
                                            </Link>
                                            <Link href={'/servicios/publicidad-impresa/afiches'}>
                                                <a>Afiches</a>
                                            </Link>
                                            <Link href={'/servicios/publicidad-impresa/calendarios'}>
                                                <a>Calendarios</a>
                                            </Link>
                                            <Link href={'/servicios/publicidad-impresa/etiquetas'}>
                                                <a>Etiquetas</a>
                                            </Link>
                                            <Link href={'/servicios/publicidad-impresa/imanes-publicitarios'}>
                                                <a>Imanes Publicitarios</a>
                                            </Link>
                                        </div>

                                    <div className={`${styles['banner-subcategoria']}`}>
                                        <div className={styles.img}>
                                            <a href="#">
                                                <Image src="/img/menu/tecnologia-banner-1.png" alt="" width={600} height={600}/>
                                            </a>
                                        </div>
                                    </div>

                                    <div className={`${styles['galeria-subcategoria']}`}>
                                        <a href="#">
                                            <Image src="/img/menu/tecnologia-galeria-1.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/tecnologia-galeria-2.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/tecnologia-galeria-3.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/tecnologia-galeria-4.png" alt="" width={300} height={300}/>
                                        </a>
                                    </div>
                                </div>

                                <div className={`${styles.subcategoria} subcategoria`} data-categoria='2'>
                                    <div className={`${styles['enlaces-subcategoria']}`}>
                                        <button className={`${styles['btn-regresar']} btn-regresar`}><i className="fas fa-arrow-left"></i>Regresar</button>
                                        <h3 className={`${styles.subtitulo}`}>Papelería Comercial</h3>
                                            <Link href={'/servicios/papeleria-comercial/talonarios'}>
                                                <a>Talonarios</a>
                                            </Link>
                                            <Link href={'/servicios/papeleria-comercial/hojas-membrete'}>
                                                <a>Hojas Membrete</a>
                                            </Link>
                                            <Link href={'/servicios/papeleria-comercial/carpetas'}>
                                                <a>Carpetas</a>
                                            </Link>
                                            <Link href={'/servicios/papeleria-comercial/tacos-publicitarios'}>
                                                <a>Tacos Publicitarios</a>
                                            </Link>
                                            <Link href={'/servicios/papeleria-comercial/agendas-personalizadas'}>
                                                <a>Agendas Personalizadas</a>
                                            </Link>
                                    </div>

                                    <div className={`${styles['banner-subcategoria']}`}>
                                        <a href="#">
                                            <Image src="/img/menu/libros-banner-1.png" alt="" width={600} height={600}/>
                                        </a>
                                    </div>

                                    <div className={`${styles['galeria-subcategoria']}`}>
                                        <a href="#">
                                            <Image src="/img/menu/libros-galeria-1.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/libros-galeria-2.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/libros-galeria-3.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/libros-galeria-4.png" alt="" width={300} height={300}/>
                                        </a>
                                    </div>
                                </div>

                                <div className={`${styles.subcategoria} subcategoria`} data-categoria='3'>
                                    <div className={`${styles['enlaces-subcategoria']}`}>
                                        <button className={`${styles['btn-regresar']} btn-regresar`}><i className="fas fa-arrow-left"></i>Regresar</button>
                                        <h3 className={`${styles.subtitulo}`}>Impresión Digital</h3>
                                            <Link href={'/servicios/impresion-digital/brochures'}>
                                                <a>Brochures</a>
                                            </Link>
                                            <Link href={'/servicios/impresion-digital/catalogos'}>
                                                <a>Catalogos</a>
                                            </Link>
                                            <Link href={'/servicios/impresion-digital/carnets'}>
                                                <a>Carnets</a>
                                            </Link>
                                            <Link href={'/servicios/impresion-digital/invitaciones'}>
                                                <a>Invitaciones</a>
                                            </Link>
                                            <Link href={'/servicios/impresion-digital/libros'}>
                                                <a>Libros</a>
                                            </Link>
                                            <Link href={'/servicios/impresion-digital/revistas'}>
                                                <a>Revistas</a>
                                            </Link>
                                    </div>

                                    <div className={`${styles['banner-subcategoria']}`}>
                                        <a href="#">
                                            <Image src="/img/menu/ropa-banner-1.png" alt="" width={600} height={600}/>
                                        </a>
                                    </div>

                                    <div className={`${styles['galeria-subcategoria']}`}>
                                        <a href="#">
                                            <Image src="/img/menu/ropa-galeria-1.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/ropa-galeria-2.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/ropa-galeria-3.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/ropa-galeria-4.png" alt="" width={300} height={300}/>
                                        </a>
                                    </div>
                                </div>

                                <div className={`${styles.subcategoria} subcategoria`} data-categoria='4'>
                                    <div className={`${styles['enlaces-subcategoria']}`}>
                                        <button className={`${styles['btn-regresar']} btn-regresar`}><i className="fas fa-arrow-left"></i>Regresar</button>
                                        <h3 className={`${styles.subtitulo}`}>Publicidad Exterior</h3>
                                            <Link href={'/servicios/publicidad-exterior/avisos-luminosos'}>
                                                <a>Avisos Luminosos</a>
                                            </Link>
                                            <Link href={'/servicios/publicidad-exterior/pasacalles'}>
                                                <a>Pasacalles</a>
                                            </Link>
                                            <Link href={'/servicios/publicidad-exterior/vallas'}>
                                                <a>Vallas</a>
                                            </Link>
                                            <Link href={'/servicios/publicidad-exterior/rompetraficos'}>
                                                <a>Rompetráficos</a>
                                            </Link>
                                            <Link href={'/servicios/publicidad-exterior/bastidores'}>
                                                <a>Bastidores</a>
                                            </Link>
                                            <Link href={'/servicios/publicidad-exterior/avisos-neonflex'}>
                                                <a>Avisos en Neonflex</a>
                                            </Link>
                                    </div>

                                    <div className={`${styles['banner-subcategoria']}`}>
                                        <a href="#">
                                            <Image src="/img/menu/hogar-banner-1.png" alt="" width={600} height={600}/>
                                        </a>
                                    </div>

                                    <div className={`${styles['galeria-subcategoria']}`}>
                                        <a href="#">
                                            <Image src="/img/menu/hogar-galeria-1.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/hogar-galeria-2.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/hogar-galeria-3.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/hogar-galeria-4.png" alt="" width={300} height={300}/>
                                        </a>
                                    </div>
                                </div>

                                <div className={`${styles.subcategoria} subcategoria`} data-categoria='5'>
                                    <div className={`${styles['enlaces-subcategoria']}`}>
                                        <button className={`${styles['btn-regresar']} btn-regresar`}><i className="fas fa-arrow-left"></i>Regresar</button>
                                        <h3 className={`${styles.subtitulo}`}>Gran Formato</h3>
                                        <Link href={'/servicios/gran-formato/vinilos-adhesivos'}>
                                                <a>Vinilos Adhesivos</a>
                                        </Link>
                                        <Link href={'/servicios/gran-formato/microperforados'}>
                                                <a>Microperforados</a>
                                        </Link>
                                        <Link href={'/servicios/gran-formato/decoracion-vehicular'}>
                                                <a>Decoración Vehicular</a>
                                        </Link>
                                        <Link href={'/servicios/gran-formato/pendones'}>
                                                <a>Pendones</a>
                                        </Link>
                                        <Link href={'/servicios/gran-formato/senalizacion'}>
                                                <a>Señalización</a>
                                        </Link>
                                        <Link href={'/servicios/gran-formato/plotter-corte'}>
                                                <a>Plotter de Corte</a>
                                        </Link>
                                    </div>

                                    <div className={`${styles['banner-subcategoria']}`}>
                                        <a href="#">
                                            <Image src="/img/menu/juegos-banner-1.png" alt="" width={600} height={600}/>
                                        </a>
                                    </div>

                                    <div className={`${styles['galeria-subcategoria']}`}>
                                        <a href="#">
                                            <Image src="/img/menu/juegos-galeria-1.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/juegos-galeria-2.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/juegos-galeria-3.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/juegos-galeria-4.png" alt="" width={300} height={300}/>
                                        </a>
                                    </div>
                                </div>

                                <div className={`${styles.subcategoria} subcategoria`} data-categoria='6'>
                                    <div className={`${styles['enlaces-subcategoria']}`}>
                                        <button className={`${styles['btn-regresar']} btn-regresar`}><i className="fas fa-arrow-left"></i>Regresar</button>
                                        <h3 className={`${styles.subtitulo}`}>Souvenirs Publicitarios</h3>
                                        <Link href={'/servicios/souvenirs-publicitarios/lapiceros'}>
                                                <a>Lapiceros</a>
                                        </Link>
                                        <Link href={'/servicios/souvenirs-publicitarios/llaveros'}>
                                                <a>Llaveros</a>
                                        </Link>
                                        <Link href={'/servicios/souvenirs-publicitarios/termos'}>
                                                <a>Termos</a>
                                        </Link>
                                        <Link href={'/servicios/souvenirs-publicitarios/mugs'}>
                                                <a>Mugs</a>
                                        </Link>
                                        <Link href={'/servicios/souvenirs-publicitarios/camisetas'}>
                                                <a>Camisas</a>
                                        </Link>
                                        <Link href={'/servicios/souvenirs-publicitarios/gorras'}>
                                                <a>Gorras</a>
                                        </Link>
                                    </div>

                                    <div className={`${styles['banner-subcategoria']}`}>
                                        <a href="#">
                                            <Image src="/img/menu/belleza-banner-1.png" alt="" width={600} height={600}/>
                                        </a>
                                    </div>

                                    <div className={`${styles['galeria-subcategoria']}`}>
                                        <a href="#">
                                            <Image src="/img/menu/belleza-galeria-1.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/belleza-galeria-2.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/belleza-galeria-3.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/belleza-galeria-4.png" alt="" width={300} height={300}/>
                                        </a>
                                    </div>
                                </div>

                                <div className={`${styles.subcategoria} subcategoria`} data-categoria='7'>
                                    <div className={`${styles['enlaces-subcategoria']}`}>
                                        <button className={`${styles['btn-regresar']} btn-regresar`}><i className="fas fa-arrow-left"></i>Regresar</button>
                                        <h3 className={`${styles.subtitulo}`}>Desarrollo Web</h3>
                                        <Link href={'/servicios/desarrollo-web/paginas-web'}>
                                                <a>Paginas Web</a>
                                        </Link>
                                        <Link href={'/servicios/desarrollo-web/tiendas-virtuales'}>
                                                <a>Tiendas Virtuales</a>
                                        </Link>
                                        <Link href={'/servicios/desarrollo-web/aplicaciones-web'}>
                                                <a>Aplicaciones Web</a>
                                        </Link>
                                        <Link href={'/servicios/desarrollo-web/seo'}>
                                                <a>SEO</a>
                                        </Link>
                                        <Link href={'/servicios/desarrollo-web/redes-sociales'}>
                                                <a>Redes Sociales</a>
                                        </Link>

                                    </div>

                                    <div className={`${styles['banner-subcategoria']}`}>
                                        <a href="#">
                                            <Image src="/img/menu/comida-banner-1.png" alt="" width={600} height={600}/>
                                        </a>
                                    </div>

                                    <div className={`${styles['galeria-subcategoria']}`}>
                                        <a href="#">
                                            <Image src="/img/menu/comida-galeria-1.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/comida-galeria-2.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/comida-galeria-3.png" alt="" width={300} height={300}/>
                                        </a>
                                        <a href="#">
                                            <Image src="/img/menu/comida-galeria-4.png" alt="" width={300} height={300}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </nav>
    </header>

  )
}
