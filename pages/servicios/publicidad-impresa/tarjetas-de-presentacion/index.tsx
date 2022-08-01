import { GetStaticProps, NextPage } from 'next'

import styles from './TarjetasPresentacion.module.css'

import { ProductsGrid } from '../../../../components/products/productsGrid/ProductsGrid'
import { SEO } from '../../../../components/SEO/SEO'
import { TitlePage } from '../../../../components/titlePage/TitlePage'
import { categoriesList } from '../../../../data';
import { productInterface } from '../../../../interfaces/productsInterface';
import { SimpleSection } from '../../../../components/simpleSection/SimpleSection'
import { ImageSection } from '../../../../components/imageSection/ImageSection'
import { FAQs } from '../../../../components/FAQs/FAQs';
import { questionInterface } from '../../../../interfaces/accordionPropsInterface';


interface Props {
  productList: productInterface[]
  FAQsList: questionInterface[]
}

const TarjetasPresentacionPage:NextPage<Props> = ( { productList, FAQsList } ) => {

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
      title: 'Pulicidad Impresa',
      url: '/servicios/publicidad-impresa'
    },
  ]

  return (
    <main className={styles.main}>
      <SEO
        title='Tarjetas de Presentación'
        description='Talonarios, boletas para rifas, facturas y remisiones de todo tipo! Autocopiantes, con una, dos y 3 copias, con precorte ¡Cotiza ahora!'
      />

      <TitlePage 
        title='Tarjetas de Presentación'
        breacumb={breacumbArray}
      />

      <ProductsGrid
        subtitle='¿Cual es la tarjeta ideal para mi negocio?'
        title='Conoce nuestra variedad de acabados'
        products={productList}
      />
    
      <SimpleSection 
        title='¿Que es una tarjeta de presentación y para que sirve?' 
        subtitle='¿Realente necesito tarjetas de presentación?'background
      >
        Las <strong>Tarjetas de presentación</strong> son herramientas de Marketing fundamentales fundamentales para dar a conocer a ti o a tu negocio. Por lo tanto, es importante que invierta el tiempo y dinero suficiente en crearla para diferenciar tu negocio del resto.
        <br />
        <br />
        En el mundo empresarial y profesional, las <strong>tarjetas publicitarias</strong> son de suma importancia y traes consigo beneficios como lo que señalamos a continuación.
        <ul>
          <li>
            Podras dar a conocer información relevante en un solo espacio.
          </li>
          <li>
            Es una herramienta poderosa para tener tu primer contacto con las personas.
          </li>
          <li>
            Es una gran oportunidad de darse a conocer y de diferenciar tu negocio del resto
          </li>
          <li>
            El diseño de las tarjetas de presentación permite llamar la atención del público objetivo.
          </li>
          <li>
            Los clientes podrán contactarte fácilmente.
          </li>
          <li>
            Podrás intercambiar información de forma rápida y sencilla.
          </li>
          <li>
            Podrás ofrecer tus servicios, productos, números telefónicos y mucho mas.
          </li>
          <li>
            Refuerza la imagen profesional de la empresa y transmite profesionalismo.
          </li>
        </ul>

      </SimpleSection>

      <FAQs
        questions={FAQsList}
      />

    </main>
  )
}




export const getStaticProps: GetStaticProps = async(ctx) => {

  const listaTarjetas: productInterface[] = []
  const FAQs : questionInterface[]=[]

  
  categoriesList.find(cat => {
    if (cat.code === '0101') {
      cat.FAQs?.forEach(element => {
        FAQs.push(element)
      })
      cat.products?.forEach(element => {
        listaTarjetas.push(element)
      });
    }
  })

  return {
    props: {
      productList: listaTarjetas,
      FAQsList:FAQs 
    }
  }
}

export default TarjetasPresentacionPage