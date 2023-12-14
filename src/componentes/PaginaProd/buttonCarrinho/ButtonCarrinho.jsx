import React from 'react'
import ImgCarrinho from './imgCarrinho'
import style from "../../../styleModule/button.module.css/button.module.css"
const ButtonCarrinho = () => {
          return (
                    <div style={{
                              display: "flex",

                    }}>
                              <button disabled className={style.buttonCarrinho}
                              >Adicionar <ImgCarrinho img={"https://imgur.com/OKIVvl1.png"} /></button>

                    </div>
          )
}

export default ButtonCarrinho
