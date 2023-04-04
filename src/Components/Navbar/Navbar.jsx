//import "./Navbar.css";

import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css"



export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img src="https://res.cloudinary.com/dtpevosla/image/upload/v1680629796/Logo_xxnoww.png" alt="Logo de la empresa" />
      <ul>
        <li>Mujer</li>
        <li>Hombre</li>
        <li>Niños</li>
      </ul>
      <CartWidget />  
    </div>
  );
};