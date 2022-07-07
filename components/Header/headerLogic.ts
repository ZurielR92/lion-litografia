import styles from './Header.module.css'


const innerWidth = (typeof window === 'undefined') ? 0 : window.innerWidth;
const esDispositivoMovil = () => innerWidth <= 800;


const handleShowMenuDesktop = (grid:any) => {
    if (!esDispositivoMovil()) {
        grid.current?.classList.add(`${styles.activo}`);
    }
}
const handleHiddeMenuDesktop = (grid:any) => {
    if (!esDispositivoMovil()){
        grid.current?.classList.remove(`${styles.activo}`);
    }
}
const handleMenuMobile = (contenedorEnlacesNav: any) => {
    if(esDispositivoMovil()){
        if(contenedorEnlacesNav.current?.classList.contains(`${styles.activo}`)){
            contenedorEnlacesNav.current.classList.remove(`${styles.activo}`);
        } else {
            contenedorEnlacesNav.current?.classList.add(`${styles.activo}`);
        }
    }
}
const handleDepartmentsMobile = (grid:any, btnCerrarMenu:any) => {
    if(esDispositivoMovil()){
        grid.current?.classList.add(`${styles.activo}`);
        btnCerrarMenu.current?.classList.add(`${styles.activo}`)
    }
}









const initEvents = (grid:any, btnCerrarMenu:any, contenedorSubCategorias:any) => {


    document.querySelectorAll('#menu .categorias span').forEach(elemento => {
        elemento.addEventListener('mouseenter',(e)=>{
            if(!esDispositivoMovil()){
                document.querySelectorAll('#menu .subcategoria').forEach(categoria=>{
                    categoria.classList.remove(`${styles.activo}`);
                    if((categoria as HTMLElement).dataset.categoria == (e.target as HTMLElement).dataset.categoria){
                        categoria.classList.add(`${styles.activo}`);
                    }
                });
            }
        });
    });

    document.querySelector('#grid .categorias .btn-regresar')?.addEventListener('click', (e) => {
        grid.current?.classList.remove(`${styles.activo}`);
        btnCerrarMenu.current?.classList.remove(`${styles.activo}`);
    })

    document.querySelectorAll('#menu .categorias span').forEach((elemento) => {
        elemento.addEventListener('click', (e) => {
            if(esDispositivoMovil()){
                contenedorSubCategorias.current?.classList.add(`${styles.activo}`)
                document.querySelectorAll('#menu .subcategoria').forEach((categoria)=> {
                    categoria.classList.remove(`${styles.activo}`)
                    if((categoria as HTMLElement).dataset.categoria == (e.target as HTMLElement).dataset.categoria){
                        
                        categoria.classList.add(`${styles.activo}`);
                    }
                })
            }
        })
    })

    document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton)=>{
        boton.addEventListener('click',(e)=>{
            contenedorSubCategorias.current?.classList.remove(`${styles.activo}`)
        })
    })

    btnCerrarMenu.current?.addEventListener('click', (e:any)=>{
        document.querySelectorAll(`#menu .${styles.activo}`).forEach((elemento)=>{
            elemento.classList.remove(`${styles.activo}`)
        })
        document.querySelector('body')?.classList.remove('overflow')
    })
}

const logic = {
    initEvents,
    handleDepartmentsMobile,
    handleMenuMobile,
    handleHiddeMenuDesktop,
    handleShowMenuDesktop,
};

export default logic;