import React from 'react'
import style from "./preco.module.css"

const PrecoComp = ({ preco }) => {
          return (
                    <span className={style.preco}>
                              R$ {preco}
                    </span>
          )
}

export default PrecoComp
