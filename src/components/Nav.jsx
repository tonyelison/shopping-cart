import { Link } from "react-router-dom";
import "../styles/nav.css";

const Nav = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="shop">Shop</Link></li>
    </ul>
  </nav>
);

export default Nav;