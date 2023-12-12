import React from 'react'
import { NavLink } from "react-router-dom"
import style from "../../styleModule/style.module.css"
const Header = () => {
          return (
                    <div className={style.display}>
                              <section className={style.display2}>
                                        <NavLink to="" end className={style.header}>Produtos </NavLink>

                                        <NavLink to="contato" className={style.header}>Contato </NavLink>
                              </section>
                    </div>
          )
}

export default Header
