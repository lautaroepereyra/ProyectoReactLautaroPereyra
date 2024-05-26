import {useState, useEffect} from 'react'
import './itemListContainer.css'
import Loader from '../Loader/Loader'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])

    useEffect(() =>{

        const fetchData = async () => {
            try {
                const response = await fetch("./data/productos.json")
                const data =  await response.json()
                setProductos(data)
            } catch (error) {
                console.log("No se pudieron mostrar los productos");
            }
        }

        fetchData()
        
    }, [])

    console.log(productos);

    return (
       <div className="contenidoContainer">           
            <h2 className='contenidoTitulo'>
                {greeting}
            </h2>
            
            {productos.length == 0 ?
            
                    <Loader/>
                    
                    :

                    <ItemList productos={productos} />
            
            }

        </div>
    )
}

export default ItemListContainer