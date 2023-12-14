import React from 'react'
import style from "../../../styleModule/button.module.css/button.module.css"
const ButtonCompra = () => {
          return (
                    <div style={{
                              display: "flex",


                    }}>

                              <button disabled className={style.buttonComprar}>Comprar</button>
                    </div>
          )
}

export default ButtonCompra
