import React from 'react'
import style from "./descricao.module.css"
const DescricaoComp = ({ texto }) => {
          return (
                    <p className={style.descricao}>
                              {texto}
                    </p>
          )
}

export default DescricaoComp
