import React from 'react'

const TituloProdComp = ({ texto }) => {
          return (
                    <div style={{
                              fontFamily: "fantasy",
                              fontWeight: "50",
                              fontSize: "30px",
                              display: 'flex',

                              marginBottom: "10px",
                              borderBottom: "1px solid ",
                              color: "#51AD00"
                    }}>
                              {texto}
                    </div>
          )
}

export default TituloProdComp
