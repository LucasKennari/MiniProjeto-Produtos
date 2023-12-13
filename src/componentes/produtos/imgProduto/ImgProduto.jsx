import React from 'react'
import style from "../../../styleModule/style.module.css"
import { useNavigate } from 'react-router-dom'
const ImgProduto = ({ img, produto }) => {
          const navigate = useNavigate()
          function handleClick(e) {

                    navigate(`/produto/${produto}`)
          }
          return (
                    <button className={style.buttonImg} onClick={handleClick}>
                              <img src={img} alt={img} className={style.imgProduto} />
                    </button>
          )
}

export default ImgProduto
