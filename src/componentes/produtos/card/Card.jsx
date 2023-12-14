import React, { Children } from 'react'

import Titulo from '../titulo/Titulo'
import ImgProduto from '../imgProduto/ImgProduto'

import style from "./card.module.css"

const Card = ({ texto, img, produto }) => {

          return (
                    <div className={style.card}>

                              <ImgProduto img={img} produto={produto} />
                              <Titulo texto={texto} />
                    </div>
          )
}

export default Card
