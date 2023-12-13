import React from 'react'

const ImgSlide = ({ img }) => {
          return (<>
                    <div style={{
                              gap: "10px",
                              border: "1px solid #040B92", display: "flex", width: "400px", height: "500px", justifyContent: "center",
                              alignItems: "center"
                    }}>
                              <img src={img} alt="" style={{ height: "300px" }} />
                    </div>
          </>
          )
}

export default ImgSlide
