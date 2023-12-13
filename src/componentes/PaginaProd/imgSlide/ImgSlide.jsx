import React from 'react'

const ImgSlide = ({ img }) => {
          return (<>
                    <div style={{
                              gap: "10px",

                              display: "flex",
                              width: "400px",

                              height: "500px",
                              justifyContent: "center",
                              alignItems: "center"
                    }}>
                              <img src={img} alt="" style={{ height: "400px" }} />
                    </div>
          </>
          )
}

export default ImgSlide
