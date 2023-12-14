import React from 'react'
import style from "./ImgSlide.module.css"

const ImgSlide = ({ img }) => {
          return (<>
                    <div className={style.imgSide}>
                              <img src={img} alt="" />
                    </div>
          </>
          )
}

export default ImgSlide
