import { GetStaticProps, NextPage } from 'next'
import { questionInterface } from '../../../../interfaces/accordionPropsInterface';
import { categoriesList } from '../../../../data/categories';
import { productInterface } from '../../../../interfaces/productsInterface';
import { SEO } from '../../../../components/SEO/SEO';
import { TitlePage } from '../../../../components/titlePage/TitlePage';
import { ProductsGrid } from '../../../../components/products/productsGrid/ProductsGrid';
import { SimpleSection } from '../../../../components/simpleSection/SimpleSection';
import { FAQs } from '../../../../components/FAQs/FAQs';


interface Props {
  productList: productInterface[]
  FAQsList: questionInterface[]
}

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






const TalonariosPage: NextPage<Props> = ( { productList, FAQsList } ) => {
  return (

    <>
      <SEO
        title='Impresión de Talonarios'
        description='Talonarios, boletas para rifas, facturas y remisiones de todo tipo! Autocopiantes, con una, dos y 3 copias, con precorte ¡Cotiza ahora!'
      />

      <TitlePage 
        title='Talonarios'
        breacumb={breacumbArray}
      />

      <ProductsGrid
        subtitle='¿Que tipo de talonario necesito?'
        title='Conoce nuestra variedad de Talonarios Personalizados'
        products={productList}
      />

      <SimpleSection 
        title='¿Que es una tarjeta de presentación y para que sirve?' 
        subtitle='¿Realente necesito tarjetas de presentación?'background
        >
          Los talonarios autocopiativos son imprescindibles dentro de la papelería de empresa. Y es que el funcionamiento de un negocio no se entendería ni tendría sentido si no se emitieran facturas, recibos o se elaboraran presupuestos. Son fundamentales en estos casos ya que con ellos podrás tener el justificante de la compra o venta realizada, del pago efectuado o el cobro recibido, entre otras operaciones.
      </SimpleSection>

    
      <SimpleSection 
        title='¿Se pueden Personalizar los talonarios?' 
        subtitle=''background
        >
          Los talonarios autocopiativos son imprescindibles dentro de la papelería de empresa. Y es que el funcionamiento de un negocio no se entendería ni tendría sentido si no se emitieran facturas, recibos o se elaboraran presupuestos. Son fundamentales en estos casos ya que con ellos podrás tener el justificante de la compra o venta realizada, del pago efectuado o el cobro recibido, entre otras operaciones.
      </SimpleSection>

      <FAQs
        questions={FAQsList}
      />


    </>

    



  )
}






export const getStaticProps: GetStaticProps = async(ctx) => {

  const listaTarjetas: productInterface[] = []
  const FAQs : questionInterface[]=[]

  
  categoriesList.find(cat => {
    if (cat.code === '0201') {
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




export default TalonariosPage