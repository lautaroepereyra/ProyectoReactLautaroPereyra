import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos a mi Tienda"} />
      <Footer/>
    </>
  )
}

export default App