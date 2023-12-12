import React from 'react'
import ImgCarrinho from './imgCarrinho'
import style from "../../../styleModule/button.module.css/button.module.css"
const ButtonCarrinho = () => {
          return (
                    <div style={{
                              display: "flex",

                    }}>
                              <button className={style.buttonCarrinho}
                              >Adicionar <ImgCarrinho img={"/src/img/carrinho-de-compras.png"} /></button>

                    </div>
          )
}

export default ButtonCarrinho
