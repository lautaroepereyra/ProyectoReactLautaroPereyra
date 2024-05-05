import './itemListContainer.css'

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({greeting}) => {
    return (
        <div className='contenidoContainer'>
            <h2 className='titulo'>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer