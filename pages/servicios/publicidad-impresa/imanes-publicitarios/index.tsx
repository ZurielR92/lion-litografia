import { GetStaticProps, NextPage } from 'next'
import { questionInterface } from '../../../../interfaces/accordionPropsInterface';
import { categoriesList } from '../../../../data/categories';
import { productInterface } from '../../../../interfaces/productsInterface';
import { SEO } from '../../../../components/SEO/SEO';
import { TitlePage } from '../../../../components/titlePage/TitlePage';
import { ProductsGrid } from '../../../../components/products/productsGrid/ProductsGrid';
import { FAQs } from '../../../../components/FAQs/FAQs';
import { SimpleSection } from '../../../../components/simpleSection/SimpleSection';


interface Props {
  productList: productInterface[]
  FAQsList: questionInterface[]
}

const ImanesPublicitariosPage:NextPage<Props> = ({ productList, FAQsList }) => {
  
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
    <main>

      <SEO
        title='Imanes Publicitarios'
        description='Contiza inmediatamente tus imanes publicitarios'
      />

    <TitlePage
        title='Imanes Publicitario'
        breacumb={breacumbArray}
      />

    <ProductsGrid
        subtitle='¿cuales son mis opciones para imanes?'
        title='Conoce nuestra variedad de acabados'
        products={productList}
      />


<SimpleSection 
        title='Imanes Publicitarios para mi empresa' 
        subtitle='¿Que son los imanes publicitarios?'background
      >

&nbsp;&nbsp;&nbsp;Los imanes publicitarios son unos de los elementos publicitarios más funcionales para diferentes empresas, como farmacias, restaurantes, supermercados entre otro tipo de negocios que ofrezcan servicio de entrega a domicilio en Medellín o cualquier otro lugar.
<br />
<br />
Si tenemos en cuenta que la mayoría de hogares y locales cuentan con una nevera, la publicidad magnética es una de las mejores opciones, ya que usamos las neveras a diario, tus clientes verán la publicidad constantemente.
<br />
<br />
&nbsp;&nbsp;&nbsp;El diseño de tus imanes para neveras puede estar acompañado por imágenes, datos de contacto o  un calendario que agregue un valor adicional a tu pieza publicitaria.
<br />
<br />
&nbsp;&nbsp;&nbsp;Puedes escoger entre diferentes tamaños y terminaciones él que más se adapte a tus necesidades.

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
    if (cat.code === '0106') {
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



export default ImanesPublicitariosPage