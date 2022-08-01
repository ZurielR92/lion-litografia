import type { GetStaticProps, NextPage } from 'next'
import { Welcome } from '../components/welcome/Welcome';
import { PopularCategories } from '../components/categories/popularCategories/PopularCategories'; 
import { categoriesList } from '../data/categories';
import { categoryInterface } from '../interfaces';
import { SEO } from '../components/SEO/SEO';

interface Props {
  listaCategorias: categoryInterface[]
}

const Home: NextPage<Props> = (props) => {

  return (
    <>

    <SEO
    title='Imprenta'
    />

    <Welcome/>
    <PopularCategories categoryList={props.listaCategorias} />
    </>
  )

}



export const getStaticProps: GetStaticProps = async(ctx) => {

  const listaCategorias: categoryInterface[] = [];
  const codigos: string[] = ['0101','0205','0106','0201','0501','0102' ];

  for (let p = 0; p < 6; p++) {
    categoriesList.find((obj, i) => {
      if (obj.code === codigos[p]) {
        listaCategorias.push(obj);
      }
    })
  }
  return {
    props: {
      listaCategorias
    }
  }
}



export default Home
