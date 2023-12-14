import React from 'react'
import style from "./Titulo.module.css"

const Titulo = ({ texto }) => {

          return (
                    <>
                              <h3 className={style.nome}>{texto}</h3>
                    </>
          )
}

export default Titulo
