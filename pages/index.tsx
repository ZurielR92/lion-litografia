import type { NextPage } from 'next'
import { Welcome } from '../components/welcome/Welcome';
import { Nosotros1 } from '../components/nosotros1/Nosotros1';

const Home: NextPage = () => {
  return (
    <>
    <Welcome/>
    <Nosotros1/>
    </>
  )
}

export default Home
