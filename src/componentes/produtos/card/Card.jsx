import React, { Children } from 'react'
import Titulo from '../titulo/Titulo'
import style from "../../../styleModule/style.module.css"
import ImgProduto from '../imgProduto/ImgProduto'
const Card = ({ texto, img, produto }) => {

          return (
                    <div
                              className={style.card}
                              style={{
                                        border: "1px solid #EA28D6"
                              }}>

                              <ImgProduto img={img} produto={produto} />
                              <Titulo texto={texto} />
                    </div>
          )
}

export default Card
