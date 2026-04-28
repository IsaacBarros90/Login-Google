import { Link } from "react-router-dom";
import './Nav.css'

export function Nav() {
  return (
    <nav className='nav'>
      <Link to="/">Home</Link>
      <Link to="/Register">Register</Link>
      <Link to="/Sobre">About</Link>
    </nav>
  );
}