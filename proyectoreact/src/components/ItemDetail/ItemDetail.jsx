import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({producto}) => {
  return (
    <div>
        <h3>{producto.name}</h3>
        <img style={{"width": "60vh"}}src={producto.image}></img>
        <p>Descripción: {producto.description}</p>
        <p>Categoria: {producto.category}</p>
        <p>Precio: ${producto.price}</p>
        <p>Stock: {producto.stock}</p>

        <ItemCount initial={1} stock={producto.stock}/>
    </div>
  )
}

export default ItemDetail