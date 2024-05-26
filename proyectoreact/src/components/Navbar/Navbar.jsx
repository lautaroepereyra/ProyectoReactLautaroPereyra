import CartWidget from "../CartWidget/CartWidget"
import './navbar.css'
const Navbar = () => {
  return (
    <nav className="navContainer">
        <div>MSP IMPORT</div>

        <div>
            <ul className="navlinks">
                <li>Consolas</li>
                <li>Laptops</li>
                <li>Smartphones</li>
                <li>Tablets</li>
            </ul>
        </div>

        <CartWidget/>
    </nav>
  )
}

export default Navbar