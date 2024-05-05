import CartWidget from "../CartWidget/CartWidget"
import './navbar.css'
const Navbar = () => {
  return (
    <nav className="navContainer">
        <div>MSP IMPORT</div>

        <div>
            <ul className="navlinks">
                <li>Home</li>
                <li>Productos</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
        </div>

        <CartWidget/>
    </nav>
  )
}

export default Navbar