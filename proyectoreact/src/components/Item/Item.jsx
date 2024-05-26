import React from 'react'
const Item = ({producto}) => {
  return (
    <div>
        <h3>{producto.name}</h3>
        <img style={{width: "100px"}}src={producto.image}></img>
        <p>{producto.description}</p>
    </div>
  )
}

export default Item