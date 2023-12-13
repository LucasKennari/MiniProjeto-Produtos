import React from 'react'

const PrecoComp = ({ preco }) => {
          return (
                    <div style={{
                              fontSize: "20px",
                              fontWeight: 'bold',
                              display: 'flex',
                              marginTop: "10px",

                              padding: "2px 10px 2px 10px",
                              background: "#01C4FE",

                              borderRadius: "5px"
                    }}>
                              R$ {preco}
                    </div>
          )
}

export default PrecoComp
