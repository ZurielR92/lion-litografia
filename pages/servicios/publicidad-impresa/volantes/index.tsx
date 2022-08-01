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
    title: 'Pulicidad Impresa',
    url: '/servicios/publicidad-impresa'
  },
]

const VolantesPage:NextPage<Props> = ( { productList, FAQsList } ) => {
  return (
    <main>


      <SEO
        title='Volantes Publicitarios'
        description=''
      />


      <TitlePage 
        title='Volantes Publicitarios'
        breacumb={breacumbArray}
      />


      <ProductsGrid
        subtitle='¿que tipo de volantes hacemos?'
        title='Conoce nuestra variedad en Volantes Publicitarios'
        products={productList}
      />




    </main>
  )
}


export const getStaticProps: GetStaticProps = async(ctx) => {

  const listaTarjetas: productInterface[] = []
  const FAQs : questionInterface[]=[]

  
  categoriesList.find(cat => {
    if (cat.code === '0102') {
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

export default VolantesPage