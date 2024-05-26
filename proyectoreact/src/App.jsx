import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos a mi Tienda"} />
      <ItemDetailContainer id={1}/>
      <Footer/>
    </>
  )
}

export default App