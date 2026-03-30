import {Link} from "react-router-dom";
import "./Navbar.css"
import {useContext} from "react";
import {AuthContext} from "./AuthContext";

function Navbar() {
    const{logout}=useContext(AuthContext);
  return (
    <>
    
       <ul className="navbar">
           <li>
            <Link className="link" to="/">Home</Link>
           </li>
        <li>
            <Link className="link" to ="/todo">Todo</Link>
        </li>
        <li>
            <Link className="link" to ="/products">Products</Link>
        </li>
        <li>
            <Link className="link" to ="/orders">Orders</Link>
        </li>
        <li>
            <Link className="link" to ="/cart">Cart</Link>
        </li>
        <li>
            <button onClick={logout}>Logout </button>
        </li>
        </ul>


        </>
  );
}

export default Navbar;