import type { NextPage } from 'next'
import { Welcome } from '../components/welcome/Welcome';
import { Nosotros1 } from '../components/nosotros1/Nosotros1';
import { Map } from '../components/map/Map';
import { ProductosPopulares } from '../components/productos/productosPopulares/ProductosPopulares';

const Home: NextPage = () => {
  return (
    <>
    <Welcome/>
    <Nosotros1/>
    <ProductosPopulares/>
    </>
  )
}

export default Home
