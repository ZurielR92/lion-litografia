import { categoryInterface } from "../interfaces";
import { productInterface } from '../interfaces/productsInterface';

export const categoriesList: categoryInterface[] = [
    {
        code: '0101',
        type: 'Publicidad Impresa',
        name: 'Tarjetas de Presentación',
        shortDescription: 'Las tarjetas de visita o presentación son elementos de papelería corporativa básicos para cualquier empresa o empresario.',
        description: 'dfjsdfsd',
        basicPrice: 80000,
        minQuantity: 1000,
        url: '/servicios/publicidad-impresa/tarjetas-de-presentacion',
        displayImage: '/img/products/tarjetas-de-presentacion.png',
        altDisplay: 'Impresión y diseño de tarjetas de presentación en medellín',
        gallery: [''],
        products: [
            {
                title:'Tarjetas con Brillo UV',
                img: '/img/products/tarjetas-de-presentacion-brillo-uv-01.png',
                altImg:'Tarjetas de Presentación Brillo UV',
                shortDescription:'El brillo UV es el acabado mas sencillo que se le puede dar a las tarjetas, es ideal para repartir en masa por sus bajos costos de impresión.',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '1000','2000','3000','6000','10000'
                    ]
                }
            },
            {
               title:'Tarjetas con Laminado Mate',
               img: '/img/products/tarjetas-de-presentacion-laminado-mate-01.png',
               altImg:'Tarjetas de Presentación con laminado mate',
               shortDescription:'El laminado mate le da un toque de elegancia a tus tarjetas volviendolas la mejor opcion para causar impacto en tus clientes y dejar una buena imagen de tu marca.' ,
               priceConfig: {
                priceType: 'Precio Fijo',
                price: 100000,
                queantity: 1000,
                quantities: [
                    '1000','2000','3000','6000','10000'
                ]
            }
            },
            {
               title:'Tarjetas Mate con Reserva UV',
               img: '/img/products/tarjetas-de-presentacion-mate-reserva-01.png',
               altImg:'Tarjetas de Presentación Laminado mate con reserva UV',
               shortDescription:'Adicional al laminado mate el brillo UV localizado genera un acabado premium que no solo genera recordación en los clientes, si no que hace que el producto sea único e inigualable' ,
               priceConfig: {
                priceType: 'Precio Fijo',
                price: 120000,
                queantity: 1000,
                quantities: [
                    '1000','2000','3000','6000','10000'
                ]
            }
            },
            {
               title:'Tarjetas Troqueladas',
               img: '/img/products/tarjetas-de-presentacion-troqueladas-01.png',
               altImg:'Tarjetas de Presentación troqueladas',
               shortDescription:'Esta técnica es realmente creativa e innovadora para tu negocio. De esta manera se ofrece un mensaje único y notable que logre diferenciar esa tarjeta rectangular convencional.' ,
               priceConfig: {
                priceType: 'Precio Fijo',
                price: 190000,
                queantity: 1000,
                quantities: [
                    '1000','2000','3000','6000','10000'
                ]
            }
                
            },
            {
               title:'Tarjetas Ecológicas',
               img: '/img/products/tarjetas-de-presentacion-troqueladas-01.png',
               altImg:'Tarjetas de Presentación ecológicas',
               shortDescription:'¿Te preocupa el medio ambiente? Elige nuestras tarjetas ecológicas sin acabados plasticos, tambien las imprimimos desde pocas cantidades para evitar desperdicios.' ,
               priceConfig: {
                priceType: 'Precio Fijo',
                price: 30000,
                queantity: 120,
                quantities: [
                    '1000','2000','3000','6000','10000'
                ]
            }
            },
            {
               title:'Tarjetas Cuadradas',
               img: '/img/products/tarjetas-de-presentacion-troqueladas-01.png',
               altImg:'Tarjetas de Presentación cuadradas',
               shortDescription:'Nuestras tarjetas de presentación cuadradas tienen un look y textura que las hacen destacar entre las tarjetas de forma normal. Tienen el formato perfecto para lograr que su logotipo o una foto de sus productos destaquen y, a la vez, sirven para darle a su empresa un toque interesante y creativo.' ,
               priceConfig: {
                priceType: 'Precio Fijo',
                price: 100000,
                queantity: 2000,
                quantities: [
                    '1000','2000','3000','6000','10000'
                ]
            }
            },
        ],
        FAQs: [
            {
             ask:'¿Donde puedo imprimir mis Tarjetas de Presentación?',
             response:'Si deseas imprimir las mejores y mas creativas tarjetas de presentación, en Lion Litografía Medellín tenemos lo que buscas, desde tarjetas sencillas hasta acabados premium. Nosotros nos encargamos de ofrecer un producto de calidad, elegante y a muy buen precio'
            },
            {
             ask:'¿Cuanto cuesta el diseño de mis para mis tarjetas de presentación?',
             response:'El precio del diseño de una tarjeta de presentación es de $ 20.000. un valor muy económico en comparación con el resto del mercado de Colombiam en Lion Litografía Medellín podrás disfrutar de una variedad de diseños, acabados y tipos de papel'
            },
            {
             ask:'¿Donde puedo mandar a hacer mis tarjetas de presentación?',
             response:'Si estas en busca de impulsar tu marca, en Lion Litografía Medellín diseñamos e imprimimos tus tarjetas de presentación para que puedas ser reconocido en toda Colombia si lo deseas. Este tipo de herramienta es realmente útil para atraer más clientes, que tu negocio crezca y sea reconocido cada vez mas rápido'
            },
        ]
    },
    {
        code: '0102',
        type: 'Publicidad Impresa',
        name: 'Volantes Publicitarios',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 70000,
        minQuantity: 1000,
        url: '/servicios/publicidad-impresa/volantes',
        displayImage: '/img/products/volantes.png',
        altDisplay: 'Impresión y diseño de volantes en medellín',
        gallery: [''],
        products: [
            {
                title:'Volantes de 7x13cm ( Full color - Un lado )',
                img: '/img/products/volntes-7x13-4x0-01.png',
                altImg:'Tarjetas de Presentación Brillo UV',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '1000','2000','3000','6000','10000'
                    ]
                }
            },
            {
                title:'Volantes de 12x21cm ( Full color - Un lado )',
                img: '/img/products/volntes-12x12-4x0-01.png',
                altImg:'Tarjetas de Presentación Brillo UV',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '1000','2000','3000','6000','10000'
                    ]
                }
            },
            {
                title:'Volantes de 12x21cm ( Full color - Ambos Lados )',
                img: '/img/products/volates-12x21-4x4-01.png',
                altImg:'Volantes de 12x21cm ( Full color - Ambos Lados )',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '1000','2000','3000','6000','10000'
                    ]
                }
            },
        ]
    },
    {
        code: '0103',
        type: 'Publicidad Impresa',
        name: 'Afiches',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 90000,
        minQuantity: 500,
        url: '/servicios/publicidad-impresa/afiches',
        displayImage: '/img/products/afiches.png',
        altDisplay: 'Impresión y diseño de afiches en medellín',
        gallery: ['']
    },
    {
        code: '0104',
        type: 'Publicidad Impresa',
        name: 'Calendarios',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 350000,
        minQuantity: 500,
        url: '/servicios/publicidad-impresa/calendarios',
        displayImage: '/img/products/calendarios.png',
        altDisplay: 'Impresión y diseño de calendarios en medellín',
        gallery: ['']
    },
    {
        code: '0105',
        type: 'Publicidad Impresa',
        name: 'Etiquetas',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 75000,
        minQuantity: 1000,
        url: '/servicios/publicidad-impresa/etiquetas',
        displayImage: '/img/products/etiquetas.png',
        altDisplay: 'Impresión y diseño de etiquetas en medellín',
        gallery: ['']
    },
    {
        code: '0106',
        type: 'Publicidad Impresa',
        name: 'Imanes Publicitarios',
        shortDescription: 'Se adhieren a superficies metálicas y permiten poner tu imagen en cualquier lugar.',
        description: 'dfjsdfsd',
        basicPrice: 200000,
        minQuantity: 500,
        url: '/servicios/publicidad-impresa/imanes-publicitarios',
        displayImage: '/img/products/imanes-publicitarios.png',
        altDisplay: 'Impresión y diseño de Imanes para nevera en medellín',
        gallery: [''],
        products: [
            {
                title: 'Imanes Sencillos 5x9cm',
                shortDescription: 'Imanes tradicionales que muestran la información de tu empresa adhesida a cualquier superficie metalica, muy efectivos para crear recordación en tu marca',
                img:'/img/products/imanes-sencillos-01.png',
                altImg:'Imanes publicitarios sencillos',
                priceConfig:{
                    price:310000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '120','240','500','1000','2000','5000'
                    ]
                }
            },
            {
                title: 'Imanes Cuadrados 4,5x4,5cm',
                shortDescription: 'Imprime tus imanes en formato cuadrado, ideal y da un toque diferente a los imanes convencionales y tambien un poco de economía.',
                img:'/img/products/imanes-cuadrados-01.png',
                altImg:'Imanes publicitarios cuadrados',
                priceConfig:{
                    price:210000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '120','240','500','1000','2000','5000'
                    ]
                }
            },
            {
                title: 'Imanes troquelados 9x5cm',
                shortDescription: 'Con tus imanes troquelados te aseguraras de impactar en tus clientes, un diseño creativo',
                img:'/img/products/imanes-troquelados-01.png',
                altImg:'',
                priceConfig:{
                    price:410000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '120','240','500','1000','2000','5000'
                    ]
                }
            },
        ],
        FAQs: [
            {
                ask:'¿Donde puedo imprimir mis Imanes Publicitarios?',
                response:'Si deseas imprimir las mejores y mas creativas Imanes Publicitarios, en Lion Litografía Medellín tenemos lo que buscas, desde tarjetas sencillas hasta acabados premium. Nosotros nos encargamos de ofrecer un producto de calidad, elegante y a muy buen precio'
               },
               {
                ask:'¿Cuanto cuesta el diseño de mis para mis Imanes Publicitarios?',
                response:'El precio del diseño de una tarjeta de presentación es de $ 20.000. un valor muy económico en comparación con el resto del mercado de Colombiam en Lion Litografía Medellín podrás disfrutar de una variedad de diseños, acabados y tipos de papel'
               },
               {
                ask:'¿Donde puedo mandar a hacer mis Imanes Publicitarios?',
                response:'Si estas en busca de impulsar tu marca, en Lion Litografía Medellín diseñamos e imprimimos tus Imanes Publicitarios para que puedas ser reconocido en toda Colombia si lo deseas. Este tipo de herramienta es realmente útil para atraer más clientes, que tu negocio crezca y sea reconocido cada vez mas rápido'
               },
        ]
    },
    {
        code: '0201',
        type: 'Papeleria Comercial',
        name: 'Talonarios',
        shortDescription: 'Talonarios, boletas para rifas, facturas y remisiones de todo tipo! Autocopiantes, con una, dos y 3 copias, con precorte ¡Cotiza ahora!',
        description: 'dfjsdfsd',
        basicPrice: 75000,
        minQuantity: 10,
        url: '/servicios/papeleria-comercial/talonarios',
        displayImage: '/img/products/talonarios.png',
        altDisplay: 'Impresión de talonarios personalizados en medellín',
        gallery: [''],
        products: [
            {
                title: 'Talonarios de Facturas',
                shortDescription: 'Imanes tradicionales que muestran la información de tu empresa adhesida a cualquier superficie metalica, muy efectivos para crear recordación en tu marca',
                img:'/img/products/talonario-de-facturas-01.png',
                altImg:'Talonarios de facturas personalizados',
                priceConfig:{
                    price:310000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '10','20','50','100'
                    ]
                }
            },
            {
                title: 'Talonarios para Rifas',
                shortDescription: '¿Tiene en mente realizar algún sorteo o evento? Entonces necesita los talonarios de rifas o entradas ideales para conciertos, discotecas, fiestas, sorteos.',
                img:'/img/products/talonario-rifas-01.png',
                altImg:'Talonarios para rifas personalizados',
                priceConfig:{
                    price:310000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '10','20','50','100'
                    ]
                }
            },
            {
                title: 'Blocks de Notas',
                shortDescription: 'Imanes tradicionales que muestran la información de tu empresa adhesida a cualquier superficie metalica, muy efectivos para crear recordación en tu marca',
                img:'/img/products/blocks-de-notas-01.png',
                altImg:'Blogs de notas personalizados',
                priceConfig:{
                    price:310000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '10','20','50','100'
                    ]
                }
            },
        ],
        FAQs: [
            {
             ask:'¿Donde puedo imprimir mis Talonarios Personalizados?',
             response:'Si deseas imprimir las mejores y mas creativas Talonarios Personalizados, en Lion Litografía Medellín tenemos lo que buscas, desde tarjetas sencillas hasta acabados premium. Nosotros nos encargamos de ofrecer un producto de calidad, elegante y a muy buen precio'
            },
            {
             ask:'¿Cuanto cuesta el diseño de mis para mis Talonarios Personalizados?',
             response:'El precio del diseño de un talonario personalizado es de $ 20.000. un valor muy económico en comparación con el resto del mercado de Colombiam en Lion Litografía Medellín podrás disfrutar de una variedad de diseños, acabados y tipos de papel'
            },
            {
             ask:'¿Donde puedo mandar a hacer mis Talonarios Personalizados?',
             response:'Si estas en busca de impulsar tu marca, en Lion Litografía Medellín diseñamos e imprimimos tus Talonarios Personalizados para que puedas ser reconocido en toda Colombia si lo deseas. Este tipo de herramienta es realmente útil para atraer más clientes, que tu negocio crezca y sea reconocido cada vez mas rápido'
            },
        ]
    },
    {
        code: '0202',
        type: 'Papeleria Comercial',
        name: 'Hojas Membrete',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 100000,
        minQuantity: 500,
        url: '/servicios/papeleria-comercial/holjas-membrete',
        displayImage: '/img/products/hojas-membrete.png',
        altDisplay: 'Impresión de hojas membrete en medellín',
        gallery: ['']
    },
    {
        code: '0203',
        type: 'Papeleria Comercial',
        name: 'Carpetas',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 200000,
        minQuantity: 100,
        url: '/servicios/papeleria-comercial/carpetas',
        displayImage: '/img/products/carpetas.png',
        altDisplay: 'Impresión de carpetas personalizadas en medellín',
        gallery: ['']
    },
    {
        code: '0204',
        type: 'Papeleria Comercial',
        name: 'Tacos Publicitarios',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 100000,
        minQuantity: 50,
        url: '/servicios/papeleria-comercial/tacos-publicitarios',
        displayImage: '/img/products/tacos-publicitarios.png',
        altDisplay: 'Impresión de tacos publicitarios en medellín',
        gallery: ['']
    },
    {
        code: '0205',
        type: 'Papeleria Comercial',
        name: 'Agendas Personalizadas',
        shortDescription: 'Los cuadernos y agendas personalizadas son una excelente manera de expresar sus intereses y personalidad.',
        description: 'dfjsdfsd',
        basicPrice: 100000,
        minQuantity: 10,
        url: '/servicios/papeleria-comercial/agendas-personalizadas',
        displayImage: '/img/products/agendas-personalizadas.png',
        altDisplay: 'Impresión de agendas personalizadas en medellín',
        gallery: [''],
        products: [
            {
                title: 'Agendas Tipo Cuaderno',
                shortDescription:'Uno de los productos preferidos por las empresas para regalar a sus clientes',
                img:'/img/products/agendas-personalizadas-agenta-tipo-cuaderno-01.png',
                altImg:'Agenda argollada tipo cuaderno',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 200000,
                    queantity: 10,
                    quantities: [
                        '10','20','50','100','200','500','1000'
                    ]
                }
            },
            {
                title: 'Agendas Ejecutivas',
                shortDescription:'Dale mas personalidad y distinción a tu marca con estas fabulosas agendas ejecutivas. Su cubierta forrada con imitación de cueron y carton les da una presentación óptima para tus regalos y promociones',
                img:'/img/products/agendas-personalizadas-agenta-ejecutiva-01.png',
                altImg:'Agenda Ejecutiva',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 300000,
                    queantity: 10,
                    quantities: [
                        '10','20','50','100','200','500','1000'
                    ]
                }
            },
            {
                title: 'Libreta Argollada',
                shortDescription:'Las libretas argolladas son versátiles, bellas y económicas. Pon tu imagen en una libreta y tus clientes nunca te olvidarán',
                img:'/img/products/agendas-personalizadas-libreta-argollada-01.png',
                altImg:'Libreta Argollada',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 100000,
                    queantity: 10,
                    quantities: [
                        '10','20','50','100','200','500','1000'
                    ]
                }
            },
            {
                title: 'Libretas Encoladas Con Tapa',
                shortDescription:'Las libretas encoladas con tapa tienen una presentación simple y hermosa. Puedes personalizarlas con tu diseño, elegir el tamaño, formato y materiales para obtener objetos únicos para tu marca',
                img:'/img/products/agendas-personalizadas-libreta-encolada-con-tapa-01.png',
                altImg:'Libreta endolada con tapa',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 60000,
                    queantity: 10,
                    quantities: [
                        '10','20','50','100','200','500','1000'
                    ]
                }
            },
            {
                title: 'Cuaderno Engrapado',
                shortDescription:'Imagina tu diseño en prácticos cuadernos grapados, útiles para estudiar, trabajar, apuntar ideas y mucho mas, a tus clientes le encantarán.',
                img:'/img/products/agendas-personalizadas-cuaderno-engrapado-01.png',
                altImg:'Cuaderno Grapado',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 130000,
                    queantity: 10,
                    quantities: [
                        '10','20','50','100','200','500','1000'
                    ]
                }
            },
        ],
        FAQs: [
            {
             ask:'¿Donde puedo imprimir mis Agendas Personalizadas?',
             response:'Si deseas imprimir las mejores y mas creativas Agendas Personalizadas, en Lion Litografía Medellín tenemos lo que buscas, desde tarjetas sencillas hasta acabados premium. Nosotros nos encargamos de ofrecer un producto de calidad, elegante y a muy buen precio'
            },
            {
             ask:'¿Cuanto cuesta el diseño de mis para mis Agendas Personalizadas?',
             response:'El precio del diseño de una tarjeta de presentación es de $ 20.000. un valor muy económico en comparación con el resto del mercado de Colombiam en Lion Litografía Medellín podrás disfrutar de una variedad de diseños, acabados y tipos de papel'
            },
            {
             ask:'¿Donde puedo mandar a hacer mis Agendas Personalizadas?',
             response:'Si estas en busca de impulsar tu marca, en Lion Litografía Medellín diseñamos e imprimimos tus Agendas Personalizadas para que puedas ser reconocido en toda Colombia si lo deseas. Este tipo de herramienta es realmente útil para atraer más clientes, que tu negocio crezca y sea reconocido cada vez mas rápido'
            },
        ]
    },
    {
        code: '0301',
        type: 'Impresión Digital',
        name: 'Brochures',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 100000,
        minQuantity: 10,
        url: '/servicios/impresion-digital/brochures',
        displayImage: '/img/products/brochures.png',
        altDisplay: 'Impresión y diseño de brochures en medellín',
        gallery: ['']
    },
    {
        code: '0302',
        type: 'Impresión Digital',
        name: 'Catálogos',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 150000,
        minQuantity: 10,
        url: '/servicios/papeleria-comercial/catalogos',
        displayImage: '/img/products/catalogos.png',
        altDisplay: 'Impresión y diseño de catalogos en medellín',
        gallery: ['']
    },
    {
        code: '0303',
        type: 'Impresión Digital',
        name: 'Carnets',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/papeleria-comercial/carnets',
        displayImage: '/img/products/carnets.png',
        altDisplay: 'Impresión y diseño de carnets en medellín',
        gallery: ['']
    },
    {
        code: '0304',
        type: 'Impresión Digital',
        name: 'Invitaciones',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/papeleria-comercial/invitaciones',
        displayImage: '/img/products/invitaciones.png',
        altDisplay: 'Impresión y diseño de invitaciones en medellín',
        gallery: ['']
    },
    {
        code: '0304',
        type: 'Impresión Digital',
        name: 'Libros',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/papeleria-comercial/libros',
        displayImage: '/img/products/libros.png',
        altDisplay: 'Impresión y diseño de libros en medellín',
        gallery: ['']
    },
    {
        code: '0304',
        type: 'Impresión Digital',
        name: 'Revistas',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/papeleria-comercial/revistas',
        displayImage: '/img/products/revistas.png',
        altDisplay: 'Impresión y diseño de revistas en medellín',
        gallery: ['']
    },
    {
        code: '0401',
        type: 'Publicidad Exterior',
        name: 'Avisos Luminosos',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/avisos-luminosos',
        displayImage: '/img/products/avisos-luminosos.png',
        altDisplay: 'Impresión y diseño de Avisos Luminosos en medellín',
        gallery: ['']
    },
    {
        code: '0402',
        type: 'Publicidad Exterior',
        name: 'Pasacalles',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/pasacalles',
        displayImage: '/img/products/pasacalles.png',
        altDisplay: 'Impresión y diseño de Pasacalles en medellín',
        gallery: ['']
    },
    {
        code: '0403',
        type: 'Publicidad Exterior',
        name: 'Vallas',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/vallas',
        displayImage: '/img/products/vallas.png',
        altDisplay: 'Impresión y diseño de vallas en medellín',
        gallery: ['']
    },
    {
        code: '0404',
        type: 'Publicidad Exterior',
        name: 'Rompetráficos',
        shortDescription: 'jsdfjsodfjsifjpfsdofs sdfsd ds s sdsedafsa efas',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/rompetraficos',
        displayImage: '/img/products/rompetraficos.png',
        altDisplay: 'Impresión y diseño de rompetraficos en medellín',
        gallery: ['']
    },
    {
        code: '0405',
        type: 'Publicidad Exterior',
        name: 'Bastidores',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/bastidores',
        displayImage: '/img/products/bastidores.png',
        altDisplay: 'Impresión y diseño de bastidores en medellín',
        gallery: ['']
    },
    {
        code: '0406',
        type: 'Publicidad Exterior',
        name: 'Avisos en Neonflex',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/avisos-neonflex',
        displayImage: '/img/products/avisos-neonflex.png',
        altDisplay: 'Impresión y diseño de avisos neonflex en medellín',
        gallery: ['']
    },
    {
        code: '0501',
        type: 'Gran Formato',
        name: 'Impresión Gran Formato',
        shortDescription: 'Vinilos adhesivos, microperforados, pendones, vallas, backing para eventos y mucho mas...',
        description: 'Vinilos adhesivos, microperforados, pendones, vallas, backing para eventos y mucho mas...',
        basicPrice: 30000,
        minQuantity: 1,
        url: '/servicios/gran-formato/vinilos-adhesivos',
        displayImage: '/img/products/vinilos-adhesivos.png',
        altDisplay: 'Impresión y diseño de vinilos adhesivos en medellín',
        gallery: [''],
        products: [
            {
                title:'Pendones',
                img: '/img/products/impresion-gran-formato-pendones-01.png',
                altImg:'Pendones con varillas u ojales',
                shortDescription:'Impresos en Lona Banner de 13oz, pueden llevar tanto ojales como varillas para colgar (o ambos de ser necesarío). Tambien pueden ser laminados si es necesario.',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
            {
                title:'Vinilos Adhesivos',
                img: '/img/products/impresion-gran-formato-vinilos-adhesivos-01.png',
                altImg:'Vinilos adhesivos laminados',
                shortDescription:'Ideal para fotomurales, letreros, cuadros en mdf y muchos usos mas, el vinilo puede ser laminado BRILLANTE o MATE y el costo es por centímetro cuadrado.',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000
                }
            },
            {
                title:'Vinilos Microperforados',
                img: '/img/products/impresion-gran-formato-microperforados-01.png',
                altImg:'Vinilos microperforados',
                shortDescription:'Decora y crea ambientes unicos y creativos que a la vez que permites vista exterior y un mayor grado de privacidad interior',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000
                }
            },
        ],
        FAQs: [
            {
             ask:'¿Donde puedo imprimir mis Agendas Personalizadas?',
             response:'Si deseas imprimir las mejores y mas creativas Agendas Personalizadas, en Lion Litografía Medellín tenemos lo que buscas, desde tarjetas sencillas hasta acabados premium. Nosotros nos encargamos de ofrecer un producto de calidad, elegante y a muy buen precio'
            },
            {
             ask:'¿Cuanto cuesta el diseño de mis para mis Agendas Personalizadas?',
             response:'El precio del diseño de una tarjeta de presentación es de $ 20.000. un valor muy económico en comparación con el resto del mercado de Colombiam en Lion Litografía Medellín podrás disfrutar de una variedad de diseños, acabados y tipos de papel'
            },
            {
             ask:'¿Donde puedo mandar a hacer mis Agendas Personalizadas?',
             response:'Si estas en busca de impulsar tu marca, en Lion Litografía Medellín diseñamos e imprimimos tus Agendas Personalizadas para que puedas ser reconocido en toda Colombia si lo deseas. Este tipo de herramienta es realmente útil para atraer más clientes, que tu negocio crezca y sea reconocido cada vez mas rápido'
            },
        ]
    },
    {
        code: '0502',
        type: 'Gran Formato',
        name: 'Microperforados',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/microperforados',
        displayImage: '/img/products/microperforados.png',
        altDisplay: 'Impresión y diseño de microperforados en medellín',
        gallery: ['']
    },
    {
        code: '0503',
        type: 'Gran Formato',
        name: 'Decoración Vehicular',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/decoracion-vehicular',
        displayImage: '/img/products/decoracion-vehicular.png',
        altDisplay: 'Impresión y diseño de Decoración vehicular en medellín',
        gallery: ['']
    },
    {
        code: '0504',
        type: 'Gran Formato',
        name: 'Pendones',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/pendones',
        displayImage: '/img/products/pendones.png',
        altDisplay: 'Impresión y diseño de pendones en medellín',
        gallery: [''],
        products: [
            {
                title:'Pendon con varillas',
                img: '',
                altImg:'Tarjetas de Presentación Brillo UV',
                shortDescription:'El brillo UV es el acabado mas sencillo que se le puede dar a las tarjetas, es ideal para repartir en masa por sus bajos costos de impresión.',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000
                }
            },
        ]
    },
    {
        code: '0505',
        type: 'Gran Formato',
        name: 'Señalización',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/senalizacion',
        displayImage: '/img/products/senalizacion.png',
        altDisplay: 'Impresión y diseño de señalicación en medellín',
        gallery: ['']
    },
    {
        code: '0506',
        type: 'Gran Formato',
        name: 'Plotter de Corte',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/plotter-de-corte',
        displayImage: '/img/products/plotter-de-corte.png',
        altDisplay: 'Servicio de corte en plotter en medellín',
        gallery: ['']
    },
    {
        code: '0505',
        type: 'Gran Formato',
        name: 'Plotter de Corte',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/plotter-de-corte',
        displayImage: '/img/products/plotter-de-corte.png',
        altDisplay: 'Servicio de corte en plotter en medellín',
        gallery: ['']
    },
    {
        code: '0601',
        type: 'Desarrollo Web',
        name: 'Paginas Web',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/paginas-web',
        displayImage: '/img/products/paginas-web.png',
        altDisplay: 'Diseño de paginas web en medellín',
        gallery: ['']
    },
    {
        code: '0602',
        type: 'Desarrollo Web',
        name: 'Tiendas virtuales',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/tiendas-virtuales',
        displayImage: '/img/products/tiendas-virtuales.png',
        altDisplay: 'Creación de tiendas virtuales en medellín',
        gallery: ['']
    },
    {
        code: '0603',
        type: 'Desarrollo Web',
        name: 'Aplicaciones Web',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/aplicaciones-web',
        displayImage: '/img/products/aplicaciones-web.png',
        altDisplay: 'Creación de aplicaciones web en medellín',
        gallery: ['']
    },
    {
        code: '0604',
        type: 'Desarrollo Web',
        name: 'Estrategias SEO',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/seo',
        displayImage: '/img/products/seo.png',
        altDisplay: 'Creación de estrategia seo web en medellín',
        gallery: ['']
    },
    {
        code: '0605',
        type: 'Desarrollo Web',
        name: 'Reses Sociales',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/redes-socieles',
        displayImage: '/img/products/redes-sociales.png',
        altDisplay: 'Gestion de redes sociales en medellín',
        gallery: ['']
    },
]