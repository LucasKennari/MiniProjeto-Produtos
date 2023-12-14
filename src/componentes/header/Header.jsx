import React from 'react'
import { NavLink } from "react-router-dom"
import style from "./header.module.css"
const Header = () => {
          return (
                    <nav className={style.header}>
                              <ul>
                                        <li>
                                                  <NavLink to="/" end className={style.link}>Produtos </NavLink>
                                        </li>
                                        <li>
                                                  <NavLink to="contato" className={style.link}>Contato </NavLink>
                                        </li>
                              </ul>
                    </nav>
          )
}

{/* <div className={style.display}>
<section className={style.display2} >
          <NavLink to="" end className={style.header}>Produtos </NavLink>

          <NavLink to="contato" className={style.header}>Contato </NavLink>
</section>
</div> */}
export default Header
