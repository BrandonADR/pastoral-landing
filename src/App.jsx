import Navbar from './components/Navbar';
import Header from './components/Header';
import Somos from './components/Somos';
import Areas from './components/Areas';
import Tecnologias from './components/Tecnologias';
import Proyectos from './components/Proyectos';
import Team from './components/Team';
import Contacto from './components/Contacto';
import Maps from './components/Maps';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {

  const images = [
    {
      id: '1',
      title: 'Imagen 1',
      // image: 'src/assets/carousel1.jpg'
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '2',
      title: 'Imagen 2',
      // image: 'src/assets/carousel2.jpg'
      image: 'https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '3',
      title: 'Imagen 3',
      // image: 'src/assets/carousel3.jpg'
      image: 'https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ]  

  return (
    <>
      <Navbar/>
      {/* <Carousel images={images}/>
      <Somos/>
      <Areas/>
      <Tecnologias/>
      <Proyectos/>
      <Team/>
      <Contacto/>
      <Maps/>
      <Footer/> */}
    </>
  )
}

export default App
