import { GetStaticProps, NextPage } from 'next'
import { productInterface } from '../../../../interfaces/productsInterface';
import { questionInterface } from '../../../../interfaces/accordionPropsInterface';
import { categoriesList } from '../../../../data/categories';
import { SEO } from '../../../../components/SEO/SEO';
import { TitlePage } from '../../../../components/titlePage/TitlePage';
import { ProductsGrid } from '../../../../components/products/productsGrid/ProductsGrid';
import { SimpleSection } from '../../../../components/simpleSection/SimpleSection';
import { FAQs } from '../../../../components/FAQs/FAQs';



interface Props {
  productList: productInterface[]
  FAQsList: questionInterface[]
}



const AgendasPersonalizadasPage:NextPage<Props> = ( { FAQsList, productList } ) => {

  const breacumbArray = [
    {
      title: 'Inicio',
      url: '/'
    },
    {
      title: 'Servicios',
      url: '/servicios'
    },
    {
      title: 'Papelería Comercial',
      url: '/servicios/papeleria-comercial'
    },
  ]

  return (

    <main>

      <SEO
        title='Agendas Personalizadas'
        description='La impresión de tus cuadernos y libretas personalizadas es la mejor forma para brindar a tus clientes un producto útil y al mismo tiempo generas recordación de marca. Puedes imprimirlos en pocas cantidades, diferentes tamaños y acabados.'
      />

      <TitlePage
        title='Agendas Personalizadas'
        breacumb={breacumbArray}
      />

      <ProductsGrid
        title='Conoce nuestra variedad de cuadernos'
        subtitle='¿Cual es el cuaderno ideal para mi negocio?'
        products={productList}
      />

      <SimpleSection
      subtitle='Haz que tu marca cause impacto'
      title='Cuadernos y Libretas Personalizadas'
      >

        &nbsp;&nbsp;&nbsp; Los Cuadernos y Libretas Personalizadas de Lion Litografía son fáciles de comprar desde la comodidad de tu oficina y recibe a domicilio. Convierte lo simple en algo impresionante… úsalos como libretas, agendas o diarios para ti o tu empresa.
        <br /> <br />
        &nbsp;&nbsp;&nbsp;Las libretas son un excelente producto para tu entorno laboral, académico o tu hogar. Ayudan a fortalecer y resaltar tu marca, siendo un elemento muy útil y de gran uso para tus clientes como libreta para tomar notas, dibujar, hacer trabajos, escribir apuntes, etc.
        <br /><br />
        &nbsp;&nbsp;&nbsp;En printu encontrarás diferentes características para lograr la personalización que desees, puedes elegir el tamaño que más se ajuste a tu requerimiento entre 15 x 15 cm., 17 x 24 cm., ¼ de Carta, ½ Carta. Define el material para la carátula y acabados como plastificado en brillante o mate. Otra opción para personalizar es el color  del anillado entre negro, blanco y plateado, además, decide cómo deben ir impresas sus hojas internas.
      </SimpleSection>

      <FAQs
        questions={FAQsList}
      />

    </main>

  )
}




export const getStaticProps: GetStaticProps = async(ctx) => {

  const productList: productInterface[] = []
  const FAQsList : questionInterface[]=[]

  
  categoriesList.find(cat => {
    if (cat.code === '0205') {
      cat.FAQs?.forEach(element => {
        FAQsList.push(element)
      })
      cat.products?.forEach(element => {
        productList.push(element)
      });
    }
  })

  return {
    props: {
      productList,
      FAQsList
    }
  }
}




export default AgendasPersonalizadasPage