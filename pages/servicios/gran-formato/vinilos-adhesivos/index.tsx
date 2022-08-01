import { GetStaticProps, NextPage } from 'next'
import { productInterface } from '../../../../interfaces/productsInterface';
import { questionInterface } from '../../../../interfaces/accordionPropsInterface';
import { categoriesList } from '../../../../data/categories';
import { SEO } from '../../../../components/SEO/SEO';
import { TitlePage } from '../../../../components/titlePage/TitlePage';
import { ProductsGrid } from '../../../../components/products/productsGrid/ProductsGrid';



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
    title: 'Gran Formato',
    url: '/servicios/gran-formato'
  },
]




const VinilosAdhesivosPage:NextPage<Props> = ( { productList, FAQsList } ) => {
  return (
    <main>


      <SEO
        title='Impresión Gran Formato'
        description='Brinda la posibilidad de crear gráficas a todo color y de gran impacto publicitario, ofreciendo diferentes acabados según sus necesidades: calidad fotográfica a alta resolución, en brillo y mate, montajes en cartón pluma, enmarcados en aluminio, …, etc.;'
      />

      <TitlePage 
        title='Impresión Gran Formato'
        breacumb={breacumbArray}
      />

      <ProductsGrid
        subtitle='¿Necesitas impresión gran formato?'
        title='Conoce nuestra variedad de productos'
        products={productList}
      />


      
    </main>
  )
}






export const getStaticProps: GetStaticProps = async(ctx) => {

  const listaTarjetas: productInterface[] = []
  const FAQs : questionInterface[]=[]

  
  categoriesList.find(cat => {
    if (cat.code === '0501') {
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








export default VinilosAdhesivosPage