import { useState } from 'react'
import './cartWidget.css'
const CartWidget = () => {
  const [total, setTotal] = useState(0)
  return (
    <div className="carrito">
        <button>🛒</button>
        <p>{total}</p>
    </div>
  )
}

export default CartWidget