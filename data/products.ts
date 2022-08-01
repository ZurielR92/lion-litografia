const productsDatabase: productInterface[] = [
    {
        code: '010101',
        title: 'Tarjetas de Presentación Brillo UV',
        shorDescription: 'El brillo UV es el acabado mas sencillo que se le puede dar a las tarjetas, es ideal para repartir en masa por sus bajos costos de impresión.',
        categoryRef: {
            code:'0101',
            category:'Tarjetas de Presentación',
            line:'Publicidad Impresa'
        },
        priceConfig: {
            priceType:"Precio Fijo",
            quantity:1000,
            price:70000
        },
        displayImages: {
            primaryImage: '/img/products/tarjetas-de-presentacion-brillo-uv-01.png',
            altPrimaryImage: 'Tarjetas de Presentación Brillo UV',
        }
    },
    {
        code: '010102',
        title: 'Tarjetas de Presentación Laminado Mate',
        shorDescription: 'El laminado mate le da un toque de elegancia a tus tarjetas volviendolas la mejor opcion para causar impacto en tus clientes y dejar una buena imagen de tu marca.',
        categoryRef: {
            code:'0101',
            category:'Tarjetas de Presentación',
            line:'Publicidad Impresa'
        },
        priceConfig: {
            priceType:"Precio Fijo",
            quantity:1000,
            price:90000
        },
        displayImages: {
            primaryImage:'/img/products/tarjetas-de-presentacion-laminado-mate-01.png',
            altPrimaryImage:'Tarjetas de Presentación con laminado mate',
        }
    },
    {
        code: '010103',
        title: 'Tarjetas de Presentación Mate con Reserva UV',
        shorDescription: 'Adicional al laminado mate el brillo UV localizado genera un acabado premium que no solo genera recordación en los clientes, si no que hace que el producto sea único e inigualable',
        categoryRef: {
            code:'0101',
            category:'Tarjetas de Presentación',
            line:'Publicidad Impresa'
        },
        priceConfig: {
            priceType:"Precio Fijo",
            quantity:1000,
            price:120000
        },
        displayImages: {
            primaryImage:'/img/products/tarjetas-de-presentacion-mate-reserva-01.png',
            altPrimaryImage:'Tarjetas de Presentación con laminado mate',
        }
    },
];

interface productInterface {
    _id?: string;
    code: string;
    title: string;
    shorDescription: string;
    displayImages?: displayImages;
    priceConfig: priceConfig;
    categoryRef: categoryRef;
}

type displayImages = {
    primaryImage: string;
    altPrimaryImage: string;
    secondaryImage?: string;
    altSecondaryImage?: string;
}

type priceConfig = {
    priceType: priceType;
    price: number;
    quantity: number;
}

type priceType = 
| 'Precio Fijo'
| 'Precio por Cm2'

type categoryRef = {
    _id?: string;
    code: string;
    category: string;
    line: string;
}

