import React from 'react'

const DescricaoComp = ({ texto }) => {
          return (
                    <div style={{
                              fontSize: "20px",
                              display: 'flex',
                              margin: "30px 0px 30px 0px"
                    }}>
                              {texto}
                    </div>
          )
}

export default DescricaoComp
